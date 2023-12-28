import React, { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { BiReset } from "react-icons/bi";
import OTPInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { sendOtp, signUp } from '../services/operations/authAPI';

const VerifyEmail = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');

    const { signupData, loading } = useSelector((state) => state.auth);
    
    // useEffect(() => {
    //     if (!signupData) {
    //         navigate("/signup");
    //     }
    // },[])

    function handleOnSubmit(e) {
        e.preventDefault();

        const {
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        } = signupData;

        dispatch(
          signUp(
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            otp,
            navigate
          )
        );
    }
    
  return (
    <div>
      <div className="w-[50%] h-screen flex mx-auto justify-center items-center ">
        {loading ? (
          <div className="custom-loader"></div>
        ) : (
          <div className="flex flex-col items-start max-w-[450px] text-white p-8 ">
            <h1 className="font-bold text-3xl">Verify Email</h1>
            <p className="text-justify  text-pure-greys-100 mt-3">
              A verification code has been sent to you. Enter the code below
            </p>
            <form
              action=""
              onSubmit={handleOnSubmit}
              className="mt-6 flex w-full flex-col gap-y-4"
            >
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span className="flex mx-2"></span>}
                renderInput={(props) => (
                  <input
                    {...props}
                    placeholder="-"
                    style={{
                      boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full text-center rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 outline-none focus:outline-yellow-300"
                  />
                )}
              />
              <button
                type="submit"
                className="mt-3 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
              >
                Verify Email
              </button>
            </form>
            <div className="flex justify-between w-full">
              <div>
                <Link to={"/login"} className="flex gap-2 items-center mt-3">
                  <BsArrowLeft />
                  <p>Back to login</p>
                </Link>
              </div>
              <div
                className="flex gap-2 items-center mt-3 text-[#47A5C5] cursor-pointer"
                onClick={() => dispatch(sendOtp(signupData.email, navigate))}
              >
                <BiReset />
                <p>Resend it</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VerifyEmail
