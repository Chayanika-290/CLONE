import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productsSalesView } from '../../data/productsSalesView';

const SalesView = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const products = productsSalesView.allDeals;

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Daily Deals</h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="flex items-center">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.707 2.293a1 1 0 00-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 00-1.414-1.414L10 6.586 4.707 2.293z"/>
              </svg>
              <span className="text-sm text-gray-600">Ending In</span>
            </span>
            <span className="text-sm font-semibold">00 : 00 : 00</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-50">
            <span>Filter By</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="border-none bg-transparent font-medium focus:outline-none">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {['All Products', 'Neckbands', 'Smart Watches', 'Soundbars', 'True Wireless Earbuds', 'Wired Earphones'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              category === selectedCategory
                ? 'bg-black text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link 
            to={`/sales-product/${product.id}`}
            key={product.id}
            className="group"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
                {product.tag && (
                  <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                    {product.tag}
                  </span>
                )}
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                  <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full">
                    {product.feature}
                  </span>
                  <span className="bg-white text-black text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    ★ {product.rating}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold">₹{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                  <span className="text-green-600 text-sm">{product.discount}</span>
                </div>
                {product.colors && (
                  <div className="flex items-center gap-1">
                    {product.colors.map((color, index) => (
                      <div 
                        key={index}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                    {product.colorCount && (
                      <span className="text-sm text-gray-500">{product.colorCount}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SalesView; 