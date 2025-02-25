import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { offerData } from '../../data/productsOffer';

const Offer = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8">
      {/* Title */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Choose <span className="border-b-2 border-red-500">Your Offer</span>
        </h2>
      </div>

      {/* Offer Categories */}
      <div className="flex flex-wrap gap-4 mb-8">
        {offerData.categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(index)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === index
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {category.discount}
            <span className="text-xs ml-2 opacity-75">
              Using {category.code}
            </span>
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {offerData.categories[selectedCategory].products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <Link to={`/offer/product/${product.id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="relative">
          {/* Tag */}
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-black text-white text-xs px-2 py-0.5 rounded">
              {product.tag}
            </span>
          </div>

          {/* Product Image */}
          <img 
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover"
          />

          {/* Feature Banner with Rating */}
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-400">
            <div className="flex items-center justify-between px-3 py-1">
              <span className="text-sm font-medium">{product.features[0]}</span>
              <div className="flex items-center gap-1">
                <span className="text-sm">★</span>
                <span className="text-sm">{product.rating}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3">
          {/* Product Name */}
          <h3 className="font-medium text-sm mb-2">{product.name}</h3>

          {/* Price Info */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-base font-bold">₹{product.price}</span>
            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
            <span className="text-sm text-green-600">{product.discount}</span>
          </div>

          {/* Colors */}
          <div className="flex items-center gap-1">
            {product.colors.map((color, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full border ${
                    color === 'blue' ? 'bg-blue-600' :
                    color === 'black' ? 'bg-black' :
                    color === 'grey' ? 'bg-gray-500' :
                    color
                  }`}
                />
              </div>
            ))}
            {product.colorCount && (
              <span className="text-xs text-gray-500 ml-1">{product.colorCount}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Offer;
