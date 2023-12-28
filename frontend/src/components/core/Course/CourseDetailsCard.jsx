import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../redux/slices/cartSlice';
import { ACCOUNT_TYPE } from '../../../utils/constants';
import copy from 'copy-to-clipboard';

const CourseDetailsCard = ({
  course,
  setConfirmationModal,
  handleBuyCourse,
}) => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { thumbnail: ThumbnailImage, price: CurrentPrice } = course;

  const handleAddToCart = () => {
    if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("You are an Instructor, you cant buy a course");
      return;
    }
    if (token) {
      console.log("dispatching add to cart");
      dispatch(addToCart(course));
      return;
    }
    setConfirmationModal({
      text1: "You are not logged in",
      text2: "Please login to add to cart",
      btn1Text: "Login",
      btn2Text: "cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };

  const handleShare = () => {
    copy(window.location.href);
    toast.success("Link Copied to Clipboard");
  };
  return (
    <div>
      <div className="flex flex-col ">
        <img
          src={ThumbnailImage}
          alt="Thumbnail"
          className="max-h-[300px] min-h-[180px] lg:w-[400px] rounded-xl"
        />
        <div className="py-5 text-2xl text-white font-bold px-6">
          Rs. {CurrentPrice}
        </div>
        <div className="flex flex-col gap-y-6 px-6">
          <button
            className="bg-yellow-50 hover:bg-yellow-100  text-richblack-900 rounded-md text-center py-2 w-full font-[500]"
            onClick={
              user && course?.studentsEnrolled.includes(user?._id)
                ? () => navigate("/dashboard/enrolled-courses")
                : handleBuyCourse
            }
          >
            {user && course?.studentsEnrolled.includes(user?._id)
              ? "Go to Course "
              : "Buy Now"}
          </button>

          {!course?.studentsEnrolled.includes(user?._id) && (
            <button
              onClick={handleAddToCart}
              className="bg-yellow-50  text-richblack-900 rounded-md text-center py-2 w-full font-[500]"
            >
              Add to Cart
            </button>
          )}
        </div>

        <div className='px-6 mt-4'>
          <p className='text-richblack-300 text-center'>30-Day Money-Back Guarantee</p>
          <p className='text-richblack-50'>This Course Includes:</p>
          <div className="flex flex-col text-caribbeangreen-400">
            {course?.instructions?.map((item, index) => (
              <p key={index} className="flex  pl-2">
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div className='flex justify-center py-6 px-6 '>
          <button
            className="text-center w-full px-2 py-1 rounded-md  text-yellow-50 hover:border "
            onClick={handleShare}
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsCard
