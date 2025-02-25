import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { topPicksViewData } from '../../data/productsTopPicksView';

const TopPicksView = () => {
  const [filterBy, setFilterBy] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <span>/</span>
        <span className="text-gray-500">All Products</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      {/* Filter and Sort */}
      <div className="flex justify-between items-center mb-8">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full"
          onClick={() => setFilterBy(prev => prev === 'all' ? 'filter' : 'all')}
        >
          Filter By
        </button>

        <div className="flex items-center gap-2">
          <span className="text-gray-500">Sort by :</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-gray-100 rounded-full outline-none"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {topPicksViewData.map((product) => (
          <Link
            key={product.id}
            to={`/top-picks/view/${product.id}`}
            className="bg-white rounded-lg overflow-hidden flex flex-col group"
          >
            <div className="relative">
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-sm">
                {product.tag}
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 py-1 px-2">
                <span className="text-sm font-medium">{product.feature}</span>
              </div>
            </div>

            <div className="p-3 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-1">
                {product.rating ? (
                  <>
                    <span className="text-sm">★ {product.rating}</span>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </>
                ) : (
                  <span className="text-sm text-gray-500">Be first to review</span>
                )}
              </div>

              <h3 className="font-medium text-sm mb-2">{product.name}</h3>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-base font-bold">₹{product.price}</span>
                <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                <span className="text-sm text-green-600">{product.discount}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {product.features.map((feature, index) => (
                  <span key={index} className="text-xs text-gray-600">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <button
                  className="block w-full bg-black text-white text-center py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopPicksView;
