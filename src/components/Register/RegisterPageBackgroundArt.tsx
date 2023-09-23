import React from 'react'
import Image from 'next/image'

const RegisterPageBackgroundArt = () => {
  return (
    <>
      <Image
        src="/assets/Images/purple-grad-8.png"
        width={500}
        height={836}
        alt="purple-grad-8"
        className="absolute h-full z-10 hidden lg:inline right-0 bottom-0 pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/purple-grad-7.png"
        width={650}
        height={836}
        alt="purple-grad-7"
        className="absolute  z-10 left-0 top-[-10px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/pink-star.png"
        width={26}
        height={32}
        alt="pink-star"
        className="absolute w-[11px] md:w-[21px] right-0 mr-[5rem] sm:mr-[10rem] top-[150px] md:left-0 md:ml-10 md:top-[200px] pointer-events-none select-none"
      />

      <Image
        src="/assets/Images/gray-star.png"
        width={26}
        height={32}
        alt="gray-star"
        className="absolute w-[11px] md:w-[21px]  ml-2 sm:ml-5 sm:top-[650px] top-[420px] md:left-0 md:ml-14 md:top-[700px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/pink-star.png"
        width={26}
        height={32}
        alt="pink-star"
        className="absolute w-[11px] md:w-[21px] right-0 mr-2 md:left-0  top-[780px] md:ml-[5rem] lg:ml-[30rem] xl:ml-[33rem] md:top-[1050px] lg:top-[550px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/gray-star.png"
        width={26}
        height={32}
        alt="gray-star"
        className="absolute w-[11px] hidden md:inline md:w-[21px] sm:right-0 sm:mr-[20rem] top-[50px] md:top-[125px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/bright-star.png"
        width={26}
        height={32}
        alt="bright-star"
        className="absolute w-[11px] md:w-[21px] hidden lg:inline sm:right-0 sm:mr-[15rem]  md:top-[750px] pointer-events-none select-none"
      />
    </>
  );
}

export default RegisterPageBackgroundArt