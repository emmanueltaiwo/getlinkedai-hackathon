import React from "react";
import ContactForm from "./ContactForm";
import { footerSocialLinks } from "@/db/footer-data";
import Image from "next/image";

const ContactFormPanel = () => {
  return (
    <div className="xl:mr-[188px] z-20 lg:mr-[100px] xl:h-[611px] md:mr-[50px] py-10 lg:py-5 md:bg-[rgba(255,255,255,0.03)] rounded-[12px] md:shadow-md md:shadow-[rgba(0,0,0,0.25)] lg:w-[500px] xl:w-[617px] md:w-[450px] flex w-full h-fit p-3 justify-center items-center flex-col gap-5">
      <h1 className="sm:w-[400px] mx-auto w-[298px] xl:w-[400px] md:w-[350px] lg:w-[400px] text-[20px] text-[#D434FE] font-semibold">
        Questions or need assistance?
        <br /> Let us know about it!
      </h1>
      <p className="inline mx-auto md:hidden text-white text-[12px] w-[298px%] sm:w-[400px]">
        Email us below to any question related to our event
      </p>
      <ContactForm />
      <div className="flex md:hidden items-center flex-col gap-3 mt-5 pb-5">
        <span className="text-[16px] text-[#D434FE]">Share on</span>
        <ul className="flex gap-3 items-center">
          {footerSocialLinks.map((data) => (
            <a href={data.route} key={data.id}>
              <Image
                src={data.imageSrc}
                width={data.width}
                height={data.height}
                alt={data.imageSrc}
              />
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactFormPanel;
