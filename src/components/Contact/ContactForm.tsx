import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log(JSON.stringify(formData));

    try {
      const response = await axios.post(
        "https://backend.getlinked.ai/hackathon/contact-form",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit the form");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:mt-10 flex flex-col gap-5 sm:w-[400px] w-[90%] md:w-[350px] lg:w-[400px]"
    >
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className="h-[47px] w-[298px] sm:w-[400px] mx-auto  md:w-[350px] xl:w-[437px] bg-[rgba(255,255,255,0.03)] border-2 border-white shadow-sm shadow-[rgba(0,0,0,0.25)] rounded-[4px] px-5 text-[16px] text-white placeholder:text-white placeholder:text-[16px] outline-none"
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="h-[47px] w-[298px] sm:w-[400px] mx-auto md:w-[350px] xl:w-[437px] bg-[rgba(255,255,255,0.03)] border-2 border-white shadow-sm shadow-[rgba(0,0,0,0.25)] rounded-[4px] px-5 text-[16px] text-white placeholder:text-white placeholder:text-[16px] outline-none"
        placeholder="Phone Number"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="h-[47px] w-[298px] sm:w-[400px] mx-auto md:w-[350px] xl:w-[437px] border-2 border-white bg-[rgba(255,255,255,0.03)] shadow-sm shadow-[rgba(0,0,0,0.25)] rounded-[4px] px-5 text-[16px] text-white placeholder:text-white placeholder:text-[16px] outline-none"
        placeholder="Mail"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="h-[160px] md:h-[119px] w-[298px] mx-auto sm:w-[400px] md:w-[350px] xl:w-[437px] border-2 border-white bg-[rgba(255,255,255,0.03)] shadow-sm shadow-[rgba(0,0,0,0.25)] rounded-[4px] px-5 text-[16px] text-white placeholder:text-white placeholder:text-[16px] outline-none pt-5"
        placeholder="Message"
        required
      ></textarea>
      <button
        className="text-white mx-auto sm:mt-5 rounded-[4px] w-[172px] h-[53px] py-3 md:mt-10"
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

export default ContactForm;
