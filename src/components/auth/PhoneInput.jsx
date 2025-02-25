import React, { useState } from 'react';

const PhoneInput = ({ onSubmit, initialValue = '' }) => {
  const [phoneNumber, setPhoneNumber] = useState(initialValue);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    onSubmit(phoneNumber);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Hi boAthead!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '');
              if (value.length <= 10) {
                setPhoneNumber(value);
                setError('');
              }
            }}
            placeholder="Enter Phone Number"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-red-500"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-medium"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default PhoneInput; 