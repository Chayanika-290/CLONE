import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { bestBoatData } from '../../data/productsBestBoat';

const BestBoat = () => {
  const [activeCategory, setActiveCategory] = useState('Best Sellers');

  const categories = [
    'Best Sellers',
    'Home Theatre Systems',
    'Top Earbuds',
    'Top Watches',
    'Car Accessories'
  ];

  const getCategoryKey = (category) => {
    return category.toLowerCase().replace(/\s+/g, '_');
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Best Of boAt</h2>

      {/* Category Tabs */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${activeCategory === category 
                ? 'bg-black text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {bestBoatData[getCategoryKey(activeCategory)].map((product) => (
          <Link 
            to={`/best-boat/${getCategoryKey(activeCategory)}/${product.id}`} 
            key={product.id} 
            className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-square">
              {product.tag && (
                <div className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-0.5 rounded z-10">
                  {product.tag}
                </div>
              )}
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <div className="bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-full">
                  {product.playbackTime}
                </div>
                <div className="bg-white text-black text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span>★</span>
                  <span>{product.rating}</span>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-medium text-base mb-2">{product.name}</h3>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-bold">₹{product.price}</span>
                <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                <span className="text-sm text-green-600">{product.discount}</span>
              </div>

              {product.colors && (
                <div className="flex items-center gap-1">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                  {product.extraColors > 0 && (
                    <span className="text-xs text-gray-500">+{product.extraColors}</span>
                  )}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BestBoat;
