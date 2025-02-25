import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { smartwatchesProducts } from '../../data/productsSmartwatchesProduct.js';
import './SmartwatchesProduct.css';

const SmartwatchesProduct = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1440px] mx-auto px-6 my-8">
      <div className="mb-8">
        <h2 className="text-[32px] font-medium text-gray-900 relative inline-block">
          Enigma New Launches
          <span className="absolute -bottom-1 left-0 w-[60%] h-[3px] bg-red-500"></span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {smartwatchesProducts.map((product) => (
          <div 
            key={product.id}
            className="bg-white rounded-lg overflow-hidden cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
            onClick={() => navigate(`/smartwatches-product/${product.id}`)}
          >
            {/* Product Image Section */}
            <div className="relative bg-gray-100">
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
                className="w-full h-[180px] object-cover"
              />

              {/* Feature and Rating */}
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                <div className="bg-yellow-400 px-2 py-0.5 rounded-full text-xs">
                  {product.highlightFeature}
                </div>
                <div className="bg-white px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                  <span>★</span>
                  <span className="text-xs font-medium">{product.rating}</span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-2">
              <h3 className="text-sm font-medium text-gray-900 mb-1">
                {product.name}
              </h3>

              {/* Price */}
              <div className="flex items-center gap-1.5">
                <span className="text-base font-bold">₹{product.price}</span>
                <span className="text-gray-400 text-xs line-through">₹{product.originalPrice}</span>
                <span className="text-green-600 text-xs">{product.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartwatchesProduct;