import toast from 'react-hot-toast';
import {  studentEndpoints } from '../apis'
import { apiConnector } from '../apiconnector';
import rzpIcon from '../../assets/Icon/Razorpay_logo.png'
import { setPaymentLoading } from '../../redux/slices/courseSlice';
import { resetCart } from '../../redux/slices/cartSlice';

const { COURSE_PAYMENT_API, COURSE_VERIFY_API, SEND_PAYMENT_SUCCESS_EMAIL_API } = studentEndpoints   

// const RAZORPAY_KEY ="rzp_test_qBnVxjV5RW2MhB";

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;

        script.onload = () => {
            resolve(true);
        }

        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script);
    })
}

export async function buyCourse(token,courses,userDetails,navigate,dispatch) {
    const toastId = toast.loading("Loading...")
    try {
        // load the script
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            toast.error("Razorpay SDK faild to load!")
            return;
        }

        // initiate the order
        const orderResponse = await apiConnector(
          "POST",
          COURSE_PAYMENT_API,
          { courses },
          {
            Authorization: `Bearer ${token}`,
          }
        );

        console.log("COURSE_PAYMENT_API RESPONSE------",orderResponse);

        if (!orderResponse?.data.success) {
            throw new Error(orderResponse?.data.message)
        }

        const options = {
          key: "rzp_test_qBnVxjV5RW2MhB",
          currency: orderResponse?.data.message.currency,
          amount: `${orderResponse?.data?.message.amount}`,
          order_id: orderResponse?.data?.message.id,
          name: "StudyNotion",
          description: "Thankyou for the purchasing the course!",
          image: rzpIcon,
          prefill: {
            name: `${userDetails.firstNmae}`,
            email: `${userDetails.email}`,
          },
          handler: function (response) {
            // send successfull wala mail
            sendPaymentSuccessEmail(
              response,
              orderResponse.data.message.amount,
              token
            );
            let bodyData = {
              ...response,
              courses: courses,
            };

            // verify payment
            verifyPayment(bodyData, token, navigate, dispatch);
          },
        };

        const paymentobject = new window.Razorpay(options);
        paymentobject.open();
        paymentobject.on("paytem failed", function (response) {
            toast.error("oops, payment failed!");
            console.log(response.error);
        })
    } catch (error) {
        console.log("PAYMENT_API_ERROR", error);
        toast.error(error.message)
    }
    toast.dismiss(toastId);
}

async function sendPaymentSuccessEmail(response, amount, token) {

    try {
        await apiConnector(
          "POST",
          SEND_PAYMENT_SUCCESS_EMAIL_API,
          {
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            amount,
          },
          {
            Authorization: `Bearer ${token}`,
          }
        );
    } catch (error) {
        console.log("PAYMENT_SUCCESS_EMAIL_ERROR",error);
    }
}

async function verifyPayment(bodyData,token,navigate,dispatch) {
    const toastId = toast.loading("Verifying Payment....");
    console.log("bodyData",bodyData);
    dispatch(setPaymentLoading(true));
    try {
      const res = await apiConnector("POST", COURSE_VERIFY_API, bodyData, {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      });

        console.log("COURSE_VERIFY_API RESPONSE -----",res);
        if (!res.data.success)
            throw new Error(res.data.message);

        toast.success("payment successfully, now you are added to the course");
        navigate("/dashboard/enrolled-courses");
        dispatch(resetCart());
    } catch (error) {
        console.log("COURSE_VERIFY_API ERROR ---", error);
        toast.error("Could not verify payment");
    }
    toast.dismiss(toastId);
    dispatch(setPaymentLoading(false));
}