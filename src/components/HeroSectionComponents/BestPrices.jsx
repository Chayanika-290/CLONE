import React from 'react';
import { Link } from 'react-router-dom';
import { bestPricesData } from '../../data/productsBestPrices';

const BestPrices = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8">
      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Smartwearables at <span className="border-b-2 border-red-500">Best Prices</span>
        </h2>
        <Link to="/bestprices" className="text-blue-600 hover:underline">
          View All
          <span className="inline-block ml-1">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {bestPricesData.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <Link to={`/bestprices/product/${product.id}`} className="block">
      <div className="relative">
        {/* Tag */}
        <div className="absolute top-2 left-2 z-10">
          <span className="bg-black text-white text-xs px-2 py-0.5 rounded">
            {product.tag}
          </span>
        </div>

        {/* Image and Highlight */}
        <div className="relative">
          <img 
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 py-1 px-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{product.highlight}</span>
              <span className="flex items-center text-sm">
                ★ {product.rating}
              </span>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-3">
          <h3 className="font-medium text-sm mb-2">{product.name}</h3>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="text-base font-bold">₹{product.price}</span>
            <span className="text-xs text-gray-500 line-through">₹{product.originalPrice}</span>
            <span className="text-xs text-green-600">{product.discount}</span>
          </div>

          {/* Colors */}
          {product.colors && (
            <div className="flex items-center gap-1">
              {product.colors.map((color, index) => (
                <div 
                  key={index}
                  className="w-3 h-3 rounded-full border border-gray-200"
                  style={{ backgroundColor: color }}
                />
              ))}
              {product.colorCount && (
                <span className="text-xs text-gray-500">{product.colorCount}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BestPrices;