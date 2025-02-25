import React from 'react';
import { Link } from 'react-router-dom';
import { shopCategoriesTWEData } from '../../data/productsShopCategoriesTrueWirelessEarbuds';
import Footer from '../Footer/Footer';

const ShopCategoriesTrueWirelessEarbuds = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-6">
        <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-900">Wireless Earbuds</span>
      </div>

      <h1 className="text-2xl font-bold mb-8">Wireless Earbuds</h1>

      {/* Filter and Sort */}
      <div className="flex items-center justify-between mb-8">
        <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          Filter By
        </button>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select className="text-sm border-none bg-transparent font-medium focus:outline-none">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {shopCategoriesTWEData.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 flex flex-col">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full aspect-square object-cover"
              />
              {product.tag && (
                <div className="absolute top-2 left-2 bg-black text-white text-[10px] px-1.5 py-0.5 rounded">
                  {product.tag}
                </div>
              )}
              <div className="absolute bottom-2 left-2 bg-yellow-400 text-black text-[10px] px-1.5 py-0.5 rounded-full">
                {product.playbackTime}
              </div>
            </div>

            <div className="p-3 flex flex-col flex-grow border-t border-gray-100">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="flex items-center">
                  <span className="text-xs">★ {product.rating}</span>
                  <span className="text-gray-500 text-xs ml-0.5">({product.ratingCount})</span>
                </div>
                {product.isBestSeller && (
                  <span className="bg-yellow-100 text-yellow-800 text-[10px] px-1.5 py-0.5 rounded">
                    Best seller
                  </span>
                )}
              </div>

              <h3 className="font-medium text-sm mb-1 truncate">{product.name}</h3>

              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="text-base font-bold">₹{product.price}</span>
                <span className="text-xs text-gray-500 line-through">₹{product.originalPrice}</span>
                <span className="text-xs text-green-600">{product.discount}</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {product.features.map((feature, index) => (
                  <span key={index} className="text-[10px] bg-gray-100 px-1.5 py-0.5 rounded">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <button className="w-full bg-black text-white text-xs py-1.5 rounded">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ShopCategoriesTrueWirelessEarbuds;
