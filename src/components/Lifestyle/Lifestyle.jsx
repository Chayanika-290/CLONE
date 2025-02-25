import React from 'react';
import { Link } from 'react-router-dom';
import { lifestyleData } from '../../data/productsLifestyle';

const Lifestyle = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {lifestyleData.map((category) => (
          <div key={category.id} className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-medium">{category.title}</h3>
              <Link 
                to={category.link}
                className="text-blue-600 hover:text-blue-700 inline-flex items-center mt-1"
              >
                View All
                <span className="ml-1">⊙</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lifestyle;
