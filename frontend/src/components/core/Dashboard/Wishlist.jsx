import React, { useState } from "react";

import ProductCard from "./Cart/ProductCard";

const Wishlist = () => {
  const [checkout, setCheckout] = useState(false)
  return (
    <div>
      <div className="text-white flex flex-col">
        <h1 className="text-white">My Wishlist</h1>
      </div>
      <div className=" w-full mt-5 ">
        <p className="text-richblack-300">3 Courses in Wishlist</p>
        <div className="flex flex-col md:flex-row gap-5 w-full  border-t  border-t-richblack-300 mt-3 ">
          {/* card */}
          <div className=" w-full lg:w-[70%]">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          {/* total amount */}
          {!checkout && (
            <>
              <div className="bg-richblack-700 text-richblack-5 w-full lg:w-[30%] h-fit my-10 px-5 py-5 rounded-md flex flex-col gap-4">
                <p className="text-richblack-300 pl-2">Total:</p>
                <h1 className="text-2xl font-bold text-yellow-100 pl-2">
                  Rs. 4,500
                </h1>
                <del className="text-richblack-300 pl-2">Rs. 5000</del>
                <div className=" w-full">
                  <button
                    onClick={() => setCheckout(true)}
                    className=" w-full px-4 py-2 rounded-lg bg-yellow-200 hover:bg-yellow-100 text-black font-semibold scale-95"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </>
          )}
          {/* checkout */}
          {checkout && (
            <>
              <div className="bg-richblack-700 text-richblack-5 w-full lg:w-[30%] h-fit my-10 px-2 py-5 rounded-md flex flex-col gap-2">
                <h1 className="text-xl">Payment Details</h1>
                <p className="text-richblack-300">
                  Complete your purchase details items and providing your
                  payment details to us .
                </p>
                <form className=" flex w-full flex-col  border border-richblack-400 shadow-md rounded-lg px-2 py-4">
                  <label className="w-full">
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                      Full Name <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                      required
                      type="text"
                      placeholder="Enter full name"
                      style={{
                        boxShadow:
                          "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="w-full rounded-[0.5rem] bg-richblack-800 px-2 py-2 text-richblack-5 outline-none"
                    />
                  </label>
                  <label className="relative border-b py-4 border-b-richblack-300 rounde">
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                      Email <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                      required
                      type="email"
                      placeholder="Enter email"
                      style={{
                        boxShadow:
                          "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="w-full rounded-[0.5rem] bg-richblack-800 px-2 py-2 pr-12 text-richblack-5 outline-none "
                    />
                  </label>
                  <div className="flex justify-between py-3">
                    <p>Total</p>
                    <p>Rs. 1200/-</p>
                  </div>
                  <button
                    type="submit"
                    className="mt-4 rounded-[8px] bg-yellow-50 px-2 py-2 font-medium text-richblack-900"
                  >
                    Pay Rs. 1220
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
