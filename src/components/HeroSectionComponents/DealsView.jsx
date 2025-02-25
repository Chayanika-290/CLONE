import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../../data/productsDeals';

const categories = [
  'All Deals',
  'True Wireless Earbuds',
  'Smartwatches',
  'Speakers And Soundbars',
  'Neckbands And Headphones'
];

const categoryToDataMap = {
  'All Deals': 'allDeals',
  'True Wireless Earbuds': 'trueWirelessEarbuds',
  'Smartwatches': 'smartwatches',
  'Speakers And Soundbars': 'speakersAndSoundbars',
  'Neckbands And Headphones': 'neckbandsAndHeadphones'
};

const DealsView = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Deals');
  const products = productsData[categoryToDataMap[selectedCategory]];

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Daily Deals</h1>

      {/* Categories */}
      <div className="flex gap-6 mb-8 overflow-x-auto scrollbar-hide">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              category === selectedCategory
                ? 'bg-gray-100 font-medium' 
                : 'text-gray-600 hover:bg-gray-50'
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
            to={`/deals-view-product/${product.id}`} 
            key={product.id}
            className="block transition-transform hover:-translate-y-1"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100">
              {/* Product Image */}
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
                {/* Tag */}
                <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {product.tag}
                </div>
                {/* Feature & Rating */}
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                  <span className="bg-yellow-400 text-black text-sm px-3 py-1 rounded-full">
                    {product.feature}
                  </span>
                  <span className="bg-white text-black text-sm px-2 py-1 rounded-full flex items-center">
                    ★ {product.rating}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-medium mb-2">{product.name}</h3>
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
    </section>
  );
};

export default DealsView; 