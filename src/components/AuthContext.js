import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username');
    const userData = localStorage.getItem('userData');
    
    if (isLoggedIn && username) {
      let userDetails = { username };
      
      if (userData) {
        try {
          const parsedData = JSON.parse(userData);
          userDetails = { ...userDetails, ...parsedData };
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      }
      
      setCurrentUser(userDetails);
    }
    
    setLoading(false);
  }, []);

  const login = (username, password) => {
    // Get client accounts from localStorage
    const clientAccounts = JSON.parse(localStorage.getItem('clientAccounts') || '[]');
    
    // Check if username and password match
    const userAccount = clientAccounts.find(account => 
      account.username === username && account.password === password
    );
    
    return new Promise((resolve) => {
      setTimeout(() => {
        if (userAccount) {
          // Login successful
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('username', username);
          localStorage.setItem('userData', JSON.stringify({
            fullName: userAccount.fullName,
            organization: userAccount.organization
          }));
          
          setCurrentUser({
            username,
            fullName: userAccount.fullName,
            organization: userAccount.organization
          });
          
          resolve({ success: true });
        } else {
          // Login failed
          resolve({ success: false, message: 'Invalid username or password' });
        }
      }, 1000);
    });
  };

  const register = (username, password, fullName, organization, invitationCode) => {
    // Get client accounts from localStorage to check for duplicates
    const clientAccounts = JSON.parse(localStorage.getItem('clientAccounts') || '[]');
    
    // Check if username already exists
    const usernameExists = clientAccounts.some(account => account.username === username);
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Validate invitation code
        if (!validateInvitationCode(invitationCode)) {
          resolve({ success: false, message: 'Invalid or expired invitation code' });
          return;
        }
        
        // Check for duplicate username
        if (usernameExists) {
          resolve({ success: false, message: 'Username already exists' });
          return;
        }
        
        // Mark invitation code as used
        markInvitationCodeAsUsed(invitationCode);
        
        // Create new client account
        const newAccount = {
          id: Date.now().toString(),
          username,
          password, // In a real app, this would be hashed
          fullName,
          organization,
          createdAt: new Date().toISOString()
        };
        
        // Store account in localStorage
        clientAccounts.push(newAccount);
        localStorage.setItem('clientAccounts', JSON.stringify(clientAccounts));
        
        resolve({ success: true });
      }, 1000);
    });
  };

  // Function to validate invitation code
  const validateInvitationCode = (code) => {
    // Get all valid codes from localStorage
    const storedCodes = JSON.parse(localStorage.getItem('invitationCodes') || '[]');
    const usedCodes = JSON.parse(localStorage.getItem('usedInvitationCodes') || '[]');
    
    // Check if the code exists and hasn't been used
    return storedCodes.some(storedCode => 
      storedCode.code === code && 
      !usedCodes.includes(code) &&
      new Date(storedCode.expiresAt) > new Date()
    );
  };

  // Function to mark invitation code as used
  const markInvitationCodeAsUsed = (code) => {
    const usedCodes = JSON.parse(localStorage.getItem('usedInvitationCodes') || '[]');
    
    if (!usedCodes.includes(code)) {
      usedCodes.push(code);
      localStorage.setItem('usedInvitationCodes', JSON.stringify(usedCodes));
    }
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('userData');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    loading,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
