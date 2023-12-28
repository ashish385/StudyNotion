import React, { useEffect, useState } from "react";

const RequirementField = ({
  name,
label,
  placeholder,
  register,
  errors,
  setValue,
  getValues,
}) => {
  const [requirement, setRequirement] = useState("");
  const [requirementList, setRequirementList] = useState([]);

  useEffect(() => {
    register(name, {
      required: true,
      validate: (value) => value.length > 0
    });
  });
    
  useEffect(() => {
    setValue(name, requirementList);
  });
      // [requirementList];

  const handleAddRequirement = async () => {
    if (requirement) {
      setRequirementList([...requirementList, requirement]);
      setRequirement("");
    }
  };

  const handleRemoveRequirement = async (index) => {
    const updateRequirementList = [...requirementList];
    updateRequirementList.splice(index, 1);
    setRequirementList(updateRequirementList);
  };
  return (
    <div>
      <div>
        <label htmlFor={name}>
          {label}
          <sup>*</sup>
        </label>
        <div>
          <input
            type="text"
            id={name}
            placeholder={placeholder}
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            className="w-full input-shadow mt-1"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value.trim() !== "") {
                handleAddRequirement(e.target.value.trim());
                e.target.value = "";
              }
            }}
          />
          {errors[name] && <span>{label} is required!</span>}
          <div
            onClick={handleAddRequirement}
            className="font-semibold text-yellow-50 mt-1 pl-2 cursor-pointer"
          >
            Add
          </div>
        </div>
        {requirementList.length > 0 && (
          <ul className=" text-richblack-5 bg-richblack-900 rounded-md ">
            {requirementList.map((requirement, index) => (
              <li
                key={index}
                className="flex justify-between  px-6 py-1 border-b border-b-richblack-300   text-richblack-200"
              >
                <span>{requirement}</span>
                <button
                  type="button"
                  onClick={(e) => handleRemoveRequirement(index)}
                  className="text-xs text-pure-greys-300 hover:scale-110 hover:text-pink-200 "
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RequirementField;
