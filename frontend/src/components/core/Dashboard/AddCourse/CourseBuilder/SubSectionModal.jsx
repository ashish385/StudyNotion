import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { createSubSection, updateSubSection } from '../../../../../services/operations/course';
import { setCourse } from '../../../../../redux/slices/courseSlice';
import {RxCross1} from "react-icons/rx"
import Upload from '../CourseInformation/UploadFile';
import IconBtn from '../../../../common/IconBtn';
import { useSelector } from 'react-redux';

const SubSectionModal = ({
    modalData,
    setModalData,
    add = false,
    view = null,
    edit = null,
}) => {

  useEffect(() => {
    console.log(modalData);
  })
    const {
        register, 
        handleSubmit, 
        setValue,
        formState: {errors},
        getValues,
    } = useForm();

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const {course} = useSelector((state) => state.course);
    const {token} = useSelector((state) => state.auth);

    useEffect(() => {
        if(view || edit) {
            setValue("lectureTitle", modalData.title);
            setValue("lectureDesc", modalData.description);
            setValue("lectureVideo", modalData.videoUrl);
        }
    });

    const isFormUpdated = () => {
        const currentValues = getValues();
        if(currentValues.lectureTitle !== modalData.title ||
            currentValues.lectureDesc !== modalData.description ||
            currentValues.lectureVideo !== modalData.videoUrl ) {
                return true;
            }
        else {
            return false;
        }

    }
    const handleEditSubSection = async () => {

        const currentValues = getValues();
        const formData = new FormData();

        formData.append("sectionId", modalData.sectionId);
        formData.append("subSectionId", modalData._id);

        if(currentValues.lectureTitle !== modalData.title) {
            formData.append("title", currentValues.lectureTitle);
        }

        if(currentValues.lectureDesc !== modalData.description) {
            formData.append("description", currentValues.lectureDesc);
        }

        if(currentValues.lectureVideo !== modalData.videoUrl) {
            formData.append("video", currentValues.lectureVideo);
        }

        setLoading(true);
        //API call
        const result  = await updateSubSection(formData, token);
        if(result) {
          //TODO: same check 
          const updatedCourseContent = course.courseContent.map((section) =>
            section._id === modalData.sectionId ? result : section
          );
          const updatedCourse = {
            ...course,
            courseContent: updatedCourseContent,
          };
            dispatch(setCourse(updatedCourse));
        }
        setModalData(null);
        setLoading(false);
    }

    const onSubmit = async (data) => {

        if(view)
            return;

        if(edit) {
            if(!isFormUpdated) {
                toast.error("No changes made to the form")
            }
            else {
                //edit krdo store me 
                handleEditSubSection();
            }
            return;
        }

        //ADD

        const formData = new FormData();
        formData.append("sectionId", modalData);
        formData.append("title", data.lectureTitle);
        formData.append("description", data.lectureDesc);
        formData.append("video", data.lectureVideo);
        setLoading(true);
      //API CALL
      console.log("sub-section-formdata",formData);
        const result = await createSubSection(formData, token);

        if(result) {
          //TODO: check for updation
          const updatedCourseContent = course.courseContent.map((section) =>
            section._id === modalData ? result : section
          );
          const updatedCourse = {
            ...course,
            courseContent: updatedCourseContent,
          };
            dispatch(setCourse(updatedCourse));
        }
        setModalData(null);
        setLoading(false);

    }


  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      {/* <div className="absolute top-0 bottom-0 left-0 right-0 bg-richblack-600 opacity-75"></div> */}
      <div className="my-10 w-11/12 max-w-[700px] rounded-lg border border-richblack-400 bg-richblack-800 px-4 py-6">
        <div className="flex justify-between text-richblack-200">
          <p>
            {view && "Viewing"} {add && "Adding"} {edit && "Editing"} Lecture
          </p>

          <button onClick={() => (!loading ? setModalData(null) : {})}>
            <RxCross1 className="hover:scale-105" />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Upload
            name="lectureVideo"
            label="Lecture Video"
            register={register}
            setValue={setValue}
            errors={errors}
            video={true}
            viewData={view ? modalData.videoUrl : null}
            editData={edit ? modalData.videoUrl : null}
          />
          <div className="mt-2 flex flex-col gap-1">
            <label className="text-richblack-300">
              Lecture Title <sup className=" text-pink-200">*</sup>
            </label>
            <input
              id="lectureTitle"
              placeholder="Enter Lecture Title"
              {...register("lectureTitle", { required: true })}
              className="w-full input-shadow"
            />
            {errors.lectureTitle && (
              <span className=" text-pink-200">Lecture Title is required</span>
            )}
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <label className="text-richblack-300">
              Lecture Description <sup className=" text-pink-200">*</sup>
            </label>
            <textarea
              id="lectureDesc"
              placeholder="Enter Lecture Description"
              {...register("lectureDesc", { required: true })}
              className="w-full min-h-[130px] input-shadow"
            />
            {errors.lectureDesc && (
              <span className=" text-pink-200">
                Lecture Description is required
              </span>
            )}
          </div>

          {!view && (
            <div className="mt-2 flex justify-end gap-1">
              <IconBtn
                active={true}
                text={loading ? "Loading..." : edit ? "Save Changes" : "Save"}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default SubSectionModal
//PAANI BREAK - 2min