import React, { useState } from "react";
import { useSelector } from "react-redux";

function Address() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+92"); 




  const handleClick=(e)=>{
     e.preventDefault()
         const lsdata=JSON.parse(localStorage.getItem('Address')) || []
     const data={name,address,phoneNumber}
     const collectedData=[...lsdata,data]
     localStorage.setItem('Address',JSON.stringify(collectedData))
     setAddress('')
     setName('')
     setPhoneNumber('')
     setCountryCode('')
 
  }


  return (
    <form onSubmit={handleClick} className="mt-30 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-100">
      <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Your Shipping Address
      </h1>
      
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            type="text"
            placeholder="123 Main St, City"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <div className="flex">
            <select
              className="w-1/4 px-3 py-2 border border-gray-300 rounded-l-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+92">🇵🇰 +92</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+91">🇮🇳 +91</option>
              <option value="+44">🇬🇧 +44</option>
            </select>
            <input
              className="flex-1 px-4 py-2 border-t border-b border-r border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="tel"
              placeholder="300 1234567"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 mt-4"
        >
          Save Address
        </button>
      </div>
    </form>
  );
}

export default Address;