import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { bestPricesViewData } from '../../data/productsBestPricesView';
import Footer from '../Footer/Footer';

const BestPricesView = () => {
  const [sortBy, setSortBy] = useState('Featured');

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900">Wearables</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-8">Wearables</h1>

        {/* Filter and Sort */}
        <div className="flex justify-between items-center mb-6">
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
            <span>Filter By</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-gray-500">Sort by :</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border-none focus:outline-none"
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestPricesViewData.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

const ProductCard = ({ product }) => {
  return (
    <Link to={`/bestpricesview/product/${product.id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="relative">
          {/* Tag and Rating */}
          <div className="absolute top-2 left-2 z-10 flex justify-between w-full pr-4">
            <span className="bg-black text-white text-xs px-2 py-0.5 rounded">
              {product.tag}
            </span>
            <div className="bg-green-50 rounded px-2 py-0.5 flex items-center gap-1">
              <span className="text-xs">{product.rating}</span>
              <span className="text-yellow-400">★</span>
              <span className="text-xs text-gray-600">({product.ratingCount})</span>
            </div>
          </div>

          {/* Product Image */}
          <img 
            src={product.image}
            alt={product.name}
            className="w-full aspect-[4/3] object-contain p-3"
          />

          {/* Feature Banner */}
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 py-1.5">
            <div className="text-center text-sm font-medium">
              {product.highlight}
            </div>
          </div>
        </div>

        <div className="p-3">
          {/* Product Name */}
          <h3 className="font-medium text-sm mb-1.5">{product.name}</h3>

          {/* Price Info */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-base font-bold">₹{product.price}</span>
            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
            <span className="text-sm text-green-600">{product.discount}</span>
          </div>

          {/* Features */}
          <div className="flex items-center gap-3 mb-3">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-1">
                <img src="/icons/feature-icon.svg" alt="" className="w-3.5 h-3.5 opacity-50" />
                <span className="text-xs text-gray-600">{feature}</span>
              </div>
            ))}
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition-colors">
            Add To Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BestPricesView;
