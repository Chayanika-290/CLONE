import React, { useState, useEffect } from 'react';

const SuccessScreen = ({ onClose }) => {
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      onClose();
    }
  }, [countdown, onClose]);

  return (
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-4">
        <img 
          src="/success-check.gif" 
          alt="Success" 
          className="w-full h-full object-contain"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-2">Successfully Logged In!</h2>
      <p className="text-gray-600">Redirecting in {countdown}...</p>
    </div>
  );
};

export default SuccessScreen; 