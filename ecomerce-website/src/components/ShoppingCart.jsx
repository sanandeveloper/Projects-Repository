import { h1 } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    const lsdata = JSON.parse(localStorage.getItem("Product")) || [];
    setCart(lsdata);
  }, []);
   
    

  const handleremove = (itemToRemove) => {
    const lsdata = JSON.parse(localStorage.getItem("Product"));
    const updatedData = lsdata.filter((item) => item.id !== itemToRemove.id);
    localStorage.setItem("Product", JSON.stringify(updatedData));
    setCart(updatedData);
  };

  const addQuantity = (data) => {
    const lsdata = JSON.parse(localStorage.getItem("Product"));
    const itemQuantity = lsdata.map((val) => {
      if (val.id === data.id) {
        const updatedData = { ...val, quantity: val.quantity + 1 || 1 };
        return updatedData;
      } else {
        return val;
      }
    });
    localStorage.setItem("Product", JSON.stringify(itemQuantity));
    setCart(itemQuantity);
  };

  const removeQuantity = (data) => {
    const lsProduct = JSON.parse(localStorage.getItem("Product"));
    const ProductData = lsProduct.map((val) => {
      if (val.id === data.id) {
        const updatedData = { ...val, quantity: val.quantity - 1 || 1 };
        return updatedData;
      } else {
        return val;
      }
    });

    localStorage.setItem("Product", JSON.stringify(ProductData));
    setCart(ProductData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-13">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Your Shopping Cart
          </h1>

          <p className="text-gray-600">
            {cart.length > 0
              ? `You have ${cart.length} item${
                  cart.length > 1 ? "s" : ""
                } in your cart`
              : "Your cart is waiting to be filled"}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {cart?.length > 0 && (
            <div className="hidden md:grid grid-cols-12 bg-gray-100 p-4 border-b border-gray-200">
              <div className="col-span-5 font-medium text-gray-700">
                Product
              </div>
              <div className="col-span-2 font-medium text-gray-700 text-center">
                Price
              </div>
              <div className="col-span-3 font-medium text-gray-700 text-center">
                Quantity
              </div>
              <div className="col-span-2 font-medium text-gray-700 text-right">
                Total
              </div>
            </div>
          )}

          

          {cart?.map((item) => (
            <div
              key={item.id}
              className="p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="col-span-5 flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-contain rounded-lg bg-white p-2 border border-gray-200"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {item.name}
                    </h2>
                    <button
                      onClick={() => handleremove(item)}
                      className="mt-2 text-sm text-red-600 hover:text-red-700 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>

                <div className="col-span-2 text-center text-gray-700 font-medium">
                  Rs {item.price}
                </div>

                <div className="col-span-3 flex justify-center">
                  <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                    <button
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors"
                      onClick={() => removeQuantity(item)}
                    >
                      -
                    </button>
                    <div className="px-4 py-1 bg-white text-center min-w-[40px] font-medium">
                      {item.quantity}
                    </div>
                    <button
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors"
                      onClick={() => addQuantity(item)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="col-span-2 text-right font-bold text-gray-900">
                  Rs {(Number(item.quantity) * Number(item.price)).toFixed(2)}
                </div>
              </div>
            </div>
          ))}

          {error && showErrorToast(error)}

          {cart?.length === 0 && (
            <div className="py-16 text-center">
              <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5.5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Your cart is empty
              </h2>
              <p className="text-gray-600 max-w-md mx-auto mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition-colors">
                Continue Shopping
              </button>
            </div>
          )}

          {cart?.length > 0 && (
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="flex justify-end">
                <div className="w-full max-w-md space-y-4">
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-700">Subtotal:</span>
                    <span className="font-bold text-gray-900">
                      Rs{" "}
                      {cart
                        .reduce(
                          (total, item) =>
                            total + Number(item.price) * Number(item.quantity),
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 text-right">
                    Shipping and taxes calculated at checkout
                  </p>
                  <button
                    onClick={() => {
                      if (authStatus) {
                        navigate("/address");
                      } else {
                        toast.error('please login first to checkout')
                      }
                    }}
                    className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
