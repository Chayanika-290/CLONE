import React from 'react';
import { Link } from 'react-router-dom';
import { shopCategoriesData } from '../../data/productsShopCategories';

const ShopCategories = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">
          Shop by Categories
          <span className="inline-block w-8 h-1 bg-red-500 ml-1"></span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-4">
        {shopCategoriesData.map((category) => (
          <Link 
            key={category.id}
            to={category.link}
            className="flex flex-col items-center group"
          >
            <div className="w-full aspect-square mb-3">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-sm text-center font-medium">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShopCategories;
