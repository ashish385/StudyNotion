import React, { useState } from 'react'

import { sidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../services/operations/authAPI";
import { useDispatch, useSelector } from "react-redux";
import SidebarLink from "./SidebarLink";
import { useNavigate } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc";
import ConfirmationsModal from "../../common/ConfirmationsModal";

const Sidebar = ({ setDropDownMenu }) => {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutModal, setLogoutModal] = useState(false);

  if (profileLoading || authLoading) {
    return <div className="mt-10">Loading...</div>;
  }

  const confirmation = {
    text1: "Are You Sure ?",
    text2: "You will be logged out of your Account",
    btn1Text: "Logout",
    btn2Text: "Cancel",
    btn1Handler: () => dispatch(logout(navigate)),
    btn2Handler: () => setLogoutModal(false),
  };
  return (
    <div>
      <div className="text-white " >
        <div
          className="flex min-w-[230px] flex-col border-r-[1px] border-r-richblack-700
        h-screen bg-richblack-800 py-10"
        >
          <div className="md:hidden">
            {/* <ProfileDropdown /> */}
            {user && (
              <div className="pl-8 py-3">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-10 h-10 aspect-ratio rounded-full"
                    src={user.image}
                    alt=""
                  />
                  <div className="font-medium dark:text-white">
                    <div>
                      {user.firstName} {user.lastName}{" "}
                    </div>
                    <div className="text-sm text-richblack-300">
                      {user.email }
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-600"></div>
          </div>
          {/* for student */}
          <div className="flex flex-col">
            {sidebarLinks.map((link) => {
              if (link.type && user?.accountType !== link.type) return null;
              return (
                <SidebarLink key={link.id} link={link} iconName={link.icon} />
              );
            })}
          </div>

          <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-600"></div>

          <div className="flex flex-col">
            <SidebarLink
              link={{ name: "Settings", path: "dashboard/settings" }}
              iconName="VscSettingsGear"
            />

            <div
              onClick={() => {
                setLogoutModal(!logoutModal);
              }}
              className="text-sm cursor-pointer font-medium text-richblack-100 z-50  "
            >
              <div className="flex items-center ml-8 mt-2 gap-x-2">
                <VscSignOut className="text-lg" />
                <span>Logout</span>
              </div>
            </div>
            {/* <div onClick={()=>setLogoutModal(true)} className='c cursor-pointer z-50'>Logout</div> */}
            
          </div>
        </div>

        {logoutModal && (
          <div className="">
            <ConfirmationsModal modalData={confirmation} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar
