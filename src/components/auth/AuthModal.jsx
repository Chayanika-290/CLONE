import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

const AuthModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState('initial'); // 'initial', 'phone', 'otp', or 'success'
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [timer, setTimer] = useState(60);
  const [countdown, setCountdown] = useState(3);
  const { login } = useAuth();

  useEffect(() => {
    let interval;
    if (step === 'otp' && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  useEffect(() => {
    let interval;
    if (step === 'success' && countdown > 0) {
      interval = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, countdown]);

  if (!isOpen) return null;

  const handleLoginClick = () => {
    setStep('phone');
  };

  const handleSendOtp = () => {
    if (phoneNumber.length === 10) {
      const newOtp = '123456'; // Fixed OTP for testing
      setGeneratedOtp(newOtp);
      setTimer(60);
      setStep('otp');
    }
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      setStep('success');
      setTimeout(() => {
        login({ phoneNumber });
        onClose();
        // Reset all states
        setStep('initial');
        setPhoneNumber('');
        setOtp('');
        setTimer(60);
        setCountdown(3);
      }, 3000);
    }
  };

  const handleResendOtp = () => {
    const newOtp = '123456'; // Fixed OTP for testing
    setGeneratedOtp(newOtp);
    setTimer(60);
    console.log('New OTP is:', newOtp);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
      <div className="bg-white rounded-lg w-[400px] relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>

        {step === 'initial' && (
          <div className="p-4">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-lg">Hi boAthead!</h2>
            </div>
            <button
              onClick={handleLoginClick}
              className="w-full bg-black text-white py-2 rounded"
            >
              Login
            </button>
          </div>
        )}

        {step === 'phone' && (
          <div>
            <div className="p-4">
              <h2 className="text-2xl font-medium">Get started</h2>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-600 mb-8">Please enter your Mobile Number to continue</p>

              <div className="bg-[#F5F5F5] p-6 rounded-lg mb-6">
                <label className="block text-gray-700 mb-2">
                  Enter Mobile Number
                </label>
                <div className="flex items-center bg-white rounded border border-gray-300">
                  <span className="px-3 py-2 text-gray-500 border-r border-gray-300">+91</span>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      if (value.length <= 10) {
                        setPhoneNumber(value);
                      }
                    }}
                    placeholder="Type Here"
                    className="flex-1 px-3 py-2 focus:outline-none"
                  />
                </div>
              </div>

              <div className="text-center text-xs text-gray-500 mb-6">
                By Confirming, you agree to boAt's{' '}
                <a href="#" className="text-gray-700">Terms and Conditions</a>
                {' '}and{' '}
                <a href="#" className="text-gray-700">Privacy Policy</a>.
              </div>

              <button
                onClick={handleSendOtp}
                disabled={phoneNumber.length !== 10}
                className={`w-full py-3 rounded-md transition-colors ${
                  phoneNumber.length === 10 
                    ? 'bg-black text-white hover:bg-gray-800' 
                    : 'bg-[#D1D5DB] text-white'
                }`}
              >
                SEND OTP
              </button>
            </div>
          </div>
        )}

        {step === 'otp' && (
          <div className="p-6">
            <h2 className="text-2xl font-medium mb-2">OTP Verification</h2>
            <p className="text-gray-600 mb-4">Enter the OTP sent to your Mobile Number</p>
            <p className="text-gray-600 mb-6">
              +91-{phoneNumber} 
              <button onClick={() => setStep('phone')} className="text-blue-500 ml-2">
                Edit
              </button>
            </p>

            <div className="bg-blue-50 p-3 rounded-lg mb-4 text-center">
              <p className="text-sm text-blue-600">Use this OTP for testing:</p>
              <p className="text-xl font-bold text-blue-700">123456</p>
            </div>

            <input
              type="text"
              value={otp}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '');
                if (value.length <= 6) {
                  setOtp(value);
                }
              }}
              placeholder="Type Here"
              className="w-full px-4 py-3 border rounded-lg mb-4"
              maxLength="6"
            />

            <div className="text-center mb-6">
              {timer > 0 ? (
                <p className="text-gray-600">{timer} | Enter the OTP</p>
              ) : (
                <button 
                  onClick={handleResendOtp}
                  className="text-blue-500"
                >
                  Resend OTP
                </button>
              )}
            </div>

            <button
              onClick={handleVerifyOtp}
              disabled={otp.length !== 6}
              className={`w-full py-3 rounded-md transition-colors ${
                otp.length === 6 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-[#D1D5DB] text-white'
              }`}
            >
              Continue
            </button>
          </div>
        )}

        {step === 'success' && (
          <div className="p-6 text-center">
            <div className="w-20 h-20 mx-auto mb-4">
              <img 
                src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123"
                alt="Success"
                className="w-full h-full"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Woohooo!!!</h2>
            <p className="text-xl mb-4">
              You are <span className="text-blue-500">successfully</span> logged in.
            </p>
            <p className="text-gray-600">
              Sailing in <span className="countdown">{countdown}</span> seconds...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal; 