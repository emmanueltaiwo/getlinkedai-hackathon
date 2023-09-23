import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    phone_number: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const baseUrl = "https://backend.getlinked.ai";
    const contactEndpoint = `${baseUrl}/hackathon/contact-form`;

    try {
      setIsLoading(true);

      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send all form data
      });

      if (response.status === 201) {
        setIsLoading(false);
        console.log(JSON.stringify(formData));
        setSuccessMessage("Form Submitted Successfully");
        setFormData({
          first_name: "",
          phone_number: "",
          email: "",
          message: "",
        });

        setIsSuccess(true);
      } else {
        setErrorMessage("Submission Failed, Try again");

        setIsSuccess(false);
      }
    } catch (error) {
      console.log("Catch some errors", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:mt-10 xl:mt-0 flex flex-col gap-5 sm:w-[400px] w-[90%] md:w-[350px] lg:w-[400px]"
    >
      <input
        type="text"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        className="h-[47px] w-[298px] sm:w-[400px] mx-auto  md:w-[350px] xl:w-[437px] bg-[rgba(255,255,255,0.03)] border-2 border-white shadow-sm shadow-[rgba(0,0,0,0.25)] rounded-[4px] px-5 text-[16px] text-white placeholder:text-white placeholder:text-[16px] outline-none"
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="phone_number"
        value={formData.phone_number}
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
        className="text-white mx-auto sm:mt-5 rounded-[4px] w-[172px] h-[53px] py-3 xl:mt-2 md:mt-10"
        style={{
          background: "linear-gradient(to right, #FE34B9, #D434FE, #903AFF)",
        }}
        type="submit"
        disabled={isLoading}
      >
        Submit
      </button>
      {isLoading && (
        <p className="text-white text-[15px] font-medium text-center pb-3">
          Loading
        </p>
      )}
      {isSuccess ? (
        <p className="text-green-500 text-[15px] font-bold text-center pb-3">
          {successMessage}
        </p>
      ) : (
        <p className="text-red-600 text-[15px] font-bold text-center pb-3">
          {errorMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
