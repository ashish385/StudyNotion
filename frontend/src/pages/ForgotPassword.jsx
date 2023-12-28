import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/operations/authAPI";
import { BsArrowLeft } from "react-icons/bs";

const ForgotPassword = () => {
  const { loading } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const dispatch = useDispatch()  ;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email,setEmailSent))
  }
  return (
    <>
      <div className="w-[50%] h-screen flex mx-auto justify-center items-center ">
        {loading ? (
          <div>Loding.....</div>
        ) : (
          <div className="flex flex-col items-start max-w-[508px] text-white p-8 ">
            <h1 className="font-bold text-3xl">
              {!emailSent ? "Reset your password" : "Check your email"}
            </h1>
            <p className="text-justify w-[350px] text-pure-greys-100 mt-3">
              {!emailSent
                ? `Have no fear. We'll email you instructions to reset your password.
              If you dont have access to your email we can try account recovery`
                : `We have sent the reset email to ${email}`}
            </p>

            <div className="mt-5 w-full">
              <form
                onSubmit={handleOnSubmit}
                className="mt-3 flex w-full flex-col gap-y-4"
              >
                {!emailSent && (
                  <label htmlFor="email" className="w-full">
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                      Email Address <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      style={{
                        boxShadow:
                          "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    />
                  </label>
                )}
                <button
                  type="submit"
                  className="mt-3 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
                >
                  {!emailSent ? "Reset Password" : "resend OTP"}
                </button>
              </form>

              <div>
                <Link to={"/login"} className="flex gap-2 items-center mt-3">
                  <BsArrowLeft />
                  <p>Back to login</p>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ForgotPassword;
