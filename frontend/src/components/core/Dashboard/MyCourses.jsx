import React, { useState } from 'react'
import { VscAdd } from "react-icons/vsc";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IconBtn from '../../common/IconBtn'
import CoursesTable from './InstructorCourses/CoursesTable';
import { useEffect } from 'react';
import { fetchInstructorCourses } from '../../../services/operations/course';

const MyCourses = () => {
    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  
   useEffect(() => {
     const fetchCourses = async () => {
       const result = await fetchInstructorCourses(token);
       if (result) {
         setCourses(result);
       }
     };
     fetchCourses();
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
  return (
    <div>
      <div className="mb-14 w-full flex items-center justify-between">
        <h1 className="text-3xl font-medium text-richblack-5">My Courses</h1>
        <IconBtn
          active={true}
          text="Add Course"
          onclick={() => navigate("/dashboard/add-course")}
          customClasses={"flex tems-center text-sm justify-between gap-1"}
        >
          <VscAdd className='mt-1' />
        </IconBtn>
      </div>
      {courses && <CoursesTable courses={courses} setCourses={setCourses} />}
    </div>
  );
}

export default MyCourses
