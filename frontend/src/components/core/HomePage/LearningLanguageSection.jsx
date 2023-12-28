import React from 'react'
import HighlightText from './HighlightText';
import KnowYourProgress from '../../../assets/Images/Know_your_progress.png'
import CompareWithOther from '../../../assets/Images/Compare_with_others.png';
import PlanYourLession from '../../../assets/Images/Plan_your_lessons.png';
import CTAButton from "./Button";

const LearningLanguageSection = () => {
  return (
    <div>
      <div className="mt-[150px]"></div>
      <div className="flex flex-col gap-5">
        <div className="text-3xl md:text-4xl font-semibold text-start md:text-center">
          Your swiss knife for
          <HighlightText text={"learning any language"} />
        </div>
        <div className="text-start md:text-center text-richblack-300 mx-auto text-base w-full md:w-[72%]">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-5">
          <img
            src={KnowYourProgress}
            alt="KnowYourProgress"
            className="object-cover  md:-mr-32 "
          />
          <img
            src={CompareWithOther}
            alt="CompareWithOther"
            className="object-cover -mt-12 md:mt-0 "
          />
          <img
            src={PlanYourLession}
            alt="PlanYourLession"
            className="object-cover -mt-20 md:-ml-36"
          />
        </div>
        <div className="flex justify-center">
          <CTAButton active={true} linkto={"/signup"}>
            Lean More
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

export default LearningLanguageSection
