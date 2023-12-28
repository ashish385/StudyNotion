import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteProfile } from "../../../../services/operations/settings";
import { useState } from "react";
import ConfirmationsModal from "../../../common/ConfirmationsModal";

export default function DeleteAccount() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deleteAccount, setDeleteAccount] = useState(false);

  async function handleDeleteAccount() {
    // console.log("delete account");
    try {
      dispatch(deleteProfile(token, navigate));
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  }

  return (
    <>
      <div className="my-10 flex flex-row gap-x-5 rounded-md border-[1px] border-pink-700 bg-pink-900 p-8 px-12">
        <div className="flex aspect-square h-14 w-14 items-center justify-center rounded-full bg-pink-700">
          <FiTrash2 className="text-3xl text-pink-200" />
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold text-richblack-5">
            Delete Account
          </h2>
          <div className="w-[100%] lg:w-3/5  text-pink-25">
            <p>Would you like to delete account?</p>
            <p>
              This account may contain Paid Courses. Deleting your account is
              permanent and will remove all the contain associated with it.
            </p>
          </div>
          <button
            // type="button"
            className="w-fit cursor-pointer italic text-pink-300 hover:underline"
            onClick={() => setDeleteAccount(true)}
          >
            I want to delete my account.
          </button>
        </div>
      </div>
      {/* {deleteAccount && <ConfirmationsModal modalData={deleteAccount} />} */}
      {deleteAccount && (
        <div>
          <div className="absolute inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-hidden bg-white bg-opacity-10 backdrop-blur-sm">
            <div className="absolute top-1/4 bg-richblack-800 shadow-2xl  text-richblack-5 px-4 py-4 rounded-md">
              <p className="text-2xl text-center mt-3 italic ">
                Are you want delete your Account?
              </p>
              <p className="text-richblack-300 text-center mt-2">
                You will not access in the future.
              </p>
              <div className="flex gap-3 mt-3 justify-evenly">
                <button
                  onClick={handleDeleteAccount}
                  className="bg-yellow-200 text-black px-3 py-2 rounded-lg font-semibold"
                >
                  Delete
                </button>
                <button
                  onClick={() => setDeleteAccount(false)}
                  className="b bg-richblack-500 text-richblack-100 px-3 py-2 rounded-lg font-semibold hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
