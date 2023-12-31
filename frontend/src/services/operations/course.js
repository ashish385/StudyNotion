import toast from 'react-hot-toast';
import { courseEndpoints } from '../apis';
import { apiConnector } from '../apiconnector';
 

const { COURSE_DETAILS_API,
  COURSE_CATEGORIES_API,
  GET_ALL_COURSE_API,
  CREATE_COURSE_API,
  EDIT_COURSE_API,
  CREATE_SECTION_API,
  CREATE_SUBSECTION_API,
  UPDATE_SECTION_API,
  UPDATE_SUBSECTION_API,
  DELETE_SECTION_API,
  DELETE_SUBSECTION_API,
  GET_ALL_INSTRUCTOR_COURSES_API,
  DELETE_COURSE_API,
  GET_FULL_COURSE_DETAILS_AUTHENTICATED,
  CREATE_RATING_API,
    LECTURE_COMPLETION_API, } = courseEndpoints;
  
    // get all course
    export const getAllCourses = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_ALL_COURSE_API)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Course Categories")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("GET_ALL_COURSE_API API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const fetchCourseDetails = async (courseId) => {
  const toastId = toast.loading("Loading...")
    // dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", COURSE_DETAILS_API, {
      courseId,
    })
    console.log("COURSE_DETAILS_API API RESPONSE............", response.data.data)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response?.data?.data
  } catch (error) {
    console.log("COURSE_DETAILS_API API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
    // dispatch(setLoading(false));
  return result
}

// fetch  categories
export async function fetchCourseCategories(token) {
    const toastId = toast.loading("Loding....")
    let result = [];
    try {
        const response = await apiConnector("GET", COURSE_CATEGORIES_API, null,
            {
            Autorization :`Bearer ${token}`
            })
        console.log("INSTRUCTOR COURESE API RESPONSE ==>", response);
        // console.log("response.data",response.data);
        if (!response?.data?.success) {
            throw new Error(response.data.message)
        }

        result = response?.data?.data;
    } catch (error) {
        console.log("INSTRUCTOR COURESE API ERROR.....", error);
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result;
}

// add course details
export const addCourseDetails = async (data,token) => {
    const toastId = toast.loading("Loading...")
    console.log("add course details token and data", token, data);
    let result = null;
    console.log("img",data.thumbnail);
    try {
        const response = await apiConnector("POST", CREATE_COURSE_API, data, {
            "Content-Type": "multipart/form-data",
            Authorization:`Bearer ${token}`
        })

        console.log("CREATE COURSE API RESPONSE............", response);

        if (!response?.data?.success) {
      throw new Error("Could Not Add Course Details")
        }
        
      toast.success("Course Details Added Successfully")
      console.log("create course data",response?.data?.data);
    result = response?.data?.data
    } catch (error) {
       console.log("CREATE COURSE API ERROR............", error)
    toast.error(error.message)  
    }
    toast.dismiss(toastId);
    return result;
}

// update course details
export const editCourseDetails = async (data, token) => {
  const toastId = toast.loading("Loding...");
  console.log("editCourse Details",data,"and",token);
    let result = [];
    try {
        const response = await apiConnector(
            "PUT",
            EDIT_COURSE_API,
            data, {
                "Content-Type": "multipart/form-data",
                Authorization:`Bearer ${token}`
            }
        )

        console.log("EDIT COURSE API RESPONSE............", response);
         if (!response?.data?.success) {
        throw new Error("Could Not Update Course Details")
        }

        toast.success("Course Details Updated Successfully")
         result = response?.data?.data
    } catch (error) {
        console.log("EDIT COURSE API ERROR............", error)
         toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result;
}

// update Section Name
export const updateSection = async (data, token) =>{
  const toastId = toast.loading("Loading...");
  console.log("call update Section!");
  console.log("data and Token",data," ",token);
    let result = [];
    try {
        const response = await apiConnector("PUT", UPDATE_SECTION_API, data, {
            "Content-Type": "multipart/form-data",
                Authorization:`Bearer ${token}`
        })
         console.log("EDIT SECTION API RESPONSE............", response);
         if (!response?.data?.success) {
        throw new Error("Could Not Update section name Details")
        }
        toast.success("Section Name Updated Successfully")
         result = response?.data?.data
    } catch (error) {
        console.log("EDIT SECTION NAME API ERROR............", error)
         toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result;
}

// create Section
export const createSection = async (data, token) => {
  console.log("call create-section");
    const toastId = toast.loading("loading....");
    let result = null;
    console.log("create section data and token", data, "and", token);
    try {
        const response = await apiConnector("POST", CREATE_SECTION_API, data, {
            "Content-Type": "multipart/form-data",
            Authorization:`Bearer ${token}`
        })
        console.log("CREATE SECTION API RESPONSE............", response);

        if (!response?.data?.success) {
      throw new Error("Could Not Add SECTION Details")
        }
        
        toast.success("SECTION Details Added Successfully")
        console.log("response?.data?.updateCourseDetails",response?.data?.data);
    result = response?.data?.data
    } catch (error) {
        console.log("SECTION COURSE API ERROR............", error)
    toast.error(error.message) 
    }
    toast.dismiss(toastId);
    return result;
}

// delete Section
export const deleteSection = async (data, token) => {
  console.log("call delete section");
   let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", DELETE_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("DELETE SECTION API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Section")
    }
      toast.success("Course Section Deleted")
      console.log("delete data",response?.data);
    result = response?.data?.data
  } catch (error) {
    console.log("DELETE SECTION API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result 
}
// delete subSection 
export const deleteSubSection = async (data, token) => {
    let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", DELETE_SUBSECTION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("DELETE SUB-SECTION API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Lecture")
    }
    toast.success("Lecture Deleted")
    result = response?.data?.data
  } catch (error) {
    console.log("DELETE SUB-SECTION API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// create subSection
export const createSubSection = async (data, token) => {
    let result = null
  const toastId = toast.loading("Loading...")
  console.log("subsection data and token",data,"token",token);
  try {
    const response = await apiConnector("POST", CREATE_SUBSECTION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("CREATE SUB-SECTION API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Add Lecture")
    }
    toast.success("Lecture Added")
    console.log("response-sub-section",response?.data);
    result = response?.data?.data
  } catch (error) {
    console.log("CREATE SUB-SECTION API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}
// update subSection
export const updateSubSection = async (data, token) => {
   let result = null
  const toastId = toast.loading("Loading...")
  console.log("update subsection function call!");
  try {
    const response = await apiConnector("PUT", UPDATE_SUBSECTION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("UPDATE SUB-SECTION API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Lecture")
    }
    toast.success("Lecture Updated")
    result = response?.data?.data
  } catch (error) {
    console.log("UPDATE SUB-SECTION API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result 
}

// fetching all courses under a specific instructor
export const fetchInstructorCourses = async (token) => {
  let result = []
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector(
      "GET",
      GET_ALL_INSTRUCTOR_COURSES_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    )
    console.log("INSTRUCTOR COURSES API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Instructor Courses")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("INSTRUCTOR COURSES API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// delete a course
export const deleteCourse = async (data, token) => {
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("DELETE", DELETE_COURSE_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("DELETE COURSE API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Course")
    }
    toast.success("Course Deleted")
  } catch (error) {
    console.log("DELETE COURSE API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
}

// get full details of a course
export const getFullDetailsOfCourse = async (courseId, token) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  console.log("getFullDetailsOfCourse functtion call");
  let result = null
  try {
    const response = await apiConnector(
      "POST",
      GET_FULL_COURSE_DETAILS_AUTHENTICATED,
      {
        courseId,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    )
    console.log("COURSE_FULL_DETAILS_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response?.data?.data
  } catch (error) {
    console.log("COURSE_FULL_DETAILS_API API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

// mark a lecture as complete
export const markLectureAsComplete = async (data, token) => {
  let result = null
  console.log("mark complete data", data)
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", LECTURE_COMPLETION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log(
      "MARK_LECTURE_AS_COMPLETE_API API RESPONSE............",
      response
    )

    if (!response.data.message) {
      throw new Error(response.data.error)
    }
    
    toast.success("Lecture Completed")
    result = true
  } catch (error) {
    console.log("MARK_LECTURE_AS_COMPLETE_API API ERROR............", error)
    toast.error(error.message)
    result = false
  }
  toast.dismiss(toastId)
  return result
}

// create a rating for course
export const createRating = async (data, token) => {
  const toastId = toast.loading("Loading...")
  let success = false
  console.log("createRating data", data);
  try {
    const response = await apiConnector("POST", CREATE_RATING_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("CREATE RATING API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Create Rating")
    }
    toast.success("Rating Created")
    success = true
  } catch (error) {
    success = false
    console.log("CREATE RATING API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return success
}