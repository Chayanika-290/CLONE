import React from 'react';
import { Link } from 'react-router-dom';

const ShopBanner = () => {
  return (
    <div className="relative h-[500px] mt-10">
      <Link to="/shop">
        <img 
          src="/HeroSection/h1.webp" 
          alt="Great Saving Days - Buy More, Save More" 
          className="w-full h-full object-cover"
        />
      </Link>
    </div>
  );
};

export default ShopBanner; 