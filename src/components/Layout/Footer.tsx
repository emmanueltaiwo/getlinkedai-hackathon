import React from "react";
import Image from "next/image";
import DesktopFooter from "../Footer/DesktopFooter";
import MobileFooter from "../Footer/MobileFooter";

const Footer = () => {
  return (
    <footer className="w-full h-fit py-20 md:h-[393px] bg-[#100B20] absolute mt-auto flex flex-col md:gap-16 justify-center">
      <Image
        src="/assets/Images/bright-star.png"
        width={15}
        height={18}
        alt="bright-star"
        className="absolute w-[9px] h-[10px] md:w-[15px] md:h-[18px] left-[20px] top-[160px] sm:top-[140px] md:left-[20px] lg:left-[50px] xl:left-[80px] md:top-[90px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/pink-star.png"
        width={15}
        height={18}
        alt="pink-star"
        className="absolute w-[7px] h-[8px] md:w-[15px] md:h-[18px] left-[170px] top-[700px] sm:top-[680px] md:left-[450px] md:top-[290px] lg:left-[700px] lg:top-[290px] xl:top-[275px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/gray-star.png"
        width={15}
        height={18}
        alt="gray-star"
        className="absolute left-[300px] top-[350px] md:left-[580px] md:top-[50px] lg:left-[780px] xl:left-[1000px] lg:top-[90px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/bright-star.png"
        width={15}
        height={18}
        alt="bright-star"
        className="absolute left-[300px] w-[7px] h-[8px] md:w-[15px] md:h-[18px] sm:left-[400px] top-[620px] sm:top-[600px] md:left-[750px] lg:left-[1000px] xl:left-[1240px] md:top-[220px] pointer-events-none select-none"
      />

      <DesktopFooter />
      <MobileFooter />

      <p className="text-[12px] text-white text-center">
        All rights reserved. &copy; getlinked Ltd.
      </p>
    </footer>
  );
};

export default Footer;
