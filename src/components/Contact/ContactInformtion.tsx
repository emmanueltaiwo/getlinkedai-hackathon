import React from "react";
import { footerSocialLinks } from "@/db/footer-data";
import Image from "next/image";

const ContactInformation = () => {
  return (
    <div className="xl:ml-[188px] z-20 hidden md:block lg:ml-[100px] md:ml-[50px]">
      <h2 className="text-[32px] font-semibold text-[#D434FE]">Get in touch</h2>
      <ul className="mt-10 flex flex-col gap-10">
        <li className="xl:w-[96px] text-[16px] text-white">
          Contact Information
        </li>
        <li className="xl:w-[115px] md:w-[115px] text-[16px] text-white">
          27,Alara Street Yaba 100012 Lagos State
        </li>
        <li className="text-white text-[16px]">Call Us : 07067981819</li>
        <li className="lg:w-[266px] md:w-[200px] text-[16px] text-white">
          we are open from Monday-Friday 08:00am - 05:00pm
        </li>

        <div className="flex flex-col gap-3 mt-5">
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
      </ul>
    </div>
  );
};

export default ContactInformation;
