import React, { useState } from 'react';

const OtpVerification = ({ phoneNumber, onSubmit, onEditPhone, timer, isValid }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.querySelector(`input[name=otp-${index + 1}]`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(otp.join(''));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Verify OTP</h2>
      <div className="flex items-center gap-2 mb-6">
        <p className="text-gray-600">Sent to {phoneNumber}</p>
        <button 
          onClick={onEditPhone}
          className="text-red-500 font-medium"
        >
          Edit
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              name={`otp-${index}`}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 text-center border rounded-lg focus:outline-none focus:border-red-500"
              maxLength={1}
            />
          ))}
        </div>

        {!isValid && (
          <p className="text-red-500 text-sm mb-4">Invalid OTP. Please try again.</p>
        )}

        <p className="text-gray-600 mb-4">
          {timer > 0 ? (
            `OTP valid for ${timer} seconds`
          ) : (
            <button 
              type="button"
              onClick={() => {/* Implement resend logic */}}
              className="text-red-500 font-medium"
            >
              Resend OTP
            </button>
          )}
        </p>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-medium"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default OtpVerification; 