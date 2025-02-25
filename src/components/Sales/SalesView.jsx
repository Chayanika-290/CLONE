import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productsSalesView } from '../../data/productsSalesView';

const categories = [
  'All Products',
  'Neckbands',
  'Smart Watches',
  'Soundbars',
  'True Wireless Earbuds',
  'Wired Earphones'
];

const categoryToDataMap = {
  'Neckbands': 'neckbands',
  'Smart Watches': 'smartWatches',
  'Soundbars': 'soundbars',
  'True Wireless Earbuds': 'trueWirelessEarbuds',
  'Wired Earphones': 'wiredEarphones'
};

const SalesView = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [timer, setTimer] = useState({
    hours: 11,
    minutes: 6,
    seconds: 39
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => {
        let { hours, minutes, seconds } = prevTimer;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(countdown);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  // Get products based on selected category
  const getProducts = () => {
    if (selectedCategory === 'All Products') {
      // Combine all products from all categories
      return Object.values(productsSalesView).flat();
    }
    return productsSalesView[categoryToDataMap[selectedCategory]] || [];
  };

  const products = getProducts();

  // Format time with leading zeros
  const formatTime = (value) => value.toString().padStart(2, '0');

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-6">
        <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-900">Daily Deals</span>
      </div>

      {/* Title and Timer */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Daily Deals</h1>
        <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M8 13.3333L4 9.33333M8 13.3333L12 9.33333M8 13.3333L8 2.66667" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm font-medium">Ending In</span>
          <span className="text-sm font-medium">
            {formatTime(timer.hours)}h : {formatTime(timer.minutes)}m : {formatTime(timer.seconds)}s
          </span>
        </div>
      </div>

      {/* Filter and Sort */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                category === selectedCategory
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-50">
            <span className="text-sm">Filter By</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="text-sm font-medium border-none bg-transparent focus:outline-none">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link 
            to={`/sales-view-product/${product.id}`}
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
