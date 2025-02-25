import React from 'react';
import { Link } from 'react-router-dom';

const searchItems = [
  {
    id: 1,
    title: 'True Wireless Earphones',
    image: 'https://www.boat-lifestyle.com/cdn/shop/collections/dropdown-TWS_100x.png',
    path: '/true-wireless-earphones'
  },
  {
    id: 2,
    title: 'Personalized Products',
    image: 'https://www.boat-lifestyle.com/cdn/shop/collections/dropdown-TWS-Personalisation_100x.png',
    path: '/personalized-products'
  },
  {
    id: 3,
    title: 'Smart Watches',
    image: 'https://www.boat-lifestyle.com/cdn/shop/collections/Smartwatches_100x.png',
    path: '/smart-watches'
  },
  {
    id: 4,
    title: 'Nirvana',
    image: 'https://www.boat-lifestyle.com/cdn/shop/collections/Nirvana_100x.png',
    path: '/nirvana'
  },
  {
    id: 5,
    title: 'Wireless Neckbands',
    image: 'https://www.boat-lifestyle.com/cdn/shop/collections/Neckbands_100x.png',
    path: '/wireless-neckbands'
  },
  {
    id: 6,
    title: 'Bluetooth Speakers',
    image: 'https://www.boat-lifestyle.com/cdn/shop/collections/box-5_100x.png',
    path: '/bluetooth-speakers'
  },
  {
    id: 7,
    title: 'Wireless Headphones',
    image: 'https://www.boat-lifestyle.com/cdn/shop/collections/Wireless-Headphone_100x.png',
    path: '/wireless-headphones'
  },
  {
    id: 8,
    title: 'Powerbanks',
    image: 'https://www.boat-lifestyle.com/cdn/shop/collections/powerbank_100x.png',
    path: '/powerbanks'
  },
  {
    id: 9,
    title: 'Wired Earphones',
    image: 'https://www.boat-lifestyle.com/cdn/shop/collections/Wired-Earphones_100x.png',
    path: '/wired-earphones'
  },
  {
    id: 10,
    title: 'Soundbars',
    image: 'https://www.boat-lifestyle.com/cdn/shop/collections/Soundbars_100x.png',
    path: '/soundbars'
  },
  {
    id: 11,
    title: 'Trimmers',
    image: 'https://www.boat-lifestyle.com/cdn/shop/collections/Misfit-shop-now_100x.png',
    path: '/trimmers'
  }
];

const SearchDropdown = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute top-full left-0 w-[400px] bg-white shadow-lg rounded-lg mt-2 py-4 z-50">
      <div className="px-4">
        <h3 className="text-[15px] font-semibold text-[#1A2024] mb-4">Most Searched And Bought</h3>
        <div className="grid grid-cols-2 gap-4">
          {searchItems.map((item) => (
            <Link 
              key={item.id}
              to={item.path}
              className="flex items-center gap-x-3 p-2 hover:bg-gray-50 rounded-lg group"
            >
              <div className="w-10 h-10 flex-shrink-0">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[13px] text-[#1A2024] group-hover:text-[#ff0000]">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown; 