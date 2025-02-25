import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { personalizationData } from '../../data/productsPagePersonalization';

const Personalization = () => {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [sortBy, setSortBy] = useState('Featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-6">
        <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
        <span className="text-gray-400">/</span>
        <Link to="/boatpersonalization" className="text-gray-900">
          Special Range — Personalised Products
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-8">{personalizationData.title}</h1>

      {/* Categories */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {personalizationData.categories.map(category => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap
              ${activeCategory === category 
                ? 'bg-black text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filter and Sort */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
        >
          <span className="text-lg">⚡</span>
          Filter By
        </button>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by :</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border-none bg-transparent font-medium focus:outline-none"
          >
            <option value="Featured">Featured</option>
            <option value="Price Low to High">Price Low to High</option>
            <option value="Price High to Low">Price High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {personalizationData.products.map(product => (
          <div key={product.id} className="bg-white rounded-lg p-4 flex flex-col h-full">
            {/* Product Image */}
            <div className="relative mb-3">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-[250px] object-contain"
              />
              {/* Tag */}
              {product.tag && (
                <div className="absolute top-2 left-2">
                  <span className={`text-[10px] px-2 py-0.5 rounded ${
                    product.tag === 'New Launch' 
                      ? 'bg-black text-white' 
                      : product.tag === 'EXTRA ₹100 OFF'
                      ? 'bg-black text-white'
                      : 'bg-black text-white'
                  }`}>
                    {product.tag}
                  </span>
                </div>
              )}
              {/* Playback Time */}
              <div className="absolute bottom-2 left-2">
                <span className="bg-yellow-400 text-black text-[10px] px-2 py-0.5 rounded-full">
                  {product.playbackTime}
                </span>
              </div>
            </div>

            {/* Product Info Container */}
            <div className="flex flex-col flex-grow">
              {/* Rating and Best Seller */}
              <div className="flex items-center gap-1 mb-1">
                <span className="text-xs">★ {product.rating}</span>
                <span className="text-xs text-gray-500">({product.ratingCount})</span>
                {product.isBestSeller && (
                  <span className="text-[10px] text-yellow-600 ml-1">Best seller</span>
                )}
              </div>

              {/* Product Name */}
              <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>

              {/* Price Info */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-bold">₹{product.price}</span>
                <span className="text-xs text-gray-500 line-through">₹{product.originalPrice}</span>
                <span className="text-xs text-green-600">{product.discount}</span>
              </div>

              {/* Features */}
              <div className="flex flex-wrap items-center gap-x-2 mb-3">
                {product.features.map((feature, index) => (
                  <span key={index} className="text-xs text-gray-600">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-black text-white text-sm py-2 rounded mt-auto">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personalization;
