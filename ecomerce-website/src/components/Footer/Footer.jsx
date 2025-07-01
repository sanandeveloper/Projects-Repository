import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from 'react-icons/fa';
import Logo from '../Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
     

      {}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <div className="flex items-center mb-6">
                <h2 className="text-2xl font-bold "><Logo/></h2>
              </div>
              <p className="text-gray-400 mb-6">
                Your one-stop destination for all your shopping needs. Quality products, amazing prices.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaPinterest size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaYoutube size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Shop</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition">New Arrivals</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Best Sellers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Deals & Promotions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Gift Cards</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Brand Directory</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Shipping Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Returns & Exchanges</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Track Your Order</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">About Us</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Our Story</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Store Locations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Press</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
               
               
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  sanankhan201516@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              ©  Copyright {new Date().getFullYear()}  All rights reserved.
            </div>
            
            <div className="flex space-x-6 mb-4 md:mb-0">
               <h3>This website is made by Sanan</h3>
            </div>
            
            <div className="flex space-x-4">
              <FaCcVisa className="text-gray-400" size={28} />
              <FaCcMastercard className="text-gray-400" size={28} />
              <FaCcPaypal className="text-gray-400" size={28} />
              <FaCcApplePay className="text-gray-400" size={28} />
              <span className="text-gray-400 text-sm">and more</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;