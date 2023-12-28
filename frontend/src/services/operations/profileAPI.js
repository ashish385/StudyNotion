import toast from 'react-hot-toast';
import { setLoading, setUser } from '../../redux/slices/profileSlice';
import { apiConnector } from '../apiconnector';
import { profileEndpoints } from '../apis';
// import { logout } from './authAPI';

const { GET_USER_DETAILS_API, GET_USER_ENROLLED_COURSES_API,GET_INSTRUCTOR_DATA_API} = profileEndpoints;


export  function getUserDetails(token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    // let result = [];
    dispatch(setLoading(true))
    try {
        const response = await apiConnector("POST", GET_USER_DETAILS_API, token);

        console.log("User detailsI RESPONSE............", response)

      console.log(response.data.success)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      dispatch(setUser(response.data))
        
    } catch (error) {
        console.log(error.message);
      console.log("USER DETAILS ERROR............", error)
      toast.error("Could Not get data")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId);
  }
    
}

export async function getUserEnrolledCourses(token) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    console.log("BEFORE Calling BACKEND API FOR ENROLLED COURSES");
    const response = await apiConnector(
      "GET",
      GET_USER_ENROLLED_COURSES_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("AFTER Calling BACKEND API FOR ENROLLED COURSES");
    console.log(
      "GET_USER_ENROLLED_COURSES_API API RESPONSE............",
      response
    )

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response?.data.data;
  } catch (error) {
    console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error);
    toast.error("Could Not Get Enrolled Courses");
  }
  toast.dismiss(toastId);
  return result;
}

export async function getInstructorData(token) {
  console.log("Get Instructor func");
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", GET_INSTRUCTOR_DATA_API, null, {
      Authorization: `Bearer ${token}`
    })

    console.log("GET_INSTRUCTOR_DATA_API RESPONSE-----",response?.data);

     if (!response.data.success) {
       throw new Error(response.data.message);
     }
     result = response?.data.data;
  } catch (error) {
    console.log("GET INSTRUCTOR DATA API ERROR>>", error);
    toast.error("Could not get Instructor data!")
  }
  toast.dismiss(toastId);
  return result;
}
