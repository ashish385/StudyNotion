import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import { Link } from 'react-router-dom'
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button';
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import Footer from "../components/common/Footer";
import ReviewSlider from '../components/common/ReviewSlider';

const Home = () => {
  return (
    <>
      {/* Section - 1 */}
      <div className="relative mx-auto w-11/12 flex flex-col items-center text-white justify-between">
        <Link to={"/signup"}>
          <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
            <div className="flex flex-row items-center gap-3 rounded-full px-10 py-[5px] group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-2xl md:text-4xl font-semibold mt-7">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className="mt-4 w-[90%] text-start md:text-center text-sm  md:text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-row gap-3 mt-4">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className="mx-3 my-12 shadow-blue-200">
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* code section-1 */}
        <div>
          <CodeBlocks
            position={"flex-col md:flex-row"}
            heading={
              <div className="text-start text-3xl font-semibold mt-7">
                Unlock your
                <HighlightText text={"coding potential"} />
                with our online course
              </div>
            }
            subheading={
              "Our course design and taught by experts who have years of experience in coding and passoniate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
            <html>
            <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Ed-tech  || online coding school </title>
            </head>
            <body>
            <h1>Hello Friends<h1/>
            </body>
            </html>`}
            codeColor={"text-yellow-25"}
          />
        </div>
        {/* code section-2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-start text-3xl font-semibold mt-7">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, gave it a try Our hands-on learning enviroment means you be writing real cods from your very first lesson."
            }
            ctabtn1={{
              btnText: "Try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
            <html>
            <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Ed-tech  || online coding school </title>
            </head>
            <body>
            <h1>Hello Friends<h1/>
            </body>
            </html>`}
            codeColor={"text-yellow-25"}
          />
        </div>

        <ExploreMore />
      </div>

      {/* Section - 2 */}
      <div className="m bg-pure-greys-5 text-richblack-700">
        <div className="homepage-bg h-[333px]">
          <div className="w-11/12 max-w-maxContent flex flex-col justify-between items-center gap-5 mx-auto">
            <div className="h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex gap-3 items-center">
                  Explore Full catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-7 pb-12">
          <div className="flex flex-col md:flex-row gap-5 mb-10 mt-[110px]">
            <div className="text-2xl md:text-4xl font-semibold w-full md:w-[45%]">
              Get the Skills you need for a
              <HighlightText text={"Job that is in demand"} />
            </div>
            <div className="flex flex-col gap-10 w-full md:w-[40%] items-start">
              <p className="text-sm text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </p>
              <CTAButton active={true} linkto={"/signup"}>
                Learn More
              </CTAButton>
            </div>
          </div>

          <TimelineSection />

          <LearningLanguageSection />
        </div>
      </div>

      {/* Section - 3 */}
      <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-8 first-letter: bg-richblack-900 text-white pt-8 mx-auto">
        <InstructorSection />
        {/* Reviws from Other Learner */}
      </div>
      <div className='w-11/12 mx-auto'>
        <h1 className="text-center text-4xl font-semibold mt-8 text-white">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home
