import React from 'react';
import { Link } from 'react-router-dom';

const CorporateBanner = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image */}
        <div className="relative">
          
          <img 
            src="/CorporateBanner/corporate.webp"
            alt="Corporate Orders" 
            className="w-full h-[500px] object-cover rounded-2xl"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/placeholder.jpg';
            }}
          />
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6 p-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Bulk Orders
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-700">
              Are Now Hassle Free
            </h2>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-2">
              Got A Big boAt Order?
            </h3>
            <p className="text-xl text-gray-600">
              Come sail with us
            </p>
          </div>

          <div>
            <p className="text-xl">
              For shipments of 25 units or more,
              <br />
              Hit us up!
            </p>
          </div>

          <Link 
            to="#"
            className="inline-block bg-black text-white text-lg font-medium px-8 py-4 rounded-xl hover:bg-gray-900 transition-colors w-full md:w-auto text-center"
          >
            Submit Your Requirement
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CorporateBanner; 