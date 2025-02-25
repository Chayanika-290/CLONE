import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { newLaunchesData, personalisationData } from '../../data/productsTopPicks';

const TopPicks = () => {
  const [activeTab, setActiveTab] = useState('newLaunches');

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">
          Top Picks For You
          <span className="inline-block w-8 h-1 bg-red-500 ml-1"></span>
        </h2>
        <Link to="/top-picks" className="text-blue-600 hover:text-blue-700">
          View All
          <span className="ml-1">⟶</span>
        </Link>
      </div>

      <div className="flex gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === 'newLaunches'
              ? 'bg-black text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('newLaunches')}
        >
          New Launches
        </button>
        <button
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === 'personalisation'
              ? 'bg-black text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('personalisation')}
        >
          Personalisation
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {(activeTab === 'newLaunches' ? newLaunchesData : personalisationData).map((product) => (
          <Link
            key={product.id}
            to={`/top-picks/${activeTab === 'newLaunches' ? 'new-launches' : 'personalisation'}/${product.id}`}
            className="bg-white rounded-lg overflow-hidden group"
          >
            <div className="relative">
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                Engraving Available
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-2">
                <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                  40 Hours Playback
                </span>
                <span className="bg-white text-black text-xs px-2 py-1 rounded flex items-center">
                  ★ {product.rating}
                </span>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm mb-1">{product.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">₹{product.price}</span>
                <span className="text-xs text-gray-500 line-through">₹{product.originalPrice}</span>
                <span className="text-xs text-green-600">{product.discount}</span>
              </div>
              <div className="flex items-center gap-1 mt-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
                <span className="text-xs text-gray-500">+{product.extraColors}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopPicks;
