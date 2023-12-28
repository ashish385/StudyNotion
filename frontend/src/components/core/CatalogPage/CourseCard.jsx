import React from 'react'
import { useState } from 'react';
import RatingStars from "../../common/RatingStars";
import GetAvgRating from "../../../utils/avgRating";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course, Height }) => {

  const [avgReviewCount, setAvgReviewCount] = useState(0);
  const [instructorName, setInstructorName] = useState(null)
  

    useEffect(() => {
      const count = GetAvgRating(course.ratingAndReviews);
      setAvgReviewCount(count);
      setInstructorName(course?.instructor?.firstName);
    }, [course]);
  
  console.log("instructorName",instructorName);
  return (
    <div>
      <Link to={`/courses/${course._id}`}>
        <div className="flex flex-col gap-3 bg-richblack-800 rounded-xl">
          <div>
            <img
              src={course?.thumbnail}
              alt="course ka thumbnail"
              className={`${Height} w-full rounded-xl object-cover`}
            />
          </div>
          <div className="flex flex-col gap-3 px-4 py-3">
            <p className="text-white text-lg text-semibold">
              {course?.courseName}
            </p>
            <p className="text-richblack-300">{instructorName}</p>
            <div className="flex gap-x-3 text-lg">
              <span className="text-white">{avgReviewCount || 0}</span>
              <RatingStars Review_Count={avgReviewCount} />
              <span className="text-white">
                {course?.ratingAndReviews?.length} Ratings
              </span>
            </div>
            <p className="text-white text-3xl font-semibold pl-1">
              Rs. {course?.price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard