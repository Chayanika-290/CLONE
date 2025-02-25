import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Wireless Earbuds',
    image: '/categories/wireless-earbuds.png',
    link: '/twe'
  },
  {
    id: 2,
    name: 'Neckbands',
    image: '/categories/neckbands.png',
    link: '/categories/neckbands'
  },
  {
    id: 3,
    name: 'Smart Watches',
    image: '/categories/smartwatches.png',
    link: '/categories/smart-watches'
  },
  {
    id: 4,
    name: 'Wireless Headphones',
    image: '/categories/wireless-headphones.png',
    link: '/categories/wireless-headphones'
  },
  {
    id: 5,
    name: 'Wireless Speakers',
    image: '/categories/wireless-speakers.png',
    link: '/categories/wireless-speakers'
  },
  {
    id: 6,
    name: 'Party Speakers',
    image: '/categories/party-speakers.png',
    link: '/categories/party-speakers'
  },
  {
    id: 7,
    name: 'Soundbars',
    image: '/categories/soundbars.png',
    link: '/categories/soundbars'
  }
];

const Categories = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction) => {
    const container = document.getElementById('categories-container');
    const scrollAmount = 300; // Adjust scroll amount as needed
    
    if (container) {
      if (direction === 'left') {
        container.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="relative max-w-[1440px] mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-8">Shop by Categories</h2>
      
      {/* Scroll Buttons */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Categories Container */}
      <div 
        id="categories-container"
        className="overflow-x-auto scrollbar-hide flex gap-6 scroll-smooth"
      >
        {categories.map((category) => (
          <Link 
            key={category.id}
            to={category.link}
            className="flex-shrink-0 group"
          >
            <div className="w-[280px] h-[280px] rounded-lg overflow-hidden bg-gray-100">
              <img 
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium text-center">{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories; 