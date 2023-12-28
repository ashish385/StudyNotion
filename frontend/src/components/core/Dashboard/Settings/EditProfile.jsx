import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import IconBtn from '../../../common/IconBtn';
// import CountryCode from "../../../../data/countrycode.json";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { updateProfile } from '../../../../services/operations/settings';

const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"];

const EditProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitProfileForm = async (data) => {
    // console.log("Form Data - ", data)
    try {
      dispatch(updateProfile(token, data));
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  };
  return (
    <div>
      {/* section 3 */}
      <div className=" w-full flex flex-col  gap-5  lg:px-10 py-8 rounded-lg bg-richblack-800 ">
        <div className="flex justify-between">
          <p className="text-xl font-medium">Profile Information</p>
        </div>
        <form onSubmit={handleSubmit(submitProfileForm)}>
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <div className=" w-full lg:w-[50%] flex flex-col gap-1  px-4">
              <p className="text-richblack-500">First Name</p>
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                id="firstName"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full  rounded-[0.5rem] bg-richblack-700 p-[12px] pr-12 text-richblack-5"
                {...register("firstName", { required: true })}
                defaultValue={user?.firstName}
              />
              {errors.firstName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your first name.
                </span>
              )}
              <span className="text-richblack-600 text-[14px]">
                Name entered above will be used for all issued certifies.
              </span>
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-1  px-4">
              <p className="text-richblack-500">Last Name</p>
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                id="lastName"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] pr-12 text-richblack-5"
                {...register("lastName", { required: true })}
                defaultValue={user?.lastName}
              />
              {errors.lastName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your last name.
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between mt-4 gap-4">
            <div className="w-full lg:w-[50%] flex flex-col gap-1  px-4">
              <p className="text-richblack-500">Date of Birth</p>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] pr-12 text-richblack-5"
                {...register("dateOfBirth", {
                  required: {
                    value: true,
                    message: "Please enter your Date of Birth.",
                  },
                  max: {
                    value: new Date().toISOString().split("T")[0],
                    message: "Date of Birth cannot be in the future.",
                  },
                })}
                defaultValue={user?.additionalDetails?.dateOfBirth}
              />
              {errors.dateOfBirth && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.dateOfBirth.message}
                </span>
              )}
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-1  px-4">
              <p className="text-richblack-500">Gender</p>
              <select
                type="text"
                name="gender"
                id="gender"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] pr-12 text-richblack-5"
                {...register("gender", { required: true })}
                defaultValue={user?.additionalDetails?.gender}
              >
                {genders.map((ele, i) => {
                  return (
                    <option key={i} value={ele}>
                      {ele}
                    </option>
                  );
                })}
              </select>
              {errors.gender && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Date of Birth.
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between mt-4 gap-4">
            <div className="w-full lg:w-[50%] flex flex-col gap-1  px-4">
              <p className="text-richblack-500">
                Phone Number <span className="text-pink-500">*</span>
              </p>
              <div className="flex flex-row gap-2">
                {/*dropDown  */}
                {/* <div className="flex w-[100px] gap-5">
                  <select
                    name="dropdown"
                    id="dropdown"
                    style={{
                      boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5 "
                  >
                    {CountryCode.map((element, index) => {
                      return (
                        <option
                          key={index}
                          value={element.code}
                          className="bg-richblack-700 text-richblack-5"
                        >
                          <span className="py-5">
                            {element.code} ...{element.country}
                          </span>
                        </option>
                      );
                    })}
                  </select>
                </div> */}
                <div className="w-full">
                  <input
                    type="tel"
                    name="contactNumber"
                    id="contactNumber"
                    placeholder="12345678"
                    style={{
                      boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5"
                    {...register("contactNumber", {
                      required: {
                        value: true,
                        message: "Please enter your Contact Number.",
                      },
                      maxLength: {
                        value: 12,
                        message: "Invalid Contact Number",
                      },
                      minLength: {
                        value: 10,
                        message: "Invalid Contact Number",
                      },
                    })}
                    defaultValue={user?.additionalDetails?.contactNumber}
                  />
                  {errors.contactNumber && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                      {errors.contactNumber.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-1  px-4">
              <p className="text-richblack-500">About</p>
              <input
                type="text"
                name="about"
                id="about"
                placeholder="Enter Bio Details"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] pr-12 text-richblack-5"
                {...register("about", { required: true })}
                defaultValue={user?.additionalDetails?.about}
              />
              {errors.about && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your About.
                </span>
              )}
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-10 pr-5">
            <button
              onClick={() => {
                navigate("/dashboard/my-profile");
              }}
              className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
            >
              Cancel
            </button>
            <IconBtn type="submit" text="Save" active={true} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile
