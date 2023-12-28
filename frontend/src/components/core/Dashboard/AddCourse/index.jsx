import React from 'react'
import RenderSteps from './RenderSteps';

const CourseTips = [
  "Set the Course Price option or make it free.",
  "Standard size for the course thumbnail is 1024x576.",
  "Video section controls the course overview video.",
  "Course Builder is where you create & organize a course.",
  "Add Topics in the Course Builder section to create lessons, quizzes, and assignments.",
  "Information from the Additional Data section shows up on the course single page.",
  "Make Announcements to notify any important",
  "Notes to all enrolled students at once.",
];

const AddCourse = () => {
  console.log("Add Course");
  return (
    <>
      <div className="w-full text-white mx-auto flex flex-col-reverse lg:flex-row gap-5">
        <div className=" w-full lg:w-[60%]">
            <RenderSteps />
        </div>

        <div className="w-full  lg:w-[40%] flex flex-col gap-3 bg-richblack-800 h-fit py-6 px-3 rounded-lg">
          <p className='font-semibold'>⚡Course Upload Tips</p>
          <ul className="list-disc pl-6  text-richblack-100 ">
            {CourseTips.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default AddCourse
