import Image from "next/image";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/router";

const RegistrationConfirmationModal = ({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
}) => {
  const router = useRouter();

   useEffect(() => {
     // Prevent scrolling when the modal is open
     document.body.style.overflow = "hidden";

     // Re-enable scrolling when the modal is closed
     return () => {
       document.body.style.overflow = "auto";
     };
   }, []);




  return (
    <>
      <div
        onClick={handleCloseModal}
        className="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-20 bg-[rgba(21,14,40,0.93)]"
      />
      <section className="xl:w-[699px] absolute w-[85%] h-[80%] flex justify-center items-center flex-col gap-5 mx-auto left-0 right-0 top-0 bottom-0 z-50 rounded-[5px] my-auto xl:h-[620px] border-[1px] border-[#D434FE] shadow-sm shadow-[rgba(255,255,255,0.01)]">
        <Image
          src="/assets/Images/congratulation.png"
          width={427}
          height={321}
          alt="Confirmation Image w-[109px] md:w-[427px]"
        />
        <h1 className="mx-3 text-white text-[16px] md:text-[32px] font-[600] text-center">
          Congratulations <br /> you have successfully Registered!
        </h1>
        <p className="text-[12px] md:text-[14px] font-[600] text-center text-white">
          Yes, it was easy and you did it! <br /> check your mail box for next
          step
        </p>
        <button
          className="text-white w-[172px] mx-auto xl:w-[574px] h-fit rounded-[4px] sm:w-fit px-16 py-3"
          style={{
            background: "linear-gradient(to right, #FE34B9, #D434FE, #903AFF)",
          }}
          onClick={() => {
            handleCloseModal();
            router.push("/register");
          }}
        >
          Back
        </button>
      </section>
    </>
  );
};

export default RegistrationConfirmationModal;
