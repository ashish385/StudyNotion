import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { getCatalogPageData } from "../services/operations/pageAndComponentData";
import { useState } from "react";
import { fetchCourseDetails } from "../services/operations/course";
import RatingStars from "../components/common/RatingStars";
import { BsCameraVideo, BsInfoCircle } from "react-icons/bs";
import {FaAngleDown, FaGlobeAsia } from "react-icons/fa"; /*  , */
// import { AiOutlineClockCircle } from "react-icons/ai";
// import { PiCursorLight, PiTelevisionBold } from "react-icons/pi";
// import { FaMobileRetro } from "react-icons/fa6";
// import { LuFileCheck } from "react-icons/lu";
import { buyCourse } from "../services/operations/studentsFeaturesAPI";
import CourseDetailsCard from "../components/core/Course/CourseDetailsCard";
import GetAvgRating from "../utils/avgRating";
import Error from './Error'
import { formattedDate } from "../utils/dateFormatter";
import ConfirmationsModal from "../components/common/ConfirmationsModal";
import Footer from "../components/common/Footer";

const CourseDetails = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.profile);
  // const { paymentLoading } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [avgReviewCount, setAverageReviewCount] = useState(0);
  const [confirmationModal, setConfirmationModal] = useState(null);

  useEffect(() => {
    const getCourseDetails = async () => {
      try {
        const result = await fetchCourseDetails(courseId);
        console.log("Course details", result);
        setCourseData(result);
      } catch (error) {
        console.log(error);
      }
    };
    getCourseDetails();
  }, [courseId]);

  useEffect(() => {
    const count = GetAvgRating(courseData?.courseDetails.ratingAndReviews);
     setAverageReviewCount(count);
  }, [courseData]);

  console.log("avgReviewCount", avgReviewCount);

  const [totalNoOfLectures, setTotalNoOfLectures] = useState(0);
  useEffect(() => {
    let lectures = 0;
    courseData?.courseDetails?.courseContent?.forEach((sec) => {
      lectures += sec.subSection.length || 0;
    });
    setTotalNoOfLectures(lectures);
  }, [courseData]);

  console.log("totalNoOfLectures", totalNoOfLectures);

  const [isActive, setIsActive] = useState(Array(0));
   const handleActive = (id) => {
     setIsActive(
       !isActive.includes(id)
         ? isActive.concat(id)
         : isActive.filter((e) => e !== id)
     );
  };

  const handleBuyCourse = () => {
    if (token) {
      buyCourse(token, [courseId], user, navigate, dispatch);
      return;
    }
    setConfirmationModal({
      text1: "you are not Logged in",
      text2: "Please login to purchase the course",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };

  if (loading || !courseData) {
    return <div>Loading...</div>;
  }

  if (!courseData) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  console.log("courseData", courseData);
  const courseName = courseData?.courseDetails.courseName
  const courseDescription = courseData?.courseDetails.courseDescription
  // const thumbnail = courseData?.courseDetails.thumbnail
  // const price = courseData?.courseDetails.price;
  const whatYouWillLearn = courseData?.courseDetails.whatYouWillLearn;
  const courseContent = courseData?.courseDetails.courseContent;
  const ratingAndReviews = courseData?.courseDetails.ratingAndReviews;
  const instructor = courseData?.courseDetails.instructor;
  const studentsEnrolled = courseData?.courseDetails.studentsEnrolled;
  const createdAt = courseData?.courseDetails.createdAt;

  // const instructorImage = instructor.image?instructor.image:""


  return (
    <>
      <div className="flex flex-col  text-white h-full ">
        <div className="relative bg-richblack-800 w-full">
          <div className="w-11/12 mx-auto py-8">
            {/* header  */}
            <div className=" max-w-[700px]  flex flex-col gap-2  pt-8  pb-2 ">
              <p className="text-richblack-300">
                {`Home / Catalog / `}
                <span className="text-yellow-100 ">{courseName}</span>
              </p>
              <p className="text-white text-3xl font-semibold">{courseName}</p>
              <p className="text-richblack-300">{courseDescription}</p>
              <div className="flex items-center gap-x-2 text-lg">
                <span className="text-richblack-50 ">{avgReviewCount}</span>
                <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
                <span className="text-richblack-50 text-sm">{`(${ratingAndReviews.length} reviews) `}</span>
                <span className="text-richblack-50 text-sm">{`(${studentsEnrolled.length} students enrolled)`}</span>
              </div>

              <div>
                <p className="text-richblack-25">
                  Created by {`${instructor.firstName}`}
                </p>
              </div>

              {/* card */}
              <div className="flex gap-6 text-richblack-25 text-sm">
                <p className="flex  items-center">
                  <BsInfoCircle /> <span>Created at:- </span>{" "}
                  {formattedDate(createdAt)}
                </p>
                <span className="flex  items-center gap-1">
                  <FaGlobeAsia />
                  <span>English</span>
                </span>
              </div>
            </div>
          </div>
          {/* course Card */}
          <div className="text-white lg:absolute bg-richblack-700 max-w-[500px] mx-auto lg:w-[300px] rounded-lg right-8 top-10">
            <CourseDetailsCard
              course={courseData?.courseDetails}
              setConfirmationModal={setConfirmationModal}
              handleBuyCourse={handleBuyCourse}
            />
          </div>
        </div>
        <section className="w-11/12 mx-auto py-8">
          <div className="text-white border border-richblack-600 px-6 py-5 rounded-md w-full lg:w-[700px]">
            <p className="text-3xl font-semibold"> What You WIll learn</p>
            <div className="py-4 text-richblack-100"> {whatYouWillLearn}</div>
          </div>
        </section>

        {/* course content  */}
        <section className="w-11/12 mx-auto py-8">
          <div className="text-white my-10 w-full lg:w-[700px]">
            <h1 className="text-3xl font-semibold">Course content</h1>
            <div className="flex justify-between ">
              <div className="flex flex-col min-w-[300px]:flex-row sm:flex-row text-sm gap-2 text-richblack-300">
                <span>{courseContent.length} section(s)</span>
                <span>{totalNoOfLectures} lectures</span>
                <span> {courseData?.totalDuration} total length</span>
              </div>
              <button
                onClick={() => setIsActive([])}
                className="text-yellow-100"
              >
                Collapse all sections
              </button>
            </div>

            {/* collapse */}
            <div className="text-white border border-richblack-600 my-2 rounded-md ">
              {courseContent?.map((section) => (
                <div key={section._id} className="bg-richblack-800  ">
                  <div
                    className="flex justify-between  gap-1 items-center text-lg px-4 py-4 transition-all duration-500"
                    onClick={() => handleActive(section._id)}
                  >
                    <div className="flex gap-1 items-center cursor-pointer">
                      {!isActive.includes(section._id) ? (
                        <FaAngleDown className="transition-all duration-200 " />
                      ) : (
                        <FaAngleDown className="transition-transform transform rotate-180    duration-200 ease-linear" />
                      )}
                      <h1 className=" capitalize">{section?.sectionName}</h1>
                    </div>
                    <p className="text-yellow-100">
                      {section.subSection.length} lecture(s)
                    </p>
                  </div>
                  <div>
                    {section.subSection.map((subSection) => (
                      <div>
                        {isActive.includes(section._id) && (
                          <div className="w-full  bg-richblack-900  subSection-animation ">
                            <div className="flex px-6 py-4 text-lg gap-1 items-center cursor-pointer">
                              <BsCameraVideo />
                              <p>{subSection?.title}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*About Author   */}
        <section className="w-11/12 mx-auto py-8">
          <h1 className="text-3xl font-semibold">Author</h1>
          <div className="flex gap-2 items-center py-3">
            <img src={instructor?.image} alt="Instructor"  className="w-[70px] h-[70px] rounded-full bg-white "/>
            <p className="font-semibold">
              {instructor?.firstName} {instructor.lastName}
            </p>
          </div>
          <p className="text-richblack-100 py-2">{instructor?.additionalDetails?.about}</p>
        </section>
        {confirmationModal && (
          <ConfirmationsModal modalData={confirmationModal} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default CourseDetails;


