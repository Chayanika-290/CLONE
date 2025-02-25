import React from 'react';
import { Link } from 'react-router-dom';

const categoryData = [
  {
    id: 1,
    title: 'True Wireless Earbuds',
    image: '/Categories/g1.webp',
    path: '/twe',
    textColor: 'text-[#ff0000]'
  },
  {
    id: 2,
    title: 'Personalised Products',
    image: '/Categories/g2.webp',
    path: '/boatpersonalization',
    textColor: 'text-[#ff0000]'
  },
  {
    id: 3,
    title: 'Party Speakers',
    image: '/Categories/g3.png',
    path: '/party-speakers'
  },
  {
    id: 4,
    title: 'Car Accessories',
    image: '/Categories/g4.webp',
    path: '/car-accessories'
  },
  {
    id: 5,
    title: 'Personalised Products',
    image: '/Categories/g5.webp',
    path: '/personalised-products'
  },
  {
    id: 6,
    title: 'Wired Headphones',
    image: '/Categories/g6.webp',
    path: '/wired-headphones'
  },
  {
    id: 7,
    title: 'Misfit Trimmers',
    image: '/Categories/g7.webp',
    path: '/misfit-trimmers'
  },
  {
    id: 8,
    title: 'Superhero Collection',
    image: '/Categories/g8.webp',
    path: '/superhero-collection'
  },
  {
    id: 9,
    title: 'Neckbands',
    image: '/Categories/g9.webp',
    path: '/neckbands'
  },
  {
    id: 10,
    title: 'Wired Earphones',
    image: '/Categories/g10.png',
    path: '/wired-earphones'
  },
  {
    id: 11,
    title: 'Chargers',
    image: '/Categories/g11.webp',
    path: '/chargers'
  },
  {
    id: 12,
    title: 'Trebel for Women',
    image: '/Categories/g12.webp',
    path: '/trebel-women'
  },
  {
    id: 13,
    title: 'Smart Watches',
    image: '/Categories/g13.webp',
    path: '/smart-watches'
  },
  {
    id: 14,
    title: 'Soundbars',
    image: '/Categories/g14.webp',
    path: '/soundbars'
  },
  {
    id: 15,
    title: 'Power Banks',
    image: '/Categories/g15.webp',
    path: '/power-banks'
  },
  {
    id: 16,
    title: 'Limited Edition',
    image: '/Categories/g16.webp',
    path: '/limited-edition'
  },
  {
    id: 17,
    title: 'Wireless Headphones',
    image: '/Categories/g17.webp',
    path: '/wireless-headphones'
  },
  {
    id: 18,
    title: 'Gaming Headphones',
    image: '/Categories/g18.png',
    path: '/gaming-headphones'
  },
  {
    id: 19,
    title: 'Cables',
    image: '/Categories/g19.webp',
    path: '/cables'
  }
];

const CategoryDropdown = () => {
  return (
    <div className="absolute top-full left-0 z-50 bg-white shadow-lg" style={{ width: '850px' }}>
      <div className="p-6">
        <div className="grid grid-cols-4 gap-6">
          {categoryData.map((category) => (
            <Link 
              key={category.id}
              to={category.path} 
              className="flex items-start gap-x-3 group hover:bg-gray-50 p-2 rounded-lg transition-colors"
            >
              <div className="w-[48px] h-[48px] flex items-center justify-center flex-shrink-0">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-medium text-[#1A2024] leading-tight">
                  {category.title}
                </span>
                <span className="text-[13px] text-[#ff0000] mt-0.5">
                  Shop Now!
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown; 