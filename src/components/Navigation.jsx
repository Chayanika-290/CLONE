import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navigation = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navigation">
      {user ? (
        <div className="user-menu">
          <span>Welcome, {user.firstName || user.phoneNumber}</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => navigate('/signin')} className="login-btn">
          Sign In
        </button>
      )}
    </nav>
  );
};

export default Navigation; 