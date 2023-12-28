import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import { resetPassword } from '../services/operations/authAPI';

const UpdatePassword = () => {

  const dispatch = useDispatch();
  const location = useLocation();

  const { loading } = useSelector((state) => state.auth);
    const [formData, setFormData] = useState(
        {
            password: "",
            confirmPassword:"",
        }
    )
  const [showPassword, setShowPassword] = useState(false);
  
  
  const { password, confirmPassword } = formData;

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({...formData,[name]:value})
  }

  
  function handleOnSubmit(e) {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword,token));
  }
  return (
    <div className="w-[50%] h-screen flex mx-auto justify-center items-center ">
      {loading ? (
        <div className='text-white text-3xl font-bold'>Loding...</div>
      ) : (
        <div className="flex flex-col items-start max-w-[508px] text-white p-8 ">
          <h1 className="font-bold text-3xl">Choose new password</h1>
          <p className="text-justify w-[350px] text-pure-greys-100 mt-3">
            Almost done. Enter your new password and youre all set.
          </p>
          <form
            action=""
            onSubmit={handleOnSubmit}
            className="mt-6 flex w-full flex-col gap-y-4"
          >
            <label htmlFor="password" className="w-full relative">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                New Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="New Password"
                value={formData.password}
                onChange={handleChange}
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
            <label htmlFor="confirmPassword" className="w-full relative">
              <p className="mb-1 relative text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Confirm Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
            <button className="mt-3 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900">
              Update Password
            </button>
          </form>
          <div>
            <Link to={"/login"} className="flex gap-2 items-center mt-3">
              <BsArrowLeft />
              <p>Back to login</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdatePassword
