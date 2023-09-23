import React from "react";
import UserRegistrationForm from "./UserRegistrationForm";

const RegistrationFormPanel = () => {
  return (
    <div className="xl:mr-[128px] z-30 lg:mr-[100px] rounded-[12px] md:mt-10 lg:mt-0 md:bg-[rgba(255,255,255,0.03)] md:shadow-sm md:shadow-[rgba(0,0,0,0.25)] lg:w-[640px] xl:w-[740px] md:pb-10 md:h-fit md:w-[700px] flex w-full h-fit p-3 justify-center items-center gap-5">
      <div className="w-[90%] lg:w-[450px] md:w-[600px] xl:w-[550px] lg:h-[600px] flex flex-col gap-3">
        <h1 className="hidden md:inline text-[32px] font-semibold text-[#D434FE]">
          Register
        </h1>
        <p className="text-[12px] sm:text-[14px] mt-3 text-white">
          Be part of this movement!
        </p>
        <h2 className="text-[20px] sm:text-[24px] mt-2 text-white">
          CREATE YOUR ACCOUNT
        </h2>
        <UserRegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationFormPanel;
