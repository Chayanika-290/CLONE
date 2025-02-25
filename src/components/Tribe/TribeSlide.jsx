import React, { useState, useRef, useEffect } from 'react';
import { tribeSlideData } from '../../data/productsTribeSlide';

const TribeSlide = ({ productId, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const initialIndex = tribeSlideData.findIndex(item => item.id === productId);
    setCurrentIndex(initialIndex >= 0 ? initialIndex : 0);
  }, [productId]);

  useEffect(() => {
    if (videoRef.current) {
      // Reset video to start
      videoRef.current.currentTime = 0;
      // Load the new video source
      videoRef.current.load();
      // Play the video
      const playVideo = async () => {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log("Video play failed:", error);
        }
      };
      playVideo();
    }
  }, [currentIndex]); // This will run whenever currentIndex changes

  const handlePrevious = () => {
    setCurrentIndex(prev => 
      prev === 0 ? tribeSlideData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prev => 
      prev === tribeSlideData.length - 1 ? 0 : prev + 1
    );
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const currentProduct = tribeSlideData[currentIndex];

  if (!currentProduct) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl hover:opacity-80"
      >
        ×
      </button>

      <div className="w-full max-w-7xl mx-auto px-12 py-6 relative">
        {/* Navigation Buttons */}
        <button 
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-4xl p-4 hover:bg-white/10 rounded-full transition-colors"
        >
          ‹
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-4xl p-4 hover:bg-white/10 rounded-full transition-colors"
        >
          ›
        </button>

        {/* Slider Content */}
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Video Section with Sound Toggle */}
            <div className="relative aspect-square bg-black">
              <video
                key={currentProduct.video} // Add key prop to force video reload
                ref={videoRef}
                className="w-full h-full object-cover"
                muted={isMuted}
                playsInline
                loop={true}
                autoPlay={true}
                preload="auto"
              >
                <source src={currentProduct.video} type="video/mp4" />
              </video>
              
              {/* Sound Toggle Button */}
              <button 
                onClick={toggleMute}
                className="absolute bottom-4 right-4 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                {isMuted ? (
                  // Muted Icon
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.889 16H2a1 1 0 01-1-1V9a1 1 0 011-1h3.889l5.294-4.332a.5.5 0 01.817.387v15.89a.5.5 0 01-.817.387L5.89 16zm14.525-4l3.536 3.536-1.414 1.414L19 13.414l-3.536 3.536-1.414-1.414L17.586 12 14.05 8.464l1.414-1.414L19 10.586l3.536-3.536 1.414 1.414L20.414 12z" />
                  </svg>
                ) : (
                  // Unmuted Icon
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.889 16H2a1 1 0 01-1-1V9a1 1 0 011-1h3.889l5.294-4.332a.5.5 0 01.817.387v15.89a.5.5 0 01-.817.387L5.89 16zm13.517-6.121C19.797 10.87 20 11.916 20 13c0 1.084-.203 2.13-.594 3.121l-1.626-1.626c.172-.444.27-.92.27-1.495 0-.575-.098-1.051-.27-1.495l1.626-1.626zm-4.009 4.009c.064-.18.1-.37.1-.57 0-.2-.036-.39-.1-.57l1.626-1.626C17.329 11.82 17.5 12.548 17.5 13c0 .452-.171 1.18-.377 1.878l-1.626-1.626z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Product Details Section */}
            <div className="p-8 flex flex-col">
              <div className="flex-1">
                {/* Product Image */}
                <div className="w-32 h-32 mx-auto mb-6">
                  <img
                    src={currentProduct.productImage}
                    alt={currentProduct.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Info */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {currentProduct.name}
                </h2>
                
                <p className="text-gray-600 mb-4">
                  {currentProduct.description}
                </p>

                {/* Price Section */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-bold">₹{currentProduct.price}</span>
                  <span className="text-lg text-gray-500 line-through">₹{currentProduct.originalPrice}</span>
                  <span className="text-lg font-medium text-green-600">{currentProduct.discount}</span>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  {currentProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-black text-white py-4 rounded-xl mt-8 hover:bg-gray-900 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {tribeSlideData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TribeSlide;
