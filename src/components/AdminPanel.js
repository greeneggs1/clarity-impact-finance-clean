import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = () => {
  const [invitationCodes, setInvitationCodes] = useState([]);
  const [newCodePrefix, setNewCodePrefix] = useState('CIF-');
  const [adminPassword, setAdminPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeTab, setActiveTab] = useState('codes');
  const [clientAccounts, setClientAccounts] = useState([]);
  
  // New client account form state
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newFullName, setNewFullName] = useState('');
  const [newOrganization, setNewOrganization] = useState('');
  const [newClientError, setNewClientError] = useState('');
  
  const navigate = useNavigate();
  
  useEffect(() => {
    // Load existing codes and accounts from localStorage
    if (isAuthenticated) {
      loadInvitationCodes();
      loadClientAccounts();
    }
  }, [isAuthenticated]);
  
  const loadInvitationCodes = () => {
    const storedCodes = JSON.parse(localStorage.getItem('invitationCodes') || '[]');
    const usedCodes = JSON.parse(localStorage.getItem('usedInvitationCodes') || '[]');
    
    // Mark codes as used based on the usedCodes array
    const codesWithStatus = storedCodes.map(code => ({
      ...code,
      used: usedCodes.includes(code.code)
    }));
    
    setInvitationCodes(codesWithStatus);
  };

  const loadClientAccounts = () => {
    const accounts = JSON.parse(localStorage.getItem('clientAccounts') || '[]');
    setClientAccounts(accounts);
  };
  
  const handleAdminLogin = (e) => {
    e.preventDefault();
    // In a real app, this would validate against a secure backend
    // For demo purposes, use a simple password
    if (adminPassword === 'admin123') {
      setIsAuthenticated(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid admin password');
    }
  };
  
  const generateCode = () => {
    // Generate a random 6-character code
    const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `${newCodePrefix}${randomPart}`;
  };
  
  const createNewCode = () => {
    console.log("Creating new code...");
    const newCode = {
      code: generateCode(),
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
      used: false
    };
    
    const updatedCodes = [...invitationCodes, newCode];
    setInvitationCodes(updatedCodes);
    localStorage.setItem('invitationCodes', JSON.stringify(updatedCodes));
    
    // Show confirmation
    alert(`New invitation code created: ${newCode.code}`);
  };

  const createClientAccount = (e) => {
    e.preventDefault();
    
    // Validate inputs
    if (!newUsername || !newPassword || !newFullName || !newOrganization) {
      setNewClientError('All fields are required');
      return;
    }
    
    // Check if username already exists
    if (clientAccounts.some(account => account.username === newUsername)) {
      setNewClientError('Username already exists');
      return;
    }
    
    // Create new client account
    const newAccount = {
      id: Date.now().toString(),
      username: newUsername,
      password: newPassword, // In a real app, this would be hashed
      fullName: newFullName,
      organization: newOrganization,
      createdAt: new Date().toISOString()
    };
    
    const updatedAccounts = [...clientAccounts, newAccount];
    setClientAccounts(updatedAccounts);
    localStorage.setItem('clientAccounts', JSON.stringify(updatedAccounts));
    
    // Reset form
    setNewUsername('');
    setNewPassword('');
    setNewFullName('');
    setNewOrganization('');
    setNewClientError('');
    
    // Show confirmation
    alert(`New client account created for: ${newAccount.username}`);
  };
  
  const deleteCode = (codeToDelete) => {
    const updatedCodes = invitationCodes.filter(code => code.code !== codeToDelete);
    setInvitationCodes(updatedCodes);
    localStorage.setItem('invitationCodes', JSON.stringify(updatedCodes));
    
    // Also remove from used codes if present
    const usedCodes = JSON.parse(localStorage.getItem('usedInvitationCodes') || '[]');
    const updatedUsedCodes = usedCodes.filter(code => code !== codeToDelete);
    localStorage.setItem('usedInvitationCodes', JSON.stringify(updatedUsedCodes));
  };

  const deleteClientAccount = (accountId) => {
    const updatedAccounts = clientAccounts.filter(account => account.id !== accountId);
    setClientAccounts(updatedAccounts);
    localStorage.setItem('clientAccounts', JSON.stringify(updatedAccounts));
  };
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
  // Generate a random password
  const generateRandomPassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
    let password = '';
    for (let i = 0; i < 10; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setNewPassword(password);
  };
  
  if (!isAuthenticated) {
    return (
      <div className="admin-login-container">
        <h2>Admin Access</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleAdminLogin}>
          <div className="form-group">
            <label htmlFor="adminPassword">Admin Password</label>
            <input
              type="password"
              id="adminPassword"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="admin-btn">Login</button>
        </form>
        <button className="back-btn" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }
  
  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <p className="admin-description">
        Manage invitation codes and client accounts.
      </p>
      
      <div className="admin-tabs">
        <button 
          className={`tab-btn ${activeTab === 'codes' ? 'active' : ''}`}
          onClick={() => setActiveTab('codes')}
        >
          Invitation Codes
        </button>
        <button 
          className={`tab-btn ${activeTab === 'accounts' ? 'active' : ''}`}
          onClick={() => setActiveTab('accounts')}
        >
          Client Accounts
        </button>
      </div>
      
      {activeTab === 'codes' && (
        <div className="codes-tab">
          <div className="code-generator">
            <div className="code-prefix-input">
              <label htmlFor="codePrefix">Code Prefix:</label>
              <input
                type="text"
                id="codePrefix"
                value={newCodePrefix}
                onChange={(e) => setNewCodePrefix(e.target.value)}
                maxLength={10}
              />
            </div>
            <button 
              className="create-code-btn" 
              onClick={createNewCode}
              style={{
                background: '#3498db',
                color: 'white',
                padding: '12px 20px',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              Generate New Code
            </button>
          </div>
          
          <div className="codes-list-container">
            <h3>Active Invitation Codes</h3>
            {invitationCodes.length === 0 ? (
              <p className="no-codes-message">No invitation codes created yet.</p>
            ) : (
              <table className="codes-table">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Created</th>
                    <th>Expires</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {invitationCodes.map((code) => (
                    <tr key={code.code} className={code.used ? 'used-code' : ''}>
                      <td className="code-value">{code.code}</td>
                      <td>{formatDate(code.createdAt)}</td>
                      <td>{formatDate(code.expiresAt)}</td>
                      <td>
                        <span className={`status-badge ${code.used ? 'used' : 'available'}`}>
                          {code.used ? 'Used' : 'Available'}
                        </span>
                      </td>
                      <td>
                        <button 
                          className="delete-code-btn" 
                          onClick={() => deleteCode(code.code)}
                          disabled={code.used}
                          title={code.used ? "Used codes cannot be deleted" : "Delete this code"}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
      
      {activeTab === 'accounts' && (
        <div className="accounts-tab">
          <div className="create-account-container">
            <h3>Create New Client Account</h3>
            {newClientError && <div className="error-message">{newClientError}</div>}
            <form onSubmit={createClientAccount}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="newUsername">Username</label>
                  <input
                    type="text"
                    id="newUsername"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group password-group">
                  <label htmlFor="newPassword">Password</label>
                  <div className="password-input-container">
                    <input
                      type="text"
                      id="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                    <button 
                      type="button" 
                      className="generate-password-btn"
                      onClick={generateRandomPassword}
                    >
                      Generate
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="newFullName">Full Name</label>
                  <input
                    type="text"
                    id="newFullName"
                    value={newFullName}
                    onChange={(e) => setNewFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="newOrganization">Organization</label>
                  <input
                    type="text"
                    id="newOrganization"
                    value={newOrganization}
                    onChange={(e) => setNewOrganization(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <button type="submit" className="create-account-btn">Create Client Account</button>
            </form>
          </div>
          
          <div className="accounts-list-container">
            <h3>Client Accounts</h3>
            {clientAccounts.length === 0 ? (
              <p className="no-accounts-message">No client accounts created yet.</p>
            ) : (
              <table className="accounts-table">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Full Name</th>
                    <th>Organization</th>
                    <th>Created</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clientAccounts.map((account) => (
                    <tr key={account.id}>
                      <td>{account.username}</td>
                      <td>{account.fullName}</td>
                      <td>{account.organization}</td>
                      <td>{formatDate(account.createdAt)}</td>
                      <td>
                        <button
                          className="delete-account-btn"
                          onClick={() => deleteClientAccount(account.id)}
                          title="Delete this account"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
      
      <div className="admin-actions">
        <button className="back-btn" onClick={() => navigate('/')}>Back to Home</button>
        <button className="logout-btn" onClick={() => setIsAuthenticated(false)}>Logout</button>
      </div>
    </div>
  );
};

export default AdminPanel;
