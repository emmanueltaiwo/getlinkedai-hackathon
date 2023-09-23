import React from "react";
import Image from "next/image";
import { TimeLineData } from "@/db/timeline-data";
import TimelineCard from "./TimelineCard";

const Timeline = () => {
  return (
    <>
      <Image
        src="/assets/Images/pink-star.png"
        width={30}
        height={36}
        alt="pink-star"
        className="absolute  left-0 ml-[6rem] lg:ml-[18rem] mt-[13rem] lg:m-0 w-[10px] md:w-[30px] lg:top-[3810px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/bright-star.png"
        width={30}
        height={36}
        alt="bright-star"
        className="absolute right-0 mr-[3rem] lg:mr-[15rem] w-[10px] mt-[42.5rem] lg:m-0 md:w-[30px] lg:top-[4230px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/gray-star.png"
        width={30}
        height={36}
        alt="gray-star"
        className="absolute left-0 ml-5 mt-[78rem] sm:mt-[65rem] md:mt-[92rem] lg:ml-[13rem] w-[10px] md:w-[30px] lg:m-0 lg:top-[4850px] pointer-events-none select-none"
      />

      <div className="hidden lg:inline">
        <div className="absolute w-[4px] h-[137px] left-[50%]  mt-[18rem] bg-[#D434FE]" />
        <div className="absolute w-[53px] h-[53px] rounded-[26.5px] flex items-center justify-center text-white font-[700] text-[24px] left-[48.3%]  mt-[27rem] bg-[#D434FE]">
          1
        </div>

        <div className="absolute w-[4px] h-[86px] left-[50%]  mt-[30.8rem] bg-[#D434FE]" />
        <div className="absolute w-[53px] h-[53px] rounded-[26.5px] flex items-center justify-center text-white font-[700] text-[24px] left-[48.3%]  mt-[36.5rem] bg-[#D434FE]">
          2
        </div>

        <div className="absolute w-[4px] h-[86px] left-[50%]  mt-[40.5rem] bg-[#D434FE]" />
        <div className="absolute w-[53px] h-[53px] rounded-[26.5px] flex items-center justify-center text-white font-[700] text-[24px] left-[48.3%]  mt-[46.3rem] bg-[#D434FE]">
          3
        </div>

        <div className="absolute w-[4px] h-[110px] left-[50%]  mt-[50rem] bg-[#D434FE]" />
        <div className="absolute w-[53px] h-[53px] rounded-[26.5px] flex items-center justify-center text-white font-[700] text-[24px] left-[48.3%]  mt-[57.3rem] bg-[#D434FE]">
          4
        </div>

        <div className="absolute w-[4px] h-[130px] left-[50%]  mt-[61.3rem] bg-[#D434FE]" />
        <div className="absolute w-[53px] h-[53px] rounded-[26.5px] flex items-center justify-center text-white font-[700] text-[24px] left-[48.3%]  mt-[69.8rem] bg-[#D434FE]">
          5
        </div>

        <div className="absolute w-[4px] h-[125px] left-[50%]  mt-[73.7rem] bg-[#D434FE]" />
        <div className="absolute w-[53px] h-[53px] rounded-[26.5px] flex items-center justify-center text-white font-[700] text-[24px] left-[48.3%]  mt-[82rem] bg-[#D434FE]">
          6
        </div>
      </div>

      <section
        id="timeline"
        className="w-full h-full pb-32 pt-20 flex flex-col text-center justify-center items-center gap-10"
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-[32px] font-[700]">Timeline</h1>
          <p className="text-white text-[14px] font-[400] leading-[24px] w-[292px] lg:w-[341px]">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>

        <div className="mt-5 lg:mt-[10rem] mx-auto lg:mx-0 md:ml-0 w-[80%] lg:w-[1000px] xl:w-[1100px] px-3 flex flex-col items-center justify-center gap-10 md:gap-20">
          <TimelineCard/>
        </div>
      </section>
    </>
  );
};

export default Timeline;
