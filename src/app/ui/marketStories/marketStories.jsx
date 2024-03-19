// components/MarketStories.js

import React from 'react';
import data from '../../../data/market_data.json';

const MarketStories = () => {
  
  return (
    <div className="flex flex-col md:w-1/2 p-5">
      <h2 className="text-3xl font-medium mx-auto text-red-500">Market Stories</h2>
      {data.data.map((item, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md mx-auto my-4">
          <img src={item.image_url} alt="" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketStories;
