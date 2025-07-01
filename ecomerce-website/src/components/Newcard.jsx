import { div } from 'framer-motion/client';
import React from 'react';
import { FaStar, FaShoppingCart } from "react-icons/fa";

function Newcard({ price, image, name, id }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
         
             <div
               key={id}
               className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
             >
               <div className="relative pt-[100%] bg-gray-50 dark:bg-gray-700">
                 <img
                   src={image}
                   alt={name}
                   className="absolute top-0 left-0 w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-110"
                 />
               </div>
   
               <div className="p-5">
                 <div className="flex items-center mb-2">
                   <div className="flex text-amber-400">
                     {[...Array(5)].map((_, i) => (
                       <FaStar key={i} className="w-4 h-4" />
                     ))}
                   </div>
                   <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">(4.5)</span>
                 </div>
   
                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 h-14">
                   {name}
                 </h3>
   
                 <div className="flex justify-between items-center mt-4">
                   <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xl">
                   Rs {price}
                   </span>
                   <button
                     onClick={() => handleAddToCart(item)}
                     className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                   >
                     <FaShoppingCart className="w-4 h-4" />
                     <span className="text-sm">Add</span>
                   </button>
                 </div>
               </div>
             </div>
         </div>
    
  );
}

export default Newcard;