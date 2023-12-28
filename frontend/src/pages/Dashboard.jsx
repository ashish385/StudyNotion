import React from 'react'
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from '../components/core/Dashboard/Sidebar';

const Dashboard = () => {

    const { loading: authLoading } = useSelector((state) => state.auth);
    const { loading: profileLoading } = useSelector((state) => state.profile);

    if (profileLoading || authLoading) {
      return <div className="mt-10">Loading...</div>;
    }
  return (
    <div>
      <div className="relative flex min-h-[calc(100vh-3.5rem)] bg-richblack-900">
        <div className='hidden md:block'>
          <Sidebar />
        </div>
        <div className="h-[calc(100vh-3.5rem)] w-full overflow-auto">
          <div className="mx-auto w-11/12 max-w-[1000px] py-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
