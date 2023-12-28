import React from 'react'
import Instructor  from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText';
import { FaArrowRight } from 'react-icons/fa';
import CTAButton from "./Button"

const InstructorSection = () => {
  return (
    <>
      <div className="  flex flex-col-reverse md:flex-row   justify-center  items-center gap-20">
        <div className=" w-full md:w-[50%] px-6 py-6  ">
          <img src={Instructor} alt="Instructor" className=" shadow-white" />
        </div>
        <div className=" w-full md:w-[50%] flex flex-col gap-3">
          <div className="text-4xl font-semibold">
            Become an <br /> <HighlightText text={"instructor"} />
          </div>
          <p className="font-medium text-[16px] w-full md:w-[80%] text-richblack-300 ">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          <div className="flex justify-start mt-6">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex gap-3  items-center w-fit">
                Start Teaching Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default InstructorSection
