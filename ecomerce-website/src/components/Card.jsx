import React, { useEffect, useState } from "react";
import product from "./ProductApi/product";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { number } from "framer-motion";
import { toast } from "react-toastify";
import { div } from "framer-motion/client";

function Card({ price, text }) {
  const [products, setProducts] = useState(product);
  const [add, setAdd] = useState(null);
  const [alert, setAlert] = useState(null);
  const [input, setInput] = useState(null);
  const location = useLocation();
  const [range, setRange] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  const Page_size = 4;

  const totalProduct = products.length;
  const totalPages = Math.ceil(totalProduct / Page_size);
  let start = currentPage * Page_size;
  const end = start + Page_size;

  const searchProduct = () => {
    if (!input) {
      setProducts(products);
      return;
    }

    const searchResult = product.filter((val) =>
      val.name.toLowerCase().includes(input.toLowerCase())
    );

    setProducts(searchResult.length > 0 ? searchResult : products);
    setCurrentPage(0);
  };

  useEffect(() => {
    const filterdByPrice = product.filter((val) => val.price <= Number(range));
    setProducts(filterdByPrice.length > 0 ? filterdByPrice : product);
  }, [range]);

  const handleAddToCart = (data) => {
    const ls = JSON.parse(localStorage.getItem("Product")) || [];
    const alreadyExist = ls.some((val) => val.id === data.id);

    if (alreadyExist) {
      toast.error(`${data.name} already exists in the cart`);

      return;
    }

    const productData = [
      ...ls,
      {
        name: data.name,
        price: data.price,
        id: data.id,
        image: data.image,
        quantity: 1,
      },
    ];
    localStorage.setItem("Product", JSON.stringify(productData));
    toast.success(`${data.name} added to cart`);
  };

  const handleSortChange = (e) => {
    switch (e.target.value) {
      case "low-to-high":
        const sortAcend = [...product].sort((a, b) => a.price - b.price);
        setProducts(sortAcend);
        break;
      case "high-to-low":
        const sortDcend = [...product].sort((a, b) => b.price - a.price);
        setProducts(sortDcend);
        break;
      default:
        setProducts([...product]);
    }
  };
  const handlePageChange = (n) => {
    setCurrentPage(n);
  };
  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
    console.log(p);
  };
  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handleColorChange = (e) => {
    switch (e.target.value) {
      case "black":
        const blackColor = [...product].filter((val) => val.color == "black");
        setProducts(blackColor);
        break;

      case "white":
        const whiteColor = [...product].filter((val) => val.color == "white");
        setProducts(whiteColor);
        break;
      case "gray":
        const grayColor = [...product].filter((val) => val.color == "gray");
        setProducts(grayColor);
        break;
      case "yellow":
        const yellowColor = [...product].filter((val) => val.color == "yellow");
        setProducts(yellowColor);
        break;
      default:
        setProducts(product);
    }
  };

   const handleCategoryChange=(e)=>{

    switch(e.target.value){

      case 'backpacks':
        const BackPacks=[...product].filter((val)=>val.category=='backpack')
        setProducts(BackPacks)
        break;
        case 'electronics':
        const categElectronics=[...product].filter((val)=>val.category=='electronics')
        setProducts(categElectronics)
        break;
         case 'footwear':
        const categFootwear=[...product].filter((val)=>val.category=='footwear')
        setProducts(categFootwear)
        break;
        default:
          setProducts(product)


    }


   }
   const handleSizeChange=(e)=>{

    switch(e.target.value){

      case 'small':
        const smallSize=[...product].filter((val)=>val.size=='small')
        setProducts(smallSize)
        break;
      case 'medium':
        const mediumSize=[...product].filter((val)=>val.size=='medium')
        setProducts(mediumSize)
        break;
      case 'large':
        const largeSize=[...product].filter((val)=>val.size=='large')
        setProducts(largeSize)
        break;
        default:
          setProducts(product)

    }
   }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex gap-3 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search products..."
            value={input}
            hidden={location.pathname === "/"}
            onChange={(e) => setInput(e.target.value)}
            className="w-full sm:w-64 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-400 focus:outline-none transition"
          />
          <button
            hidden={location.pathname === "/"}
            onClick={searchProduct}
            disabled={location.pathname === "/"}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          >
            🔍 Search
          </button>
        </div>

        <div
          hidden={location.pathname === "/"}
          className="flex items-center gap-2"
        >
          <label htmlFor="sort-options" className="text-sm font-medium">
            Sort:
          </label>
          <select
            id="sort-options"
            onChange={handleSortChange}
            className="border border-gray-300 px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="default">Default</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div
        hidden={location.pathname === "/shop"}
        className="mb-10 text-3xl font-semibold text-gray-800"
      >
        {text}
      </div>

      <div className="mb-10">
        <label
          hidden={location.pathname === "/"}
          htmlFor="range"
          className="block mb-2 font-medium text-gray-700"
        >
          Max Price: Rs {range || 0}
        </label>
        <input
          hidden={location.pathname === "/"}
          id="range"
          type="range"
          defaultValue={0}
          min={0}
          max={7000}
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="w-20%"
        />
      </div>
     
      {/* Filters Wrapper */}
<div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mb-6" hidden={location.pathname === "/"}>
  {/* Color Filter */}
  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
    <p className="text-sm font-medium text-gray-700 min-w-[70px]">Color:</p>
    <div className="relative w-full sm:w-48">
      <select
        onChange={handleColorChange}
        className="block w-full bg-white border border-gray-300 px-4 py-2 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="deafult">Default</option>
        <option value="black">Black</option>
        <option value="gray">Gray</option>
        <option value="white">White</option>
        <option value="yellow">Yellow</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>

  {/* Category Filter */}
  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
    <p className="text-sm font-medium text-gray-700 min-w-[70px]">Category:</p>
    <div className="relative w-full sm:w-48">
      <select
        onChange={handleCategoryChange}
        className="block w-full bg-white border border-gray-300 px-4 py-2 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="deafult">Default</option>
        <option value="backpacks">BackPacks</option>
        <option value="electronics">Electronics</option>
        <option value="footwear">FootWear</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>

  {/* Size Filter */}
  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
    <p className="text-sm font-medium text-gray-700 min-w-[70px]">Size:</p>
    <div className="relative w-full sm:w-48">
      <select
        onChange={handleSizeChange}
        className="block w-full bg-white border border-gray-300 px-4 py-2 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="deafult">Default</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>
</div>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.slice(start, end).map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700"
          >
            <div className="relative pt-[100%] bg-gray-100 dark:bg-gray-700">
              <img
                src={item.image}
                alt={item.name}
                className="absolute top-0 left-0 w-full h-full object-contain p-6 transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-5">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" />
                  ))}
                </div>
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                  (4.5)
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 mb-3 min-h-[3.2rem]">
                {item.name}
              </h3>

              <div className="flex justify-between items-center mt-4">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">
                  Rs {item.price}
                </span>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition"
                >
                  <FaShoppingCart className="w-4 h-4" />
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        hidden={location.pathname == "/"}
        className="flex justify-center items-center  mt-10 gap-3  "
      >
        <div>
          <button onClick={() => prevPage()}>Prev</button>
        </div>
        {[...Array(totalPages).keys()].map((n) => {
          return (
            <div className="">
              <p
                className={`border-1 rounded-full  ${
                  currentPage === n ? "font-bold bg-gray-900 " : " bg-rose-500 "
                }px-2 w-10 h-10  cursor-pointer text-[18px]
          grid place-content-center text-white`}
                onClick={() => {
                  handlePageChange(n);
                }}
              >
                {n + 1}
              </p>
            </div>
          );
        })}
        <div>
          <button onClick={() => nextPage()}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
