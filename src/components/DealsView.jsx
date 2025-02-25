import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { dealsViewData } from '../../data/productsDealsView';
import Footer from '../Footer/Footer';

const DealsView = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [sortBy, setSortBy] = useState('Featured');

  // Get filtered products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All Products') {
      // Combine all products from all categories
      return Object.values(dealsViewData.products).flat();
    }
    // Return products only from selected category
    return dealsViewData.products[selectedCategory] || [];
  }, [selectedCategory]);

  // Sort products based on selected sort option
  const sortedProducts = useMemo(() => {
    const products = [...filteredProducts];
    switch (sortBy) {
      case 'Price: Low to High':
        return products.sort((a, b) => a.price - b.price);
      case 'Price: High to Low':
        return products.sort((a, b) => b.price - a.price);
      case 'Newest First':
        return products.sort((a, b) => b.id.localeCompare(a.id));
      default:
        return products;
    }
  }, [filteredProducts, sortBy]);

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8">
          <Link to="/" className="hover:text-red-500">Home</Link>
          <span>/</span>
          <span className="text-gray-500">{selectedCategory}</span>
        </div>

        <h1 className="text-3xl font-bold mb-8">{selectedCategory}</h1>

        {/* Categories Scrollable List */}
        <div className="mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 min-w-max">
            {dealsViewData.categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Filter and Sort Controls */}
        <div className="flex justify-between items-center mb-8">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-full">
            <span className="text-lg">⚡</span>
            Filter By
          </button>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sort by :</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border-none bg-transparent focus:outline-none text-sm"
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

// Separate ProductCard component for better organization
const ProductCard = ({ product }) => {
  return (
    <Link 
      to={`/dealsview/product/${product.id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Product Card Content */}
      <div className="relative p-4">
        {/* Tags */}
        <div className="absolute top-2 left-2 flex gap-1 z-10">
          {product.tag && (
            <span className="bg-black text-white text-xs px-2 py-0.5 rounded">
              {product.tag}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="absolute top-2 right-2 z-10">
          <div className="flex items-center bg-green-100 px-2 py-0.5 rounded">
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-yellow-400 ml-0.5">★</span>
            <span className="text-xs text-gray-600 ml-1">({product.ratingCount})</span>
          </div>
        </div>

        {/* Product Image */}
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain mb-4"
        />

        {/* Product Info */}
        <div>
          <h3 className="font-medium mb-2">{product.name}</h3>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-bold">₹{product.price}</span>
            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
            <span className="text-sm text-green-600">{product.discount}</span>
          </div>

          {/* Features */}
          <div className="flex items-center gap-4 mb-3">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-1">
                <img src={feature.icon} alt="" className="w-4 h-4" />
                <span className="text-xs text-gray-600">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* Highlight */}
          <div className="bg-yellow-400 text-black text-sm font-medium py-1 px-3 rounded text-center mb-3">
            {product.highlight}
          </div>

          <button className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition-colors">
            Add To Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default DealsView;