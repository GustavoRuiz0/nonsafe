import React, { createContext, useContext, useState, useEffect } from 'react';
import { isTokenExpired, decodeToken } from './TokenUtils';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || '');

  const login = (token) => {
    try {
      decodeToken(token);
      localStorage.setItem('authToken', token);
      setAuthToken(token);
    } catch (error) {
      console.error('Login failed, invalid token:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setAuthToken('');
  };

  const checkTokenValidity = () => {
    try {
      if (authToken && !isTokenExpired(authToken)) {
        return true;
      }
    } catch (error) {
      console.error('Token validation failed:', error);
    }
    logout();
    return false;
  };

  useEffect(() => {
    checkTokenValidity();
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, login, logout, checkTokenValidity }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
