import React, { useState } from 'react';
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from './HighlightText';
import CourseCard from './CourseCard';

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"
]

const ExploreMore = () => {

    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0]);
    console.log("hm",HomePageExplore);
    console.log(currentCard);

  const setMyCards = (value) => {
      console.log("value",value);
        setCurrentTab(value);
        console.log(currentTab);
        const result = HomePageExplore.filter((course) => {
            return course.tag === value;
        });
        console.log("result", result);
        setCourses(result[0].courses);
        console.log("courses", courses);
        setCurrentCard(result[0].courses[0].heading)
        console.log("currentCard", currentCard);
    };
  return (
    <>
      <div className="text-2xl md:text-4xl font-semibold text-start md:text-center">
        Unlock the <HighlightText text={"Power of Code"} />
      </div>
      <p className="text-center text-richblack-300 text-lg font-semibold mt-3">
        Learn to Build Anything You Can Imagine
      </p>

      <div className="flex flex-row mt-5 rounded-full shadow shadow-richblack-500 gap-1   bg-richblack-800 mb-8  ">
        {tabsName.map((element, index) => {
          return (
            <div
              className={`text-[16px] flex flex-row items-center 
                           ${
                             currentTab === element
                               ? "bg-richblack-900 text-richblack-5 font-medium"
                               : "text-richblack-200 "
                           } rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-2 py-2 `}
              key={index}
              onClick={() => setMyCards(element)}
            >
              {element}
            </div>
          );
        })}
      </div>

      <div className="hidden lg:block lg:h-[200px]"></div>

      <div className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
        {courses.map((ele, index) => {
          return (
            <CourseCard
              key={index}
              cardData={ele}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </>
  );
}

export default ExploreMore
