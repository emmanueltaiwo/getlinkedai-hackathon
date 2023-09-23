import React, { useReducer, useState, useEffect } from "react";
import {
  registrationReducer,
  initialState,
  actionTypes,
} from "../../reducers/RegistrationReducer";
import RegistrationConfirmationModal from "./RegistrationConfirmationModal";
import axios from "axios";

const RegistrationForm = () => {
  const [categories, setCategories] = useState([]);
  const [state, dispatch] = useReducer(registrationReducer, initialState);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(
          "https://backend.getlinked.ai/hackathon/categories-list",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          setCategories(response.data);
        } else {
          console.error("Failed to fetch categories");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchCategories();
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const formData = {
      email: state.email,
      phone_number: state.phone_number,
      team_name: state.team_name,
      group_size: state.group_size,
      project_topic: state.project_topic,
      category: state.category,
      privacy_poclicy_accepted: state.privacy_policy_accepted,
    };
    console.log(JSON.stringify(formData));

    try {
      const response = await axios.post(
        "https://backend.getlinked.ai/hackathon/registration",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        dispatch({ type: actionTypes.RESET_FORM });
        localStorage.setItem("isRegistrationComplete", "true");
        console.log(JSON.stringify(formData));
      } else {
        console.error("Failed to submit the form");
        console.log(JSON.stringify(formData));
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    dispatch({ type: actionTypes.SET_FIELD, field: name, value });
  };

  const handleAgreementToggle = () => {
    dispatch({ type: actionTypes.TOGGLE_AGREEMENT });
  };

  return (
    <form className="flex mt-3 flex-col gap-5" onSubmit={handleSubmit}>
      <RegistrationConfirmationModal />
      <div className="flex flex-col lg:flex-row gap-3 justify-between w-full">
        {/* Team Name */}
        <div className="flex flex-col gap-2">
          <label className="text-white text-[14px]">Team&apos;s Name</label>
          <input
            type="text"
            name="team_name"
            value={state.team_name}
            onChange={handleChange}
            className="w-full lg:w-[215px] xl:w-[263px] h-[47px] bg-transparent border-2 border-white rounded-[4px] px-4 text-white text-[14px] placeholder:text-gray-600 outline-none"
            placeholder="Enter the name of your group"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-white text-[14px]">Phone</label>
          <input
            type="number"
            name="phone_number"
            value={state.phone_number}
            onChange={handleChange}
            className="w-full lg:w-[215px] xl:w-[263px] h-[47px] bg-transparent border-2 border-white rounded-[4px] px-4 text-white text-[14px] placeholder:text-gray-600 outline-none"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 justify-between w-full">
        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-white text-[14px]">Email</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            className="w-full lg:w-[215px] xl:w-[263px] h-[47px] bg-transparent border-2 border-white rounded-[4px] px-4 text-white text-[14px] placeholder:text-gray-600 outline-none"
            placeholder="Enter your email address"
          />
        </div>

        {/* Project Topic */}
        <div className="flex flex-col gap-2">
          <label className="text-white text-[14px]">Project Topic</label>
          <input
            type="text"
            name="project_topic"
            value={state.project_topic}
            onChange={handleChange}
            className="w-full lg:w-[215px]  xl:w-[263px] h-[47px] bg-transparent border-2 border-white rounded-[4px] px-4 text-white text-[14px] placeholder:text-gray-600 outline-none"
            placeholder="What is your group project topic"
          />
        </div>
      </div>

      <div className="flex gap-3 md:flex-col lg:flex-row flex-wrap justify-between w-full">
        {/* Category */}
        <div className="flex flex-col gap-2">
          <label className="text-white text-[14px]">Category</label>
          <select
            name="category"
            value={state.category}
            onChange={handleChange}
            id="selectCategory"
            className="w-[180px] md:w-full sm:w-[300px] lg:w-[215px] xl:w-[263px] h-[47px] bg-transparent border-2 border-white rounded-[4px] px-4 text-white text-[14px] placeholder:text-gray-600 outline-none"
          >
            <option value="select">Select your category</option>
            {categories.map((category: any) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Group Size */}
        <div className="flex flex-col gap-2">
          <label className="text-white text-[14px]">Group Size</label>
          <select
            name="group_size"
            value={state.group_size}
            onChange={handleChange}
            id="selectGroupSize"
            className="w-[100px] md:w-full sm:w-[200px] lg:w-[215px] xl:w-[263px] h-[47px] bg-transparent border-2 border-white rounded-[4px] px-4 text-white text-[14px] placeholder:text-gray-600 outline-none"
          >
            <option value="select">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>

      <p className="text-[#FF26B9] text-[10px] sm:text-[12px] italic">
        Please review your registration details before submitting
      </p>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          name="privacy_policy_accepted"
          checked={state.privacy_policy_accepted}
          onChange={handleAgreementToggle}
          className="h-4 w-4 border-2 border-white rounded-sm text-[#150e2b69] appearance-none checked:bg-[#7a5ae6d2] checked:text-[#150e2b69]"
        />
        <span className="text-[12px] text-white">
          I agree with the event terms and conditions and privacy policy
        </span>
      </div>

      <button
        className="text-white w-[172px] mx-auto h-fit rounded-[4px] sm:w-full px-16 py-3"
        style={{
          background: "linear-gradient(to right, #FE34B9, #D434FE, #903AFF)",
        }}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
