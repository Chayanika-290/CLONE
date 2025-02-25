import React, { useState, useEffect } from 'react';
import { pressData } from '../../data/productsPress';

const Press = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex(prev => 
      prev === 0 ? pressData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prev => 
      prev === pressData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-16">
      <div className="flex items-center gap-2 mb-12">
        <h2 className="text-2xl font-bold">In the</h2>
        <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
          Press
        </span>
      </div>

      <div className="relative">
        {/* Slider Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {pressData.map((item, index) => (
              <div 
                key={item.id}
                className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[450px]"
              >
                {/* Logo Side */}
                <div className="bg-gray-100 rounded-2xl p-10 flex items-center justify-center h-[400px]">
                  <img 
                    src={item.logo} 
                    alt="Press Logo" 
                    className="max-w-[350px] w-full h-auto object-contain"
                  />
                </div>

                {/* Quote Side */}
                <div className="flex flex-col items-start justify-center h-[400px] p-6">
                  <div className="text-7xl text-gray-300 mb-5">"</div>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                    {item.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Previous slide"
        >
          <span className="text-3xl text-gray-600">‹</span>
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Next slide"
        >
          <span className="text-3xl text-gray-600">›</span>
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {pressData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;
