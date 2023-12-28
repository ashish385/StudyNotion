import React from "react";
import HighlightText from "../components/core/HomePage/HighlightText";
import BannarImage1 from "../assets/Images/aboutus1.webp";
import BannarImage2 from "../assets/Images/aboutus2.webp";
import BannarImage3 from "../assets/Images/aboutus3.webp";
import BannerImage4 from "../assets/Images/FoundingStory.png" 
import Quote from "../components/core/AboutPage/Quote";
import Stats from "../components/core/AboutPage/Stats";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import Footer from "../components/common/Footer"


const About = () => {
  return (
    <>
      {/* section-1 */}
      <section className="md:pt-[100px] w-full bg-richblack-800 mx-auto ">
        <div className=" text-white   w-full flex flex-col items-center justify-center mx-auto  ">
          <header className="w-full lg:w-[70%]">
            <div className="text-center text-3xl md:text-4xl font-semibold mt-7">
              Driving Innovation in Online Education for a
              <HighlightText text={"Brighter Future"} />
            </div>
            <p className="mt-4 px-8 mx:px-4 text-start md:text-center text-sm  md:text-lg  text-richblack-300">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="lg:h-[300px] h-[100px]"></div>
          <div className="relative w-full lg:w-full mx-auto px-4 md:pl-8 flex justify-center">
            <div className="lg:absolute w-full lg:w-[90%] lg:bottom-[-50px] lg:translate-y-[50px] flex flex-col lg:flex-row  justify-center items-center gap-5">
              <img src={BannarImage1} alt="BannarImage1" />
              <img src={BannarImage2} alt="BannarImage2" />
              <img src={BannarImage3} alt="BannarImage3" />
            </div>
          </div>
        </div>
      </section>

      {/* section-2 */}
      <section className="lg:py-[70px] w-full flex flex-col justify-center items-center ">
        <div className="h-[100px] lg:h-[200px] text-white"></div>
        <div className=" mx-auto text-start  px-4 md:px-11 ">
          <Quote />
        </div>
        <div className="h-[100px] lg:h-[100px] text-white"></div>
      </section>

      {/* section-3 */}
      <section className="border-t border-t-richblack-400">
        <div className="max-w-11/12 w-full mx-auto flex flex-col  text-white">
          {/* parent-div -1 */}
          <div className="w-full flex flex-col md:flex-row justify-between px-5 py-16">
            <div className="w-full lg:w-[40%] text-start flex flex-col gap-3">
              <h1 className="text-3xl">
                {" "}
                <HighlightText
                  text={"Our Founding Story"}
                  textColor={"text-gradient-4"}
                />
              </h1>
              <p className="text-[14px] leading-snug text-richblack-400">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-[14px] leading-snug text-richblack-400">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>
            <div className="w-full lg:w-[45%] mt-10 lg:mt-0">
              <img src={BannerImage4} alt="" />
            </div>
          </div>
          {/* parent div-2 */}
          <div className="w-full flex flex-col md:flex-row justify-between px-5 py-8">
            <div className=" w-full lg:w-[40%] text-start flex flex-col gap-3 ">
              <h1 className="text-3xl">
                <HighlightText
                  text={"Our Vision"}
                  textColor={"yellowGradient"}
                />
              </h1>
              <p className="text-[14px] leading-snug text-richblack-400">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="w-full lg:w-[45%] text-start flex flex-col gap-3 mt-10 lg:mt-0">
              <h1 className="text-3xl">
                <HighlightText
                  text={"Our Mission"}
                  textColor={"blueGradient"}
                />
              </h1>
              <p className="text-[14px] leading-snug text-richblack-400">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section-4 */}
      <section className=" bg-richblack-800">
        <Stats />
      </section>

      {/* section-5 */}
      <section>
        <div className="h-[50px] lg:h-[100px]"></div>
        <LearningGrid />
      </section>

      {/* form section */}
      <section className="mx-auto text-white mb-[50px]">
        <ContactFormSection />
      </section>

      {/* review section  */}
      <section>
        <div className="text-3xl w-full text-center text-richblack-5 my-[50px]">
          Reviews from other learns
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
