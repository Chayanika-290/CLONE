import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { tribeData } from '../../data/productsTribe';
import TribeSlide from './TribeSlide';

const Tribe = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-12">
      <div className="flex items-center gap-2 mb-12">
        <h2 className="text-2xl font-bold">Join the</h2>
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Tribe
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4">
        {tribeData.map((item) => (
          <TribeCard 
            key={item.id} 
            {...item} 
            onClick={() => setSelectedProduct(item.id)}
          />
        ))}
      </div>

      {/* Slide Show */}
      {selectedProduct && (
        <TribeSlide 
          productId={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

const TribeCard = ({ video, productImage, name, price, originalPrice, discount, onClick }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video play failed:", error);
      });
    }
  }, []);

  return (
    <button onClick={onClick} className="relative group w-full">
      <div className="aspect-[1/2] rounded-2xl overflow-hidden bg-gray-100 relative">
        {/* Video Container */}
        <div className="w-full h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            playsInline
            loop={true}
            autoPlay={true}
            preload="auto"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>

        {/* Bottom Product Section */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center">
          {/* Product Image */}
          <div className="w-20 h-20 bg-white rounded-lg p-2 mb-2">
            <img
              src={productImage}
              alt={name}
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Product Details */}
          <div className="text-center bg-white w-full py-3 px-4">
            <h3 className="text-sm font-medium text-gray-900 mb-1">
              {name}
            </h3>
            <div className="flex items-center justify-center gap-2">
              <span className="text-base font-bold">₹{price}</span>
              <span className="text-xs text-gray-500 line-through">₹{originalPrice}</span>
              <span className="text-xs font-medium text-green-500">{discount}</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Tribe;
