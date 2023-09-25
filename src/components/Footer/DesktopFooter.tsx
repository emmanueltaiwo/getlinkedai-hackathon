import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinksData, footerSocialLinks } from "@/db/footer-data";

const DesktopFooter = () => {
  return (
    <div className="hidden md:flex">
      <section className="xl:w-[1086px] lg:w-[850px] md:w-[700px] min-h-[201px] mx-auto text-white flex justify-between">
        <div className="flex h-[201px] flex-col gap-5">
          <Image
            src="/assets/Images/getlinked.svg"
            width={143}
            height={37}
            alt="getlinked logo"
          />
          <p className="xl:w-[408px] lg:w-[300px] md:w-[230px] h-[63ox] text-[12px]">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div className="flex gap-3 mt-auto text-[12px]">
            <Link href="/">Terms of Use</Link>
            <div className="bg-[#D434FE] h-[17px] w-[2px]" />
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 h-[201px]">
          <h3 className="text-[14px] text-[#D434FE] font-semibold">
            Useful Links
          </h3>
          <ul className="flex flex-col gap-5">
            {footerLinksData.map((data) => (
              <Link href={data.route} className="text-[12px]" key={data.id}>
                {data.title}
              </Link>
            ))}
          </ul>

          <div className="flex items-center gap-3 mt-auto text-[12px]">
            <p className="text-[12px] text-[#D434FE]">Follow Us</p>
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
        <div className="flex flex-col gap-5 h-[201px]">
          <h3 className="text-[14px] text-[#D434FE] font-semibold">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-5">
            <a href="" className="text-[12px] flex gap-3 items-center">
              <Image
                src="/assets/Images/phone.png"
                width={12}
                height={12}
                alt="phone icon"
              />
              +234 6707653444
            </a>
            <a href="" className="text-[12px] flex gap-3 items-start">
              <Image
                src="/assets/Images/location.png"
                width={12}
                height={12}
                alt="location icon"
              />
              <span className="w-[86px] h-[57px]">
                27,Alara Street Yaba 100012 Lagos State
              </span>
            </a>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DesktopFooter;
