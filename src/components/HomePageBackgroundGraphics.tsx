import React from "react";
import Image from "next/image";

const HomePageBackgroundGraphics = () => {
  return (
    <>
      <Image
        src="/assets/Images/purple-grad-1.png"
        width={850}
        height={836}
        alt="bright-star"
        className="absolute hidden lg:inline left-[50px] top-0 pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/purple-grad-9.png"
        width={850}
        height={836}
        alt="bright-star"
        className="absolute right-0 top-[5px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/bright-star.png"
        width={26}
        height={32}
        alt="bright-star"
        className="absolute w-[10px] left-[26%] mt-[16%] md:mt-0 md:w-[26px]  md:left-[200px] md:top-[170px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/gray-star.png"
        width={26}
        height={32}
        alt="bright-star"
        className="absolute w-[6px] right-0 mr-[10%] mt-[20%] md:mt-0 md:mr-0 md:w-[26px] md:left-[740px] lg:left-[830px] md:top-[200px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/gray-star.png"
        width={26}
        height={32}
        alt="bright-star"
        className="absolute mr-[10%] mt-[75%] md:mt-0 md:mr-0 md:left-0 right-0 w-[6px] md:w-[26px] md:ml-[4rem] md:top-[600px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/creative.png"
        width={53}
        height={73}
        alt="creative"
        className="absolute md:w-[3%] w-[18px] sm:w-[5%] sm:mt-[11.5rem] right-0 mt-[10rem] sm:mr-[23%] mr-[4.5rem] md:left-0 lg:w-[53px] lg:ml-[36em] md:ml-[68vw] md:mt-[10em] lg:mt-[12.5em] xl:ml-[42em] top-0 xl:mt-[11.5em] pointer-events-none select-none"
      />

      <h2 className="absolute hidden md:inline mt-5 md:right-0 md:mr-14 text-white md:text-[20px] lg:text-[25px] xl:text-[30px] font-bold italic">
        Igniting a Revolution in HR Innovation
      </h2>
      <Image
        src="/assets/Images/curve.png"
        width={220}
        height={11.04}
        alt="curve"
        className="absolute mt-[3em] sm:mt-[6.5vw] md:mt-0 inline w-[7rem] sm:w-[9rem] md:w-[10rem] lg:w-[220px] right-0 sm:mr-[10em] mr-5 md:mr-14 md:top-[160px] lg:top-[165px] pointer-events-none select-none"
      />
      <h2 className="md:hidden mt-5 md:right-0 md:mr-14 text-center text-white text-[16px] md:text-[20px] lg:text-[25px] xl:text-[30px] font-bold italic">
        Igniting a Revolution in HR Innovation
      </h2>
    </>
  );
};

export default HomePageBackgroundGraphics;
