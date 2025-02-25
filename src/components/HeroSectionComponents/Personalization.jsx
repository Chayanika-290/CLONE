import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { personalizationData } from '../../data/productsPersonalization';

const Personalization = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const product = personalizationData.products[selectedProduct];
  const currentColor = product.colors[selectedColor];

  const handleAddToCart = () => {
    console.log('Added to cart');
  };

  const handleBuyNow = () => {
    console.log('Buy now clicked');
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8 text-gray-600">
        <Link to="/" className="hover:text-gray-900">Home</Link>
        <span>/</span>
        <Link to="/true-wireless-earbuds" className="hover:text-gray-900">True Wireless Earbuds</Link>
        <span>/</span>
        <span className="text-gray-400">boAt Airdopes 161</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Images */}
        <div className="flex gap-4">
          {/* Vertical Thumbnails */}
          <div className="w-20 flex flex-col gap-2">
            {currentColor.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden border ${
                  currentImageIndex === index ? 'border-gray-400' : 'border-gray-200'
                }`}
              >
                <img 
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <div className="relative aspect-square bg-white rounded-lg">
              <img 
                src={currentColor.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
              <button 
                onClick={() => setCurrentImageIndex(prev => prev === 0 ? currentColor.images.length - 1 : prev - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md"
              >
                ‹
              </button>
              <button 
                onClick={() => setCurrentImageIndex(prev => prev === currentColor.images.length - 1 ? 0 : prev + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">boAt Airdopes 161</h1>
          <p className="text-gray-600 mb-6">
            Wireless Earbuds with 40 Hours Playback, ASAP™ Charge, IWP Technology, and ENx™ Technology
          </p>

          {/* Price */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-bold">₹899</span>
            <span className="text-gray-500 line-through">₹2490</span>
            <span className="text-green-600">64% off</span>
          </div>

          {/* Color Selection */}
          <div className="mb-8">
            <h3 className="text-lg mb-4">Choose your colour:</h3>
            <div className="flex gap-4">
              {product.colors.map((color, index) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                    selectedColor === index ? 'border-gray-400' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={color.images[0]} 
                    alt={color.name} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="space-y-6 mb-8">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key}>
                <h3 className="text-gray-500 text-sm">{key}</h3>
                <p className="text-lg font-medium">{value}</p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
            <button 
              onClick={handleBuyNow}
              className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalization; 