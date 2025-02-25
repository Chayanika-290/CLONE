import React from 'react';
import { useAuth } from '../context/AuthContext';

const AccountPage = () => {
  const { user } = useAuth();

  if (!user) {
    return null; // or a loading spinner
  }

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8">
      <h1 className="text-2xl font-semibold mb-6">Account Settings</h1>
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <p className="font-medium">{user?.name || 'N/A'}</p>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
            <p className="font-medium">+91 {user?.phoneNumber || 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage; 