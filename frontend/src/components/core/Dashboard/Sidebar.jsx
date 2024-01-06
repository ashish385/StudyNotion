import React from "react";

import { sidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../services/operations/authAPI";
import { useDispatch, useSelector } from "react-redux";
import SidebarLink from "./SidebarLink";
import { useNavigate } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc";

const Sidebar = ({ setDropDownMenu }) => {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (profileLoading || authLoading) {
    return <div className="mt-10">Loading...</div>;
  }

  return (
    <div>
      <div className="text-white ">
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
                      {user.email}
                    </div>
                  </div>
                </div>
                <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-600"></div>
              </div>
            )}
          </div>
          {/* for student */}
          {user && (
            <>
              <div className="flex flex-col">
                {sidebarLinks.map((link) => {
                  if (link.type && user?.accountType !== link.type) return null;
                  return (
                    <SidebarLink
                      key={link.id}
                      link={link}
                      iconName={link.icon}
                    />
                  );
                })}
              </div>

              <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-600"></div>
            </>
          )}

          {user ? (
            <div className="flex flex-col">
              <SidebarLink
                link={{ name: "Settings", path: "dashboard/settings" }}
                iconName="VscSettingsGear"
              />

              <div
                onClick={() => {
                  dispatch(logout(navigate));
                  setDropDownMenu(false);
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
          ) : (
            <>
              <div className="flex flex-col justify-center items-center w-full gap-5 z-50">
                <div
                  onClick={() => {
                    navigate("/login");
                    setDropDownMenu(false);
                  }}
                  className="text-center border px-3 py-2 w-fit rounded-lg hover:bg-richblack-500 cursor-pointer "
                >
                  Log In
                </div>
                <div
                  onClick={() => {
                    navigate("/signup");
                    setDropDownMenu(false);
                  }}
                  className="text-center border px-3 py-2 w-fit rounded-lg hover:bg-richblack-500 cursor-pointer "
                >
                  Sign Up
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
