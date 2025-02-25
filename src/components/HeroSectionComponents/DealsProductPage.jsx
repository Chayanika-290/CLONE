import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const DealsProductPage = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8 text-gray-600">
        <Link to="/" className="hover:text-gray-900">Home</Link>
        <span>/</span>
        <Link to="/daily-deals" className="hover:text-gray-900">Daily Deals</Link>
        <span>/</span>
        <span className="text-gray-400">Product {id}</span>
      </div>

      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Product Details Coming Soon</h1>
        <Link 
          to="/daily-deals"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Back to Deals
        </Link>
      </div>
    </div>
  );
};

export default DealsProductPage; 