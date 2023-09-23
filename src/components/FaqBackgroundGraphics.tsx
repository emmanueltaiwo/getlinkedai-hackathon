import React from "react";
import Image from "next/image";

export const FaqBackgroundGraphics = () => {
  return (
    <>
      <Image
        src="/assets/Images/purple-grad-4.png"
        width={567}
        height={948}
        alt="purple-grad-4"
        className="absolute right-0 sm:top-[2800px] top-[3000px] lg:top-[2250px] pointer-events-none select-none"
      />
      
      <Image
        src="/assets/Images/pink-star.png"
        width={30}
        height={36}
        alt="pink-star"
        className="absolute lg:left-[30px] sm:mr-[350px] md:mr-[600px] mr-[260px] w-[18px] lg:mx-0  md:w-[30px] lg:mb-[650px] xl:m-0 xl:left-[170px] xl:top-[2800px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/pink-star.png"
        width={30}
        height={36}
        alt="pink-star"
        className="absolute xl:left-[1020px] lg:left-[850px] w-[10px] sm:mt-[700px] mt-[800px] ml-[90px] lg:mt-0 lg:mx-0 xl:m-0 md:mt-[700px] md:ml-[90px] md:w-[30px] lg:mb-[600px] xl:top-[2850px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/pink-star.png"
        width={30}
        height={36}
        alt="pink-star"
        className="absolute xl:left-[840px] lg:left-[650px] mt-[950px] sm:mt-[850px] mr-[200px] xl:m-0 lg:mt-0 lg:mx-0 md:mt-[870px] md:mr-[300px] w-[10px] md:w-[30px] lg:mb-[300px] xl:top-[3000px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/gray-star.png"
        width={30}
        height={36}
        alt="gray-star"
        className="absolute xl:left-[780px] lg:left-[600px] mt-[1000px] sm:mt-[900px] xl:m-0 mr-[300px] lg:mt-0 lg:mx-0 md:mt-[950px] md:mr-[400px] w-[10px] md:w-[30px] xl:top-[3150px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/bright-star.png"
        width={30}
        height={36}
        alt="bright-star"
        className="absolute xl:left-[1180px] w-[10px] xl:m-0 md:mt-[1270px] mt-[1220px] sm:mt-[1080px] lg:mx-0 ml-[200px] md:ml-[300px] md:w-[30px] lg:right-0 lg:mr-[100px] lg:mt-[700px] xl:top-[3450px] pointer-events-none select-none"
      />
    </>
  );
};
