import Image from "next/image";
import React, { useState, useEffect } from "react";
import RegistrationConfirmationModal from "./RegistrationConfirmationModal";
import axios from "axios";
import { useRouter } from "next/router";

const RegistrationForm = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
email: "",
        phone_number: "",
        category: "",
        group_size: "",
        team_name: "",
        project_topic: "",
        privacy_poclicy_accepted:true,    
  });
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleCloseModal = () => {
    setShowModal(false);
  };

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


const fetchData = await fetch('https://backend.getlinked.ai/hackathon/registration', {
                   method: "POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(formData)
            })
            const response = await fetchData.json()

        console.log(response);

        if (response.id) {
setIsLoading(false);
        setShowModal(true);
        setFormData({
          email: "",
          phone_number: "",
          team_name: "",
          group_size: "",
          project_topic: "",
          category: "",
          privacy_poclicy_accepted: false,
        });
        setIsSuccess(true);
         
   
        } else {
          setIsLoading(false);
        setErrorMessage("Registration Failed, Try again");
        setIsSuccess(false);
        }
    
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAgreementToggle = () => {
    setFormData({
      ...formData,
      privacy_poclicy_accepted: !formData.privacy_poclicy_accepted,
    });
  };

  return (
    <form className="flex mt-3 flex-col gap-5" onSubmit={handleSubmit}>
      {showModal && (
        <RegistrationConfirmationModal handleCloseModal={handleCloseModal} />
      )}

      <div className="flex flex-col lg:flex-row gap-3 justify-between w-full">
        {/* Team Name */}
        <div className="flex flex-col gap-2">
          <label className="text-white text-[14px]">Team&apos;s Name</label>
          <input
            type="text"
            name="team_name"
            value={formData.team_name}
            onChange={handleChange}
            className="w-full lg:w-[215px] xl:w-[263px] h-[47px] bg-transparent border-2 border-white rounded-[4px] px-4 text-white text-[14px] placeholder:text-gray-600 outline-none"
            placeholder="Enter the name of your group"
            required
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-white text-[14px]">Phone</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full lg:w-[215px] xl:w-[263px] h-[47px] bg-transparent border-2 border-white rounded-[4px] px-4 text-white text-[14px] placeholder:text-gray-600 outline-none"
            placeholder="Enter your phone number"
            required
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
            value={formData.email}
            onChange={handleChange}
            className="w-full lg:w-[215px] xl:w-[263px] h-[47px] bg-transparent border-2 border-white rounded-[4px] px-4 text-white text-[14px] placeholder:text-gray-600 outline-none"
            placeholder="Enter your email address"
            required
          />
        </div>

        {/* Project Topic */}
        <div className="flex flex-col gap-2">
          <label className="text-white text-[14px]">Project Topic</label>
          <input
            type="text"
            name="project_topic"
            value={formData.project_topic}
            onChange={handleChange}
            className="w-full lg:w-[215px]  xl:w-[263px] h-[47px] bg-transparent border-2 border-white rounded-[4px] px-4 text-white text-[14px] placeholder:text-gray-600 outline-none"
            placeholder="What is your group project topic"
            required
          />
        </div>
      </div>

      <div className="flex gap-3 md:flex-col lg:flex-row flex-wrap justify-between w-full">
        {/* Category */}
        <div className="flex flex-col gap-2">
          <label className="text-white text-[14px]">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            id="selectCategory"
            required
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
            value={formData.group_size}
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
          name="privacy_poclicy_accepted"
          checked={formData.privacy_policy_accepted}
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
        disabled={isLoading}
      >
        Submit
      </button>
      {isLoading && (
        <p className="text-white text-[15px] font-medium text-center pb-1">
          Loading
        </p>
      )}
      {!isSuccess && (
        <p className="text-red-600 text-[15px] font-bold text-center pb-2">
          {errorMessage}
        </p>
      )}
    </form>
  );
};

export default RegistrationForm;
