import React from "react";
import Image from "next/image";
import { faqData } from "@/db/faq-data";

const Faq = () => {
  return (
    <section
      id="faq"
      className="w-full flex flex-col lg:flex-row gap-8 justify-between items-center h-full py-10 lg:h-[100vh] border-b-[0.2px] border-gray-600"
    >
      <Image
        src="/assets/Images/purple-grad-4.png"
        width={567}
        height={948}
        alt="purple-grad-4"
        className="absolute right-0 sm:top-[2800px] top-[3000px] lg:top-[2250px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/question-mark-1.png"
        width={60}
        height={71}
        alt="purple-grad-4"
        className="absolute lg:left-[750px] xl:left-[920px] mt-[750px] lg:m-0 sm:mt-[650px] lg:top-[2820px] xl:m-0 xl:top-[2800px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/question-mark-2.png"
        width={50}
        height={71}
        alt="purple-grad-4"
        className="absolute lg:left-[650px] ml-[200px] mt-[800px] lg:m-0 sm:mt-[700px] xl:left-[780px] xl:m-0 lg:top-[2890px] xl:top-[2870px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/question-mark-2.png"
        width={50}
        height={71}
        alt="purple-grad-4"
        className="absolute lg:left-[900px] mr-[200px] mt-[800px] lg:m-0 sm:mt-[700px] xl:left-[1080px] lg:top-[2870px] xl:m-0 xl:top-[2850px] pointer-events-none select-none"
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
        className="absolute xl:left-[1180px] w-[10px] xl:m-0 md:mt-[1270px] mt-[1220px] sm:mt-[1080px] lg:mx-0 ml-[200px] md:ml-[300px] md:w-[30px] lg:right-0 lg:mr-[100px] lg:mt-[700px] xl:top-[3440px] pointer-events-none select-none"
      />

      <div className="flex w-screen lg:w-fit flex-col gap-5 lg:ml-[100px] xl:ml-[215px]">
        <h1 className="text-[20px] md:text-[32px] w-[60%] text-center mx-auto md:w-full lg:text-left lg:mx-0 lg:w-[280px] font-bold text-white">
          Frequently Ask <span className="text-[#D434FE]">Question</span>{" "}
        </h1>
        <p className="text-[12px] md:text-[14px] text-center lg:text-left w-[70%] mx-auto lg:mx-0 text-white leading-[25px] md:w-[339px]">
          We got answers to the questions that you might want to ask about{" "}
          <span className="font-bold">getlinked Hackathon 1.0</span>
        </p>
        <ul className="flex flex-col gap-9 w-full md:w-[80%] mx-auto lg:w-[427px] mt-10">
          {faqData.map((data) => (
            <li
              className="flex justify-between items-center gap-5 md:gap-0 mx-auto lg:mx-0 w-[80%] md:w-full lg:w-[450px] text-white text-[12px] md:text-[14px] border-b-2 pb-4 border-[#D434FE]"
              key={data.id}
            >
              {data.title}
              <Image
                src="/assets/Images/add.png"
                width={12}
                height={28}
                alt="add"
                className="pointer-events-none select-none"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:mr-[50px] mt-44 xl:mr-[100px] z-20 lg:mt-24">
        <Image
          src="/assets/Images/faq-hero.png"
          width={600}
          height={741}
          alt="faq-hero"
          className="pointer-events-none w-[327px] md:w-[500px] lg:w-[600px] select-none"
        />
      </div>
    </section>
  );
};

export default Faq;
