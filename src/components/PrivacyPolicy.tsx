import React from "react";
import Image from "next/image";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <>
      <Image
        src="/assets/Images/purple-grad-10.png"
        className="absolute mt-[15%]"
        width={1037}
        height={948}
        alt="purple-grad-10"
      />
      <Image
        src="/assets/Images/pink-star.png"
        className="absolute w-[20px] md:w-[30px] md:mr-0 right-0 mr-[3rem] mt-[15rem]  md:mt-[55%] md:ml-[5%]"
        width={30}
        height={36}
        alt="pink-star"
      />
      <Image
        src="/assets/Images/gray-star.png"
        className="absolute w-[10px] md:w-[26px] right-0 mr-[5rem] mt-[3rem] md:mt-[7%] md:ml-[35%]"
        width={26}
        height={32}
        alt="pink-star"
      />
      <Image
        src="/assets/Images/pink-star.png"
        className="absolute w-[20px] mt-[60rem] ml-7 md:w-[23px] md:mt-[15%] md:ml-[50%]"
        width={23}
        height={28}
        alt="pink-star"
      />
      <Image
        src="/assets/Images/bright-star.png"
        className="absolute w-[10px] mt-[64rem] ml-[15.5rem] md:w-[15px] md:mt-[15%] md:ml-[83%]"
        width={15}
        height={18}
        alt="pink-star"
      />
      <Image
        src="/assets/Images/gray-star.png"
        className="absolute w-[10px] md:w-[26px] ml-[20rem] mt-[75rem] md:mt-[55%] md:ml-[93%]"
        width={26}
        height={32}
        alt="pink-star"
      />
      <Image
        src="/assets/Images/bright-star.png"
        className="absolute w-[10px] mt-[75rem] ml-7 md:w-[15px] md:mt-[52%] md:ml-[62%]"
        width={15}
        height={18}
        alt="pink-star"
      />
      {/*   <Image
        src="/assets/Images/pink-star.png"
        className="absolute w-[10px] md:w-[15px] mt-[47%] ml-[67%]"
        width={15}
        height={18}
        alt="pink-star"
      /> */}

      <section className="w-full flex flex-col lg:flex-row justify-between gap-5 items-center h-full py-20 md:py-32 border-b-[0.2px] border-gray-600">
        <div className="mg:ml-[25px] xl:ml-[50px] flex flex-col gap-3 sm:gap-5">
          <h1 className="lg:ml-14 xl:ml-28 text-[20px] w-[60%] md:w-full mx-auto lg:mx-0 sm:text-[32px] lg:w-[330px] text-center lg:text-left font-[700] text-white">
            Privacy Policy and <span className="text-[#D434FE]">Terms</span>
          </h1>
          <p className="text-[rgba(255,255,255,0.75)] text-center lg:text-left text-[12px] sm:text-[14px] font-[400] lg:ml-14 xl:ml-28">
            Last updated on September 12, 2023
          </p>
          <p className="mt-3 text-white lg:w-[438px] text-center lg:text-left w-[80%] mx-auto lg:mx-0 text-[12px] sm:text-[14px] font-[400] lg:ml-14 xl:ml-28">
            Below are our privacy & policy, which outline a lot of goodies.
            it&apos;s our aim to always take of our participant
          </p>

          <div className="lg:ml-14 xl:ml-28 mt-10 lg:w-[500px] z-30 w-[80%] pt-10 mx-auto lg:mx-0 xl:w-[569px] p-3 pb-10 xl:pb-0 xl:h-[608px] rounded-[5px] border-[1px] flex flex-col gap-2 justify-center items-center border-[#D434FE] bg-[rgba(217,217,217,0.03)]">
            <p className="text-white text-[14px] text-center lg:text-left font-[400] lg:w-[425px] leading-[30px]">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <h3 className="mt-5 text-[#D434FE] text-[16px] w-full font-[700] lg:w-[425px]">
              Licensing Policy
            </h3>
            <p className="text-white text-[14px] font-[700] w-full lg:w-[425px]">
              Here are terms of our Standard License:
            </p>
            <ul className="flex flex-col gap-5 mt-5 w-full items-start lg:w-[425px]">
              <li className="flex gap-3 items-start justify-center text-white font-[400] text-[14px]">
                <Image
                  src="/assets/Images/mark.png"
                  width={30}
                  height={30}
                  alt="Check mark"
                />
                <span className="my-auto">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </span>
              </li>
              <li className="flex gap-3 items-start justify-center text-white font-[400] text-[14px]">
                <Image
                  src="/assets/Images/mark.png"
                  width={30}
                  height={30}
                  alt="Check mark"
                />
                <span className="my-auto">
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </span>
              </li>
            </ul>
            <Link
              href=""
              className="text-white w-fit mt-5 mx-auto h-fit rounded-[4px] px-16 py-3"
              style={{
                background:
                  "linear-gradient(to right, #FE34B9, #D434FE, #903AFF)",
              }}
              type="submit"
            >
              Read More
            </Link>
          </div>
        </div>

        <div className="xl:w-[559px]  mt-32 md:h-[749px] mr-[90px]">
          <Image
            src="/assets/Images/secure.png"
            width={530}
            height={648}
            alt="secure image"
            className="absolute w-[249px] sm:w-[530px] lg:mr-[90px] mt-[50rem] md:mt-[40rem] lg:mt-[-10rem] mb-[45vh] lg:right-0 pointer-events-none select-none"
          />
          <Image
            src="/assets/Images/privacy.png"
            width={559}
            height={749}
            alt="privacy image"
            className=" pointer-events-none z-30 ml-10 md:ml-0 w-[262px] sm:w-[559px] select-none"
          />
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
