import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import TimelineImage from '../../../assets/Images/TimelineImage.png'

const timeline = [
  {
    id:1,
    Logo: Logo1,
    heading: "Leadership",
    Description: "Fully committed to the success company",
    line: <div className="w-[1px] h-[42px] ml-4 bg-pure-greys-200"></div>,
  },
  {
    id:2,
    Logo: Logo2,
    heading: "Responsibility",
    Description: "Students will always be our top priority",
    line: <div className="w-[1px] h-[42px] ml-4 bg-pure-greys-200"></div>,
  },
  {
    id:3,
    Logo: Logo3,
    heading: "Flexibility",
    Description: "The ability to switch is an important skills",
    line: <div className="w-[1px] h-[42px] ml-4 bg-pure-greys-200"></div>,
  },
  {
    id:4,
    Logo: Logo4,
    heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];

const TimelineSection = () => {
  return (
    <>
      
      <div className="flex flex-col md:flex-row gap-15 items-center">
        <div className="w-full md:w-[45%]  flex flex-col  ">
          {timeline.map((element) => {
            return (
              
                <div key={element.id}>
                  <div className="flex flex-row w-full gap-3 mt-2  ">
                    <div className=" w-8 h-8  rounded-full flex items-center justify-center">
                      <img src={element.Logo} alt="" />
                    </div>
                    <div className="flex flex-col ">
                      <h2 className="font-semibold font-inter  text-[18px]">
                        {element.heading}{" "}
                      </h2>
                      <p className="text-base">{element.Description} </p>
                    </div>
                  </div>
                  <div>{element.line}</div>
                </div>
            );
          })}
        </div>
        <div className="relative flex-1  shadow-blue-200 w-full ">
          {/* <div className="absolute  w-full h-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-3xl"></div> */}
          <div className="px-5">
            <img
              src={TimelineImage}
              alt="Timeline "
              className="shadow-white object-cover h-fit  "
            />
          </div>

          <div className="absolute w-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-caribbeangreen-700 flex flex-col md:flex-row justify-between text-white uppercase md:gap-3 px-8 py-6">
            <div className="flex flex-row gap-5 items-center  ">
              <p className="text-3xl font-bold">10</p>
              <p className=" text-caribbeangreen-300">Years of Experience</p>
            </div>
            <div className="w-[1px] bg-caribbeangreen-500 "></div>
            <div className="flex flex-r gap-5 items-center pl-4 ">
              <p className="text-3xl font-bold">250</p>
              <p className=" text-caribbeangreen-300 font-thin">
                TYPES OF COURSES
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineSection;
