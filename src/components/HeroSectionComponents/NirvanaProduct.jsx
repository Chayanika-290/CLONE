import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { nirvanaProducts } from '../../data/productsNirvana.js';

const NirvanaProduct = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1440px] mx-auto px-6 my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
        {nirvanaProducts.map((product) => (
          <div 
            key={product.id}
            className="bg-gray-100 rounded-lg relative max-w-[360px] mx-auto w-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            {/* Tag (Engraving/Bestseller) */}
            <div className="absolute top-2 left-2 z-10">
              <span className="bg-black text-white px-2 py-1 text-xs rounded-md">
                {product.tag}
              </span>
            </div>

            {/* Product Image */}
            <div className="relative h-[250px] bg-gradient-to-r from-purple-900 to-purple-500">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Features */}
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                <div className="bg-yellow-400 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">
                    {product.highlightFeature}
                  </span>
                </div>
                <div className="bg-white px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="text-sm">★</span>
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-3 space-y-2 bg-white">
              <h3 className="text-lg font-medium text-gray-900">
                {product.name}
              </h3>

              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">₹{product.price}</span>
                <span className="text-gray-500 text-sm line-through">₹{product.originalPrice}</span>
                <span className="text-green-600 text-sm font-medium">{product.discount}</span>
              </div>

              {/* Color Options */}
              {product.colors && (
                <div className="flex items-center gap-1">
                  {product.colors.map((color, index) => (
                    <div 
                      key={index}
                      className={`w-4 h-4 rounded-full ${color} border border-gray-300`}
                    />
                  ))}
                  <span className="text-gray-500 text-sm ml-1">+{product.additionalColors}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NirvanaProduct;
