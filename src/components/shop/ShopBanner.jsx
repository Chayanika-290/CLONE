import React from 'react';
import { Link } from 'react-router-dom';

const ShopBanner = () => {
  return (
    <div className="relative">
      <div className="bg-[#8B0000] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 py-12">
          <div className="flex items-center justify-between">
            {/* Left Content */}
            <div className="text-white z-10">
              <h1 className="text-6xl font-bold mb-4">
                GREAT SAVING
                <br />
                DAYS
              </h1>
              <p className="text-3xl mb-8 italic">Buy More, Save More!!</p>
              <Link 
                to="/categories/all"
                className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                SHOP NOW
              </Link>
            </div>

            {/* Right Content - Products */}
            <div className="relative z-10">
              <img 
                src="/Shop/products-group.png" 
                alt="boAt Products"
                className="w-[600px] object-contain"
              />
            </div>
          </div>

          {/* Background Wave Pattern */}
          <div className="absolute inset-0 opacity-30">
            <svg 
              viewBox="0 0 1440 320" 
              className="absolute bottom-0 w-full h-64 text-white"
              preserveAspectRatio="none"
            >
              <path 
                fill="currentColor" 
                fillOpacity="1" 
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Shine Effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="shine w-20 h-full bg-white/20 -skew-x-12 transform -translate-x-full absolute"></div>
      </div>
    </div>
  );
};

export default ShopBanner; 