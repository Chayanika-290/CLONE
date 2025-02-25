import React from 'react';
import { Link } from 'react-router-dom';

const moreMenuItems = [
  {
    id: 1,
    title: 'Daily Deals',
    path: '/sales'
  },
  {
    id: 3,
    title: 'Refer & Earn',
    path: '/refer-earn'
  },
  {
    id: 4,
    title: 'Careers',
    path: '/careers'
  },
  {
    id: 5,
    title: 'Social Responsibility',
    path: '/social-responsibility'
  },
  {
    id: 6,
    title: 'Store Locator',
    path: '/store-locator'
  }
];

const MoreDropdown = () => {
  return (
    <div className="absolute top-full right-0 z-50 bg-white shadow-lg py-2 rounded-sm" style={{ width: '200px' }}>
      <div className="flex flex-col">
        {moreMenuItems.map((item) => (
          <Link 
            key={item.id}
            to={item.path}
            className="px-4 py-2 text-[15px] text-[#1A2024] hover:bg-gray-50 hover:text-[#ff0000] transition-colors duration-200"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoreDropdown; 