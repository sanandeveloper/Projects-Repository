import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);

  const randomPasswordGenerator = () => {
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if (number) str += '0123456789';
    if (char) str += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * str.length);
      pass += str.charAt(random);
    }
    
    setPassword(pass);
  };

  useEffect(() => {
    randomPasswordGenerator();
  }, [number, length, char]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Password Generator</h1>
        
        {/* Password Display */}
        <div className="flex mb-6">
          <input
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={password}
            readOnly
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition duration-200"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        
        {/* Controls */}
        <div className="space-y-4">
          {/* Length Slider */}
          <div className="flex items-center justify-between">
            <label className="text-gray-700">Length: {length}</label>
            <input
              className="w-48"
              type="range"
              min="8"
              max="200"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          
          {/* Checkboxes */}
          <div className="flex space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={number}
                onChange={(e) => setNumber(e.target.checked)}
                className="h-5 w-5 text-blue-600 rounded"
              />
              <span className="text-gray-700">Include Numbers</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={char}
                onChange={(e) => setChar(e.target.checked)}
                className="h-5 w-5 text-blue-600 rounded"
              />
              <span className="text-gray-700">Include Special Characters</span>
            </label>
          </div>
          
          {/* Generate Button */}
          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-200 mt-4"
            onClick={randomPasswordGenerator}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;