import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import { useAuth } from './AuthContext';

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [invitationCode, setInvitationCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    if (!isLoginMode && password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      setIsLoading(false);
      return;
    }

    // Validate invitation code in registration mode
    if (!isLoginMode && !validateInvitationCode(invitationCode)) {
      setErrorMessage('Invalid or expired invitation code');
      setIsLoading(false);
      return;
    }

    try {
      if (isLoginMode) {
        // Use the auth context login function
        const result = await login(username, password);
        if (result.success) {
          navigate('/client-resources');
        } else {
          setErrorMessage(result.message || 'Invalid username or password');
        }
      } else {
        // Use the auth context register function
        const result = await register(username, password, fullName, organization, invitationCode);
        if (result.success) {
          setIsLoginMode(true);
          setErrorMessage('Account created! Please log in.');
          setPassword('');
          setConfirmPassword('');
          setInvitationCode('');
        } else {
          setErrorMessage(result.message || 'Registration failed');
        }
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to validate invitation code
  const validateInvitationCode = (code) => {
    // In a real implementation, this would check against a database of valid codes
    // For demo purposes, we'll accept any code that's at least 6 characters long
    return code && code.length >= 6;
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>{isLoginMode ? 'Client Login' : 'Create Account'}</h2>
        
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          {!isLoginMode && (
            <>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="organization">Organization</label>
                <input
                  type="text"
                  id="organization"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="invitationCode">Invitation Code</label>
                <input
                  type="text"
                  id="invitationCode"
                  value={invitationCode}
                  onChange={(e) => setInvitationCode(e.target.value)}
                  required
                  placeholder="Enter your invitation code"
                />
                <small className="field-help">
                  A unique code provided by Clarity Impact Finance
                </small>
              </div>
            </>
          )}
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          {!isLoginMode && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          
          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? 'Loading...' : (isLoginMode ? 'Login' : 'Create Account')}
          </button>
        </form>
        
        <div className="mode-toggle">
          {isLoginMode ? (
            <p>
              Don't have an account?{' '}
              <button 
                onClick={() => setIsLoginMode(false)}
                className="text-btn"
              >
                Sign up with an invitation code
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button 
                onClick={() => setIsLoginMode(true)}
                className="text-btn"
              >
                Log in
              </button>
            </p>
          )}
        </div>
        
        <div className="back-home">
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
