import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { apiConnector } from "../../../services/apiconnector";
// import { contactusEndpoint } from "../../../services/apis";
import CountryCode from "../../../data/countrycode.json";
import { apiConnector } from "../../../services/apiconnector";
import { contactusEndpoint } from "../../../services/apis";

const ContactUsForm = () => {
  const [loding, setLoding] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessfull },
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("logging data", data);
    try {
      setLoding(true);
      const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
      // const response = { status: "ok" };
      console.log("response data", response);
      setLoding(false);
    } catch (error) {
      console.log("Error", error.message);
      setLoding(false);
    }
  };
  useEffect(() => {
    if (isSubmitSuccessfull) {
      reset({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [isSubmitSuccessfull, reset]);
  return (
    <div>
      {loding ? (
        <></>
      ) : (
        <form onSubmit={handleSubmit(submitContactForm)}>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-5">
              {/* first NAme */}
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter first name"
                  {...register("firstName", { required: true })}
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                />
                {errors.firstName && (
                  <span className=" text-pink-500 py-1">
                    Please enter your first name
                  </span>
                )}
              </div>
              {/* last Name  */}
              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter last name"
                  {...register("lastName")}
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                />
              </div>
            </div>
            {/* email */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5"
              >
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Enter email address"
                {...register("email", { required: true })}
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
              {errors.email && (
                <span className=" text-pink-500 py-1">
                  Please enter your email address
                </span>
              )}
            </div>

            {/* phone No. */}
            <div className="flex flex-col">
              <label htmlFor="phoneNo">Phone No.</label>
              <div className="flex flex-row gap-2">
                {/*dropDown  */}
                <div className="flex w-[100px] gap-5">
                  <select
                    name="dropdown"
                    id="dropdown"
                    style={{
                      boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem] bg-richblack-800 px-4 p-[12px] text-richblack-5 "
                    {...register("countrycode", { required: true })}
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
                </div>
                <div className="w-full">
                  <input
                    type="number"
                    id="phoneNo"
                    name="phoneNo"
                    placeholder="12345678"
                    style={{
                      boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    {...register("phoneNo", {
                      required: true,
                      message: "Please enter Phone Number",
                      maxLength: {
                        value: 10,
                        message: "Invalid Phone No.",
                      },
                      minLength: {
                        value: 8,
                        message: "Invalid Phone No.",
                      },
                    })}
                  />
                </div>
              </div>
              {errors.phoneNo && (
                <span className=" text-pink-500 py-1">
                  {errors.phoneNo.message}
                </span>
              )}
            </div>
            {/* message */}
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5"
              >
                Message
              </label>
              <textarea
                type="text"
                name="message"
                id="message"
                placeholder="Enter your message "
                {...register("message", { required: true })}
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
              {errors.message && (
                <span className=" text-pink-500 py-1">
                  Please enter your message{" "}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="text-center text-[13px] px-4 lg:px-6 py-2 lg:py-3 rounded-md font-bold bg-yellow-50 text-black"
            >
              Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactUsForm;
