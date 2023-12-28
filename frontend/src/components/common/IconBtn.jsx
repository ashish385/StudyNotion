import React from "react";

const IconBtn = ({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses,
  type,
  active
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      type={type}
      className={`${
        active
          ? "bg-yellow-50 text-richblack-900"
          : "bg-richblack-500 text-richblack-5"
      }  px-8 py-2 rounded-md ${customClasses}`}
    >
      {children ? (
        <>
          <span>{text}</span>
          {children}
        </>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
};

export default IconBtn;
