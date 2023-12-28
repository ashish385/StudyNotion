import React from 'react'
import HighlightText from '../HomePage/HighlightText';
import CTAButton from "../HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for ",
    hilightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnTxt: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description: "The learning process uses the namely online and offline.",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "You will get a certificate that can be used as a certification during job hunting.",
  },
  {
    order: 4,
    heading: 'Rating "Auto-grading"',
    description:
      "You will immediately get feedback during the learning process without having to wait for an answer or response from the mentor.",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Connected with over 150+ hiring partners, you will have the opportunity to find a job after graduating from our program.",
  },
];

const LearningGrid = () => {
  return (
    <>
      <div className="grid mx-auto grid-cols-1 lg:grid-cols-4 mb-10 w-11/12 bg-richblack-900   text-white">
        {LearningGridArray.map((card, index) => {
          return (
            <div
              key={index}
              className={`${index === 0 && "lg:col-span-2 bg-richblack-900"}
                       ${
                         card.order % 2 === 1
                           ? "bg-richblack-700"
                           : "bg-richblack-800"
                       }
                       ${card.order === 3 && "lg:col-start-2"}
                       justify-start flex flex-col gap-5 px-5 rounded`}
            >
              {card.order < 0 ? (
                <>
                  <div className="px-4 py-6 ">
                    <h1 className="text-3xl">
                      {card.heading}
                      <HighlightText
                        text={card.hilightText}
                        textColor={"blueGradient"}
                      />
                    </h1>
                    <p className="s text-richblack-400 pt-5 ">
                      {card.description}{" "}
                    </p>
                    <div className="w-fit mt-6">
                      <CTAButton active={true} linkto={card.BtnLink}>
                        {card.BtnTxt}
                      </CTAButton>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="  px-4 py-6">
                    <h1 className="text-xl ">{card.heading}</h1>
                    <p className="t text-richblack-400 mt-5">
                      {card.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default LearningGrid
