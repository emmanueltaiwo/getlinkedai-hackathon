import React from 'react'
import Image from 'next/image';

const RulesAndGuidelines = () => {
  return (
    <section className="w-full flex flex-col-reverse lg:flex-row justify-between items-center h-full py-10 lg:h-[75vh] border-b-[0.2px] border-gray-600">
      <Image
        src="/assets/Images/purple-grad-2.png"
        width={1037}
        height={948}
        alt="purple-grad-2"
        className="absolute left-[0px] mb-[25rem] xl:mb-0 xl:top-[1050px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/purple-grad-12.png"
        width={437}
        height={948}
        alt="purple-grad-2"
        className="absolute right-0 mt-[25rem] lg:mt-0 xl:top-[1600px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/bright-star.png"
        width={26}
        height={32}
        alt="bright-star"
        className="absolute xl:left-[750px] mb-[400px] w-[10px] sm:w-[26px] left-[50px] sm:mb-[350px] sm:left-[100px] lg:left-[600px] md:left-[700px] md:mb-[200px] xl:top-[1770px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/gray-star.png"
        width={26}
        height={32}
        alt="gray-star"
        className="absolute xl:left-[441px]  w-[10px] sm:w-[26px] right-0 mr-5 sm:mr-0 mb-[150px] sm:mb-[200px] sm:left-[600px] md:left-[100px] md:mb-[700px] lg:left-[400px] lg:top-[1450px] xl:top-[1510px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/bright-star.png"
        width={26}
        height={32}
        alt="bright-star"
        className="absolute md:hidden xl:left-[750px] mt-auto mb-[-10px] w-[10px] sm:w-[26px] left-[150px] sm:mb-[350px] sm:left-[100px] lg:left-[600px] md:left-[700px] md:mb-[200px] xl:top-[1770px] pointer-events-none select-none"
      />
      <div className="flex z-20 flex-col mt-3 md:mt-0 gap-2 md:gap-5 lg:ml-[90px] xl:ml-[181px]">
        <h1 className="text-[20px] md:text-[32px] text-center mx-auto lg:text-left lg:mx-0 w-[50%] md:w-full lg:w-[170px] font-bold text-white">
          Rules and <span className="text-[#D434FE]">Guidelines</span>{" "}
        </h1>
        <p className="text-[13px] md:text-[14px] text-center mx-auto lg:text-left lg:mx-0 leading-[27.5px] md:w-[80%] text-white w-[80%] lg:w-[527px]">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding genius,
          a design maverick, or a concept wizard, you&apos;ll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div className="xl:mr-[38px] lg:mr-[19px] z-20 mx-auto">
        <Image
          src="/assets/Images/rules-hero.png"
          width={640}
          height={664}
          alt="rules-hero"
          className="pointer-events-none mx-auto w-[294px] md:w-[640px] select-none"
        />
      </div>
    </section>
  );
}

export default RulesAndGuidelines