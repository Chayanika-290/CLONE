import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{
      padding: '1rem',
      background: '#00c2a8',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>Your App Name</div>
      {user && (
        <button 
          onClick={handleLogout}
          style={{
            background: 'white',
            color: '#00c2a8',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar; 