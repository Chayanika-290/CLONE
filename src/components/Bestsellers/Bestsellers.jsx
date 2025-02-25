import React from 'react';
import { Link } from 'react-router-dom';
import { bestsellersData } from '../../data/productsBestsellers';

const Bestsellers = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-12">
      <div className="flex items-center mb-12">
        <h2 className="text-2xl font-bold">
          Explore Bestsellers
          <span className="inline-block w-8 h-1 bg-red-500 ml-1"></span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {bestsellersData.map((product) => (
          <Link 
            key={product.id}
            to={product.link}
            className="flex flex-col items-center group w-full"
          >
            <div className="w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] h-[300px] sm:h-[320px] md:h-[340px] lg:h-[360px] mb-4 rounded-xl overflow-hidden bg-gray-100">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              >
                <source src={product.videoUrl} type="video/mp4" />
                {/* Fallback image if video fails to load */}
                <img 
                  src={product.fallbackImage} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </video>
            </div>
            <span className="text-base text-center font-medium">{product.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
