import React from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../common/IconBtn";

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  console.log(user);
  return (
    <div>
      <div className="text-white flex flex-col gap-10 ">
        <h1 className="text-3xl font-bold">My Profile</h1>

        <div className="flex w-full flex-col gap-5 justify-center">
          {/* section-1 */}

          <div className=" w-full  flex flex-row justify-between  gap-5 px-10 py-8 rounded-lg bg-richblack-800 ">
            <img
              src={user?.image}
              alt={`profile-${user?.firstName}`}
              className="aspect-square w-[75px] rounded-full object-cover"
            />
            <div className="flex-1 flex flex-col gap-2 justify-center">
              <p className="text-xl font-bold">
                {" "}
                {user?.firstName + " " + user?.lastName}{" "}
              </p>
              <p className="text-sm text-richblack-300"> {user?.email}</p>
            </div>
            <div className="flex justify-center items-center">
              <IconBtn
                text="Edit"
                active={true}
                onclick={() => {
                  navigate("/dashboard/settings");
                }}
              ></IconBtn>
            </div>
          </div>

          {/* section 2 */}
          <div className=" w-full flex flex-col   gap-5 px-10 py-8 rounded-lg bg-richblack-800 ">
            <div className="flex justify-between">
              <p>About</p>
              <IconBtn
                text="Edit"
                active={true}
                onclick={() => {
                  navigate("/dashboard/settings");
                }}
              />
            </div>
            <p className="text-richblack-400">
              {" "}
              {user?.additionalDetails?.about ??
                "Write Something about Yourself"}
            </p>
          </div>

          {/* section 3 */}
          <div className=" w-full flex flex-col  gap-5 px-10 py-8 rounded-lg bg-richblack-800 ">
            <div className="flex justify-between">
              <p className="text-xl font-bold">Personal Details</p>
              <IconBtn
                text="Edit"
                active={true}
                onclick={() => {
                  navigate("/dashboard/settings");
                }}
              />
            </div>
            <div className="">
              <div className="flex justify-between">
                <div className="w-[50%] flex flex-col gap-1  px-4">
                  <p className="text-richblack-500">First Name</p>
                  <p className="text-richblack-5">{user?.firstName}</p>
                </div>
                <div className="w-[50%] flex flex-col gap-1  px-4">
                  <p className="text-richblack-500">Last Name</p>
                  <p className="text-richblack-5">{user?.lastName}</p>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <div className="w-[50%] flex flex-col gap-1  px-4">
                  <p className="text-richblack-500">Email</p>
                  <p className="text-richblack-5">{user?.email}</p>
                </div>
                <div className="w-[50%] flex flex-col gap-1  px-4">
                  <p className="text-richblack-500">Phone Number</p>
                  <p className="text-richblack-5">
                    {user?.additionalDetails?.contactNumber ??
                      "Add Contact Number"}
                  </p>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <div className="w-[50%] flex flex-col gap-1  px-4">
                  <p className="text-richblack-500">Gender</p>
                  <p className="text-richblack-5">
                    {user?.additionalDetails?.gender ?? "Add Gender"}
                  </p>
                </div>
                <div className="w-[50%] flex flex-col gap-1  px-4">
                  <p className="text-richblack-500">Date of Birth</p>
                  <p className="text-richblack-5">
                    {user?.additionalDetails?.dateOfBirth ??
                      "Add Date of Birth"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 1 */}
      </div>
    </div>
  );
}

export default MyProfile
