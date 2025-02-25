import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { bestPricesPageData } from '../../data/productsBestPricesProductPage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './BestPricesProduct.css';

const BestPricesProductPage = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const productData = bestPricesPageData[id];

  useEffect(() => {
    if (!productData) {
      navigate('/404');
    }
  }, [productData, navigate]);

  if (!productData) return null;

  const currentColor = productData.colors[selectedColor];

  const handleAddToCart = () => {
    console.log('Added to cart');
  };

  const handleBuyNow = () => {
    console.log('Buy now clicked');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === currentColor.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentColor.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8">
        <span>Home</span>
        <span>/</span>
        <span>{productData.category}</span>
        <span>/</span>
        <span className="text-gray-500">{productData.name}</span>
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
                className={`w-full aspect-square rounded-lg overflow-hidden border-2 
                  ${currentImageIndex === index ? 'border-red-500' : 'border-transparent'}`}
              >
                <img 
                  src={image}
                  alt={`${productData.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image with Navigation */}
          <div className="flex-1 relative">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <img 
                src={currentColor.images[currentImageIndex]}
                alt={`${productData.name} view`}
                className="w-full h-full object-contain"
              />
              <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
              >
                <span className="text-xl">‹</span>
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
              >
                <span className="text-xl">›</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{productData.name}</h1>
          <p className="text-gray-600 mb-6">{productData.description}</p>
          
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">₹{productData.price}</span>
              <span className="text-gray-500 line-through">₹{productData.originalPrice}</span>
              <span className="text-green-600">{productData.discount}</span>
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Choose your colour:</h3>
            <div className="flex gap-4">
              {productData.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                    selectedColor === index ? 'border-red-500' : 'border-gray-200'
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
          <div className="mb-8 bg-gray-50 p-6 rounded-lg">
            <div className="space-y-6">
              {Object.entries(productData.specifications).map(([key, value]) => (
                <div key={key}>
                  <h3 className="text-sm text-gray-500">{key}</h3>
                  <p className="text-lg font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <button 
              onClick={handleAddToCart} 
              className="flex-1 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800"
            >
              Add to Cart
            </button>
            <button 
              onClick={handleBuyNow} 
              className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPricesProductPage;
