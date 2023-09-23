import React from "react";
import Image from "next/image";

const ContactPageBackgroundArt = () => {
  return (
    <>
      <Image
        src="/assets/Images/purple-grad-5.png"
        width={600}
        height={836}
        alt="purple-grad-5"
        className="absolute z-10 hidden md:inline right-0 bottom-0 pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/purple-grad-6.png"
        width={650}
        height={836}
        alt="purple-grad-6"
        className="absolute  z-10 left-0 top-[-10px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/pink-star.png"
        width={26}
        height={32}
        alt="pink-star"
        className="absolute z-20 w-[11px] md:w-[26px] left-[180px] sm:left-[270px] top-[50px] md:left-0 md:ml-[13rem] md:top-[120px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/gray-star.png"
        width={26}
        height={32}
        alt="gray-star"
        className="absolute w-[16px] md:w-[26px] top-[150px] right-0 mr-5 sm:mr-14 md:mr-[18rem] md:top-[100px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/bright-star.png"
        width={26}
        height={32}
        alt="bright-star"
        className="absolute z-20 w-[12px] md:w-[26px] top-[520px] sm:top-[500px] right-0 sm:mr-14 mr-2 md:mr-[5rem] md:top-[700px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/pink-star.png"
        width={26}
        height={32}
        alt="pink-star"
        className="absolute  md:hidden xl:inline w-[12px] md:w-[26px] left-0 ml-4 sm:ml-20 md:ml-[39rem] top-[610px] pointer-events-none select-none"
      />
    </>
  );
};

export default ContactPageBackgroundArt;
