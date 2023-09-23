import React from "react";
import Image from "next/image";
import { TimeLineData } from "@/db/timeline-data";

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

      <div className="lg:hidden">
        <div className="absolute w-[19.32px] h-[19.32px] sm:mt-[20rem] sm:left-[14.5%] rounded-[26.5px] flex items-center justify-center text-white font-[700] text-[12px] md:left-[4.3%] left-[15%] md:mt-[22rem] mt-[22.3rem] bg-[#D434FE]">
          1
        </div>

        <div className="absolute w-[19.32px] h-[19.32px] sm:mt-[28.5rem] sm:left-[14.5%] rounded-[26.5px] flex items-center justify-center text-white font-[700] text-[12px] md:left-[4.3%] left-[15%] md:mt-[35rem] mt-[32.8rem] bg-[#D434FE]">
          2
        </div>

        <div className="absolute w-[19.32px] h-[19.32px] sm:mt-[36rem] sm:left-[14.5%] rounded-[26.5px] flex items-center justify-center text-white font-[700] text-[12px] md:left-[4.3%] left-[15%] md:mt-[48rem] mt-[42rem] bg-[#D434FE]">
          3
        </div>

        <div className="absolute w-[19.32px] h-[19.32px] sm:mt-[44.5rem] sm:left-[14.5%] rounded-[26.5px] flex items-center justify-center text-white font-[700] text-[12px] md:left-[4.3%] left-[15%] md:mt-[61rem] mt-[53rem] bg-[#D434FE]">
          4
        </div>

        <div className="absolute w-[19.32px] h-[19.32px] sm:mt-[53rem] sm:left-[14.5%] rounded-[26.5px] flex items-center justify-center text-white font-[700] text-[12px] md:left-[4.3%] left-[15%] md:mt-[73.5rem] mt-[64.6rem] bg-[#D434FE]">
          5
        </div>

        <div className="absolute w-[19.32px] h-[19.32px] sm:mt-[61.5rem] sm:left-[14.5%] rounded-[26.5px] flex items-center justify-center text-white font-[700] text-[12px] md:left-[4.3%] left-[15%] md:mt-[87rem] mt-[75rem] bg-[#D434FE]">
          6
        </div>
      </div>

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
          <div className="mx-auto w-[90%] lg:w-full flex flex-col lg:flex-row items-start lg:items-end gap-3 lg:gap-10">
            <div className="lg:w-[436px] border-l-2 pl-5 border-[#D434FE] lg:border-none flex flex-col gap-3">
              <h3 className="text-[12px] md:text-[24px] text-[#D434FE] font-[700] text-left lg:text-right">
                Hackathon Announcement
              </h3>
              <p className="text-[12px] md:text-[14px] text-white font-[400] lg:w-[436px] text-left lg:text-right">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div className="pl-5 lg:pl-0 lg:w-[436px]">
              <h3 className="text-[12px] md:text-[24px] text-left lg:text-right text-[#D434FE] font-[700]">
                November 18, 2023
              </h3>
            </div>
          </div>

          <div className="mx-auto w-[90%] lg:w-full flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-3 lg:gap-10">
            <div className="lg:w-[436px] pl-5 lg:pl-0">
              <h3 className="text-[12px] md:text-[24px] text-[#D434FE] text-right font-[700]">
                November 18, 2023
              </h3>
            </div>
            <div className="lg:w-[436px] border-l-2 pl-5 border-[#D434FE] lg:border-none flex flex-col gap-3">
              <h3 className="text-[12px] md:text-[24px] text-[#D434FE] font-[700] text-left">
                Teams Registration begins
              </h3>
              <p className="text-[12px] md:text-[14px] text-white font-[400] lg:w-[436px] text-left">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
          </div>

          <div className="mx-auto w-[90%] lg:w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-3 lg:gap-10">
            <div className="lg:w-[436px] border-l-2 pl-5 border-[#D434FE] lg:border-none flex flex-col gap-3">
              <h3 className="text-[12px] md:text-[24px] text-[#D434FE] font-[700] text-left lg:text-right">
                Teams Registration ends
              </h3>
              <p className="text-[12px] md:text-[14px] text-white font-[400] lg:w-[436px] text-left lg:text-right">
                Interested Participants are no longer Allowed to register
              </p>
            </div>
            <div className="lg:w-[436px] pl-5 lg:pl-0">
              <h3 className="text-[12px] md:text-[24px] text-left text-[#D434FE] font-[700]">
                November 18, 2023
              </h3>
            </div>
          </div>

          <div className="mx-auto w-[90%] lg:w-full flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-3 lg:gap-10">
            <div className="lg:w-[436px] pl-5 lg:pl-0">
              <h3 className="text-[12px] md:text-[24px] text-[#D434FE] text-right font-[700]">
                November 18, 2023
              </h3>
            </div>
            <div className="lg:w-[436px] border-l-2 pl-5 border-[#D434FE] lg:border-none flex flex-col gap-3">
              <h3 className="text-[12px] md:text-[24px] text-[#D434FE] font-[700] text-left">
                Announcement of the accepted teams and ideas
              </h3>
              <p className="text-[12px] md:text-[14px] text-white font-[400] lg:w-[436px] text-left">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
          </div>

          <div className="mx-auto w-[90%] lg:w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-3 lg:gap-10">
            <div className="lg:w-[436px] border-l-2 pl-5 border-[#D434FE] lg:border-none flex flex-col gap-3">
              <h3 className="text-[12px] md:text-[24px] text-[#D434FE] font-[700] text-left lg:text-right">
                Getlinked Hackathon 1.0 Offically Begins
              </h3>
              <p className="text-[12px] md:text-[14px] text-white font-[400] lg:w-[436px] text-left lg:text-right">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
            <div className="lg:w-[436px] pl-5 lg:pl-0">
              <h3 className="text-[12px] md:text-[24px] text-left text-[#D434FE] font-[700]">
                November 18, 2023
              </h3>
            </div>
          </div>

          <div className="mx-auto w-[90%] lg:w-full flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-3 lg:gap-10">
            <div className="lg:w-[436px] pl-5 lg:pl-0">
              <h3 className="text-[12px] md:text-[24px] text-[#D434FE] text-right font-[700]">
                November 18, 2023
              </h3>
            </div>
            <div className="lg:w-[436px] border-l-2 pl-5 border-[#D434FE] lg:border-none flex flex-col gap-3">
              <h3 className="text-[12px] md:text-[24px] text-[#D434FE] font-[700] text-left">
                Demo Day
              </h3>
              <p className="text-[12px] md:text-[14px] text-white font-[400] lg:w-[436px] text-left">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
