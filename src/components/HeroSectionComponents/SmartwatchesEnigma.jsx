import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { smartwatchesEnigmaProducts } from '../../data/productsSmartwatchesEnigma';

const SmartwatchesEnigma = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1440px] mx-auto px-6 mt-16 mb-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[32px] font-medium text-gray-900 relative inline-block">
          Explore Enigma Series
          <span className="absolute -bottom-1 left-0 w-[60%] h-[3px] bg-red-500"></span>
        </h2>
        <Link to="/enigma-series" className="text-blue-600 hover:text-blue-700 flex items-center">
          View All
          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {smartwatchesEnigmaProducts.map((product) => (
          <div 
            key={product.id}
            className="bg-white rounded-lg overflow-hidden cursor-pointer"
            onClick={() => navigate(`/smartwatches-enigma/${product.id}`)}
          >
            <div className="relative">
              {/* Tag */}
              <div className="absolute top-2 left-2 z-10">
                <div className="bg-black text-white text-xs px-2 py-1 rounded">
                  {product.tag}
                </div>
              </div>

              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />

              {/* Feature or Rating */}
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                <div className="bg-yellow-400 px-3 py-1 rounded-full text-sm">
                  {product.highlightFeature || "BT Calling"}
                </div>
                {product.rating && (
                  <div className="bg-white px-2 py-1 rounded-full flex items-center gap-1">
                    <span>★</span>
                    <span className="text-sm">{product.rating}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-base font-medium text-gray-900 mb-2">
                {product.name}
              </h3>

              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">₹{product.price}</span>
                <span className="text-gray-500 text-sm line-through">₹{product.originalPrice}</span>
                <span className="text-green-600 text-sm">{product.discount}</span>
              </div>

              {product.colors && (
                <div className="mt-2 flex items-center gap-1">
                  <span className="w-4 h-4 rounded-full bg-blue-600"></span>
                  <span className="w-4 h-4 rounded-full bg-black"></span>
                  <span className="text-xs text-gray-500">{product.colors}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartwatchesEnigma;
