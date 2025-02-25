import React from 'react';
import { useNavigate } from 'react-router-dom';
import { smartwatchesEnigmaViewProducts } from '../../data/productsSmartwatchesEnigmaView';

const SmartwatchesEnigmaView = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8">
        <span className="text-gray-500 hover:text-gray-800 cursor-pointer" onClick={() => navigate('/')}>Home</span>
        <span>/</span>
        <span className="text-gray-800">Enigma Series</span>
      </div>

      <h1 className="text-2xl font-bold mb-8">Enigma Series</h1>

      {/* Filter and Sort Section */}
      <div className="flex justify-between items-center mb-8">
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
          <span>Filter By</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          <span>Sort by :</span>
          <select className="px-4 py-2 bg-gray-100 rounded-lg outline-none">
            <option value="new">New Arrivals</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Grid - Updated to show 5 cards per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {smartwatchesEnigmaViewProducts.map((product) => (
          <div 
            key={product.id}
            className="bg-white rounded-lg overflow-hidden cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
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

              {/* Feature Badge */}
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                <div className="bg-yellow-400 px-2 py-0.5 rounded-full text-xs">
                  {product.highlightFeature}
                </div>
              </div>
            </div>

            <div className="p-3">
              {/* Product Name */}
              <h3 className="text-sm font-medium text-gray-900 mb-1">
                {product.name}
              </h3>

              {/* Features */}
              {product.features && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {product.features.map((feature, index) => (
                    <span key={index} className="text-xs text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              )}

              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                <span className="text-xs text-gray-500">{product.rating}</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-1.5">
                <span className="text-base font-bold">₹{product.price}</span>
                <span className="text-gray-500 text-xs line-through">₹{product.originalPrice}</span>
                <span className="text-green-600 text-xs">{product.discount}</span>
              </div>

              {/* Color Variants */}
              {product.colors && (
                <div className="mt-1.5 flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                  <span className="w-3 h-3 rounded-full bg-black"></span>
                  <span className="text-xs text-gray-500">{product.colors}</span>
                </div>
              )}

              {/* Add to Cart Button */}
              <button className="w-full mt-2 bg-gray-900 text-white text-sm py-1.5 rounded-lg hover:bg-gray-800 transition-colors">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartwatchesEnigmaView;
