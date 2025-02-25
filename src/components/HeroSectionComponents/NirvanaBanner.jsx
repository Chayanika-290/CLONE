import React from 'react';
import { Link } from 'react-router-dom';

const NirvanaBanner = () => {
  return (
    <div>
      {/* Breadcrumb - contained width */}
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center gap-2 text-sm py-4 mt-12">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900">
            Nirvana x Dhruv Kapoor Limited Edition
          </span>
        </div>
      </div>

      {/* Banner - full width */}
      <div className="relative mt-4">
        <Link to="/smart-watches">
          <img 
            src="/Nirvana/nirvana.webp" 
            alt="Nirvana x Dhruv Kapoor Limited Edition"
            className="w-full h-auto object-cover"
          />
        </Link>
      </div>

      {/* Heading - contained width */}
      <div className="max-w-[1440px] mx-auto px-6 mt-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Nirvana x Dhruv Kapoor Limited Edition
        </h1>
      </div>
    </div>
  );
};

export default NirvanaBanner;
