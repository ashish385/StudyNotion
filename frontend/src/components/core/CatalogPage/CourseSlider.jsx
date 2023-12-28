import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import CourseCard from './CourseCard';


const CourseSlider = ({ Courses }) => {
    // console.log("coursessss",Courses);
    return (
      <div className="text-white">
        <div>
          {Courses ? (
            // <div></div>
            <Swiper
              slidesPerView={1}
              loop={true}
              spaceBetween={50}
              pagination={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              navigation={false}
              breakpoints={{
                  1024: { slidesPerView: 3 },
                  750:{slidesPerView:2}
              }}
            >
              {Courses.map((course, index) => (
                <SwiperSlide key={index}>
                  <CourseCard course={course} Height={"h-[250px]"} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className='py-10 text-center text-richblack-300 bg-richblack-800 mt-2 rounded-md'>No Course found</div>
          )}
        </div>
      </div>
    );
};

export default CourseSlider