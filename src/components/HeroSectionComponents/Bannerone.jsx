import React from 'react';

const BannerOne = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 mb-8">
      <div className="relative w-full rounded-lg overflow-hidden">
        <img
          src="/Banner/banner.webp"
          alt="Great Saving Days - Buy More, Save More!"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default BannerOne;
