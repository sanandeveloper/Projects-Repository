import React, { useState } from 'react';
import product from './ProductApi/product';
import Card from './Card';
import Service from './Service';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [featuredProduct, setFeatured] = useState(product);
  const navigate = useNavigate();

  return (
    <div className="mt-20">
      {/* Hero Section */}
      <div className="px-4 md:px-10 lg:px-20 py-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            We Care About
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Daily Loads
          </h1>

          <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            Dimension of reality that makes change possible and understandable.
            An indefinite and homogeneous environment in which natural events
            and human existence take place.
          </p>

          <div className="mt-6">
            <button
              onClick={() => navigate('/shop')}
              className="bg-red-600 hover:bg-black text-white px-4 py-2 rounded-md transition"
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="src/assets/image.png"
            alt="Hero"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Product Sections */}
      <div className="px-4 md:px-10 lg:px-20">
        <Card text="Trending Product" />
      </div>

      <div className="px-4 md:px-10 lg:px-20">
        <Card text="Featured Product" />
      </div>

      <div className="px-4 md:px-10 lg:px-20">
        <Service />
      </div>
    </div>
  );
}

export default Home;
