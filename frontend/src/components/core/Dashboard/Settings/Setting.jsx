import React from 'react'
import ChangeProfilePicture from './ChangeProfilePicture'
import EditProfile from './EditProfile'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount';
// import IconBtn from "../../../common/IconBtn";

const Setting = () => {
  return (
    <>
      <div className="text-white flex flex-col gap-10 ">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <div className="flex w-full flex-col gap-5 justify-center">
          {/* Change profile picture */}
          <ChangeProfilePicture />

          {/* Profile */}
          <EditProfile />

          {/* Update Password */}
          <UpdatePassword />

          {/* Delete Account */}
          <DeleteAccount />

        </div>
      </div>
    </>
  );
}

export default Setting
