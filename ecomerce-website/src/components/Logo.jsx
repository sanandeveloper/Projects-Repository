import React from 'react'

function Logo() {

  return (
    <div className="flex items-center space-x-3">
      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-black to-yellow-900 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
        <span className="text-white font-bold text-2xl">S</span>
        
        <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-amber-400 border-2 border-white"></div>
      </div>
      
      <div className="flex flex-col">
        <span className="text-xl font-bold text-indigo-800 dark:text-white">Sanan</span>
        <span className="text-sm text-gray-500 dark:text-gray-400 -mt-1">Store</span>
      </div>
    </div>
  );
};



export default Logo