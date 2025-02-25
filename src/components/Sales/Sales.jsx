import React from 'react';
import { Link } from 'react-router-dom';
import { salesData } from '../../data/productsSales';

const Sales = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold relative inline-block">
          Sale Is Live
          <span className="absolute -bottom-1 left-0 w-[60%] h-[3px] bg-red-500"></span>
        </h2>
        <Link 
          to="/sales" 
          className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
        >
          View All
          <svg 
            className="w-5 h-5" 
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {salesData.products.map((product) => (
          <Link 
            to={`/sales-product/${product.id}`} 
            key={product.id}
            className="block transition-transform hover:-translate-y-1"
          >
            <div 
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative">
                {/* Tag */}
                <div className="absolute top-2 left-2 z-10">
                  <span className="bg-black text-white text-xs px-2 py-1 rounded">
                    {product.tag}
                  </span>
                </div>

                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />

                {/* Feature Badge */}
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                  <span className="bg-yellow-400 text-xs px-2 py-0.5 rounded-full">
                    {product.feature}
                  </span>
                  <div className="bg-white px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm">{product.rating}</span>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 border-t border-gray-100">
                <h3 className="font-medium text-sm mb-2">{product.name}</h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold">₹{product.price}</span>
                  <span className="text-gray-500 text-sm line-through">₹{product.originalPrice}</span>
                  <span className="text-green-600 text-sm font-medium">{product.discount}</span>
                </div>

                {/* Color Options */}
                {product.colors && (
                  <div className="flex items-center gap-1.5">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 rounded-full border-2 border-gray-200`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                    {product.additionalColors > 0 && (
                      <span className="text-xs text-gray-500 ml-1">
                        +{product.additionalColors}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Sales;