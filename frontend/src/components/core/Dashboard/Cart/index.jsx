import React from "react";
import { useSelector } from "react-redux";
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";

const Cart = () => {
  const { total, totalItems } = useSelector((state) => state.cart);
  return (
    <div className="text-white">
      <div>
        <h1 className="text-3xl font-semibold">Your Cart</h1>
        <p className="mt-5 text-richblack-300 border-b">
          {totalItems} Course in Cart
        </p>
        <div>
          {total > 0 ? (
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 py-3">
              <RenderCartCourses />
              <RenderTotalAmount />
            </div>
          ) : (
            <div className="mt-10">
              <p className="text-center text-richblack-100 text-3xl font-semibold">
                Your cart is empty
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
