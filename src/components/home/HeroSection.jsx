import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroSlides = [
  { id: 1, image: '/HeroSection/h1.webp', link: '/shop' },
  { id: 2, image: '/HeroSection/h2.webp', link: '/personalization' },
  { id: 3, image: '/HeroSection/h3.webp', link: '/smart-watches' },
  { id: 4, image: '/HeroSection/h4.webp', link: '/wireless-earbuds' },
  { id: 5, image: '/HeroSection/h5.webp', link: '/party-speakers' },
  { id: 6, image: '/HeroSection/h6.webp', link: '/neckbands' },
  { id: 7, image: '/HeroSection/h7.webp', link: '/wireless-headphones' }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroSlides.map((slide) => (
          <Link key={slide.id} to={slide.link} className="w-full flex-shrink-0">
            <div className="relative">
              <img 
                src={slide.image} 
                alt={`Slide ${slide.id}`}
                className="w-full"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/75 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/75 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
