import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { PiKeyReturnFill } from "react-icons/pi";
import { Ri24HoursFill } from "react-icons/ri";

function Service() {
  return (
    <div className="px-4 md:px-10 lg:px-20 mt-20 mb-20">
      <div className="flex flex-wrap justify-between gap-6 items-center">
        {/* Item 1 */}
        <div className="w-full sm:w-[48%] lg:w-[23%] flex items-start gap-4">
          <TbTruckDelivery className="text-5xl text-red-500" />
          <div>
            <h1 className="text-lg font-semibold">Fast & Free Delivery</h1>
            <p className="text-base text-gray-600">Free delivery on all orders</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="w-full sm:w-[48%] lg:w-[23%] flex items-start gap-4">
          <RiSecurePaymentFill className="text-5xl text-red-500" />
          <div>
            <h1 className="text-lg font-semibold">Secure Payment</h1>
            <p className="text-base text-gray-600">Free delivery on all orders</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="w-full sm:w-[48%] lg:w-[23%] flex items-start gap-4">
          <PiKeyReturnFill className="text-5xl text-red-500" />
          <div>
            <h1 className="text-lg font-semibold">Money Back </h1>
            <p className="text-base text-gray-600">Free delivery on all orders</p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="w-full sm:w-[48%] lg:w-[23%] flex items-start gap-4">
          <Ri24HoursFill className="text-5xl text-red-500" />
          <div>
            <h1 className="text-lg font-semibold">Online Support</h1>
            <p className="text-base text-gray-600">Free delivery on all orders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
