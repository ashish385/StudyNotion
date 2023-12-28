import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../../../../services/operations/settings';
import IconBtn from '../../../common/IconBtn'

const UpdatePassword = () => {

   const { token } = useSelector((state) => state.auth);
   const navigate = useNavigate();

   const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  
   const {
     register,
     handleSubmit,
     formState: { errors },
  } = useForm();
  
   const submitPasswordForm = async (data) => {
     // console.log("password Data - ", data)
     try {
       await changePassword(token, data);
     } catch (error) {
       console.log("ERROR MESSAGE - ", error.message);
     }
   };
  return (
    <div>
      <div className=" w-full flex flex-col justify-between  gap-5 px-1 lg:px-10 py-8 rounded-lg bg-richblack-800 ">
        <div className="flex justify-between px-4">
          <p className="text-xl font-medium">Change Password</p>
        </div>

        <form
          className="flex flex-col  gap-y-4"
          onSubmit={handleSubmit(submitPasswordForm)}
        >
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            {" "}
            <label className="relative w-full lg:w-[50%] px-6">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Create Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showOldPassword ? "text" : "password"}
                name="oldPassword"
                id="oldPassword"
                placeholder="Enter Password"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] pr-10 text-richblack-5"
                {...register("oldPassword", { required: true })}
              />
              <span
                onClick={() => setShowOldPassword((prev) => !prev)}
                className="absolute right-9 top-[38px] z-[10] cursor-pointer"
              >
                {showOldPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
              {errors.oldPassword && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Current Password.
                </span>
              )}
            </label>
            <label className="relative w-full lg:w-[50%] px-6">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Confirm Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                id="newPassword"
                placeholder="Enter New Password"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] pr-10 text-richblack-5"
                {...register("newPassword", { required: true })}
              />
              <span
                onClick={() => setShowNewPassword((prev) => !prev)}
                className="absolute right-9 top-[38px] z-[10] cursor-pointer"
              >
                {showNewPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
              {errors.newPassword && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your New Password.
                </span>
              )}
            </label>
          </div>
          <div className="flex justify-end gap-2 pr-6">
            <button
              onClick={() => {
                navigate("/dashboard/my-profile");
              }}
              className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
            >
              Cancel
            </button>
            <IconBtn type="submit" text="Update" active={true} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdatePassword
