import React from 'react'
import Footer from "../components/common/Footer";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { apiConnector } from '../services/apiconnector';
import { categories } from '../services/apis';
import { getCatalogPageData } from "../services/operations/pageAndComponentData";
import CourseSlider from '../components/core/CatalogPage/CourseSlider';
import CourseCard from '../components/core/CatalogPage/CourseCard';

const Catalog = () => {
    const { catalogName } = useParams();
    const [catalogPageData, setCatalogPageData] = useState(null);
    const [categoryId, setCategoryId] = useState("");
    const [setstartSlider, setSetstartSlider] = useState(false);
    const [courseTab, setCourseTab] = useState("allCourses");

    // fetch all category
    useEffect(() => {
        const getCategories = async () => {
            let res = [];
           try {
               res = await apiConnector("GET", categories.CATEGORIES_API);
               if (!res) {
                   throw new Error(res?.data?.message)
               }
           } catch (error) {
            console.log(error);
           }
            console.log("getCategories",res);
            // filter wala kaam space hatana
            const category_id = res?.data?.data?.filter((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName)[0]._id;
            setCategoryId(category_id);
            console.log("category-id",categoryId);
        }
        getCategories();
    })
    
    useEffect(() => {
        const getCategoryDetails = async () => {
            try {
                const res = await getCatalogPageData(categoryId);
                console.log("getCatalogPageData response ===>", res);
                setCatalogPageData(res);
                setSetstartSlider(true)
            } catch (error) {
                console.log(error);
            }
        }
        if (categoryId) {
            getCategoryDetails();
        }
    }, [categoryId])
    console.log("setCatalogPageData.name", catalogPageData?.selectedCategory?.name);
  return (
    <div className="w-full">
      <div className=" flex flex-col bg-richblack-900 ">
        <div className="w-full bg-richblack-800 mx-auto   py-10  ">
          <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-4  justify-between md:pr-12">
            <div className="flex flex-col ">
              <p className="text-richblack-300">
                {`Home / catalog / `}
                <span className="text-yellow-100">
                  {catalogPageData?.selectedCategory?.name}
                </span>
              </p>
              <p className="text-3xl text-white my-3">
                {" "}
                {catalogPageData?.selectedCategory?.name}{" "}
              </p>
              <p className="text-richblack-200">
                {" "}
                {catalogPageData?.selectedCategory?.description}
              </p>
            </div>
            {/* <div className=' '>
              <h1 className="text-md text-white">Related resources</h1>
              <ul className="list-disc pl-6  text-richblack-100 ">
                <li>Doc Python</li>
                <li>Cheatsheets</li>
                <li>Articles</li>
                <li>Community Forums</li>
                <li>Projects</li>
              </ul>
            </div> */}
          </div>
        </div>
        <div>
          {/* section-1  */}
          <section className="w-11/12 mx-auto py-10">
            <h1 className="text-white text-3xl font-semibold ">
              Courses to get you started
            </h1>
            <div className="flex gap-6 text-white pt-4 border-b pb-2">
              <p
                className={`${
                  courseTab === "allCourses"
                    ? "text-yellow-100"
                    : "text-richblack-300"
                } cursor-pointer`}
                onClick={() => setCourseTab("allCourses")}
              >
                Most Popular
              </p>
              <p
                className={`${
                  courseTab !== "allCourses"
                    ? "text-yellow-100"
                    : "text-richblack-300"
                } cursor-pointer`}
                onClick={() => setCourseTab("newCourses")}
              >
                New
              </p>
            </div>
            <div className=" my-10">
              {setstartSlider && (
                <CourseSlider
                  Courses={catalogPageData?.selectedCategory?.courses}
                />
              )}
            </div>
          </section>

          {/* section-2 */}
          <section className="w-11/12 mx-auto py-10">
            <p className="text-white text-3xl font-semibold">
              Top Course {catalogPageData?.selectedCategory?.name}
            </p>
            <div>
              {setstartSlider && (
                <CourseSlider
                  Courses={catalogPageData?.differentCategory?.courses}
                />
              )}
            </div>
          </section>

          {/* section-3 */}
          <section className="w-11/12 mx-auto py-10">
            <p className="text-white text-3xl font-semibold">
              Frequently Bought Together
            </p>
            <div className="py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {catalogPageData?.mostSellingCourses
                  ?.slice(0, 4)
                  .map((course, index) => (
                    <CourseCard
                      course={course}
                      key={index}
                      Height={" h-[250px] lg:h-[400px]"}
                    />
                  ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Catalog