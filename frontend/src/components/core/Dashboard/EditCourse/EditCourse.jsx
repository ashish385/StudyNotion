import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RenderSteps from '../AddCourse/RenderSteps';
import { setCourse, setEditCourse } from '../../../../redux/slices/courseSlice';
import { useEffect } from 'react';
import { getFullDetailsOfCourse } from '../../../../services/operations/course';

const EditCourse = () => {
    const dispatch = useDispatch();
    let { courseId } = useParams();
    const { course } = useSelector((state) => state.course);
    const [loading, setLoading] = useState(false);
    const { token } = useSelector((state) => state.auth);

    console.log("courseId",courseId);
    
    useEffect(() => {
      (async () => {
        setLoading(true);
        const result = await getFullDetailsOfCourse(courseId, token);
        if (result?.courseDetails) {
          dispatch(setEditCourse(true));
          dispatch(setCourse(result?.courseDetails));
        }
        setLoading(false);
      })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
      return (
        <div className="grid flex-1 place-items-center">
          <div className="spinner"></div>
        </div>
      );
    }

  return (
    <div className='text-white'>
          <h1>Edit Course</h1>
          <div>
              {course?(<RenderSteps />):(<p>Course not found</p>)}
          </div>
    </div>
  )
}

export default EditCourse
