import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full mt-14 lg:mt-0 flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-center lg:h-[85vh] border-b-[0.2px] border-gray-600">
      <div className="w-full md:w-fit flex z-20 flex-col gap-5 justify-center md:justify-normal items-center md:items-start md:text-start lg:ml-[100px] xl:ml-[128px] mt-[5%]">
        <h1 className="hidden text-[32px] w-[300px] sm:text-[60px] md:mx-auto lg:mx-0 lg:text-[70px] xl:text-[80px] font-black text-white text-center lg:text-left sm:w-[500px] lg:w-[600px] xl:w-[722px] lg:flex items-end lg:leading-[90px] xl:leading-[95px]">
          getlinked Tech Hackathon{" "}
          <span className="absolute lg:ml-[26rem] xl:ml-[30rem] text-[#D434FE] lg:flex items-center">
            1.0{" "}
            <Image
              src="/assets/Images/chain.png"
              width={86}
              height={86}
              alt="chain-icon"
              className="hidden lg:inline w-[32px] md:w-[86px] pointer-events-none h-fit select-none"
            />
            <Image
              src="/assets/Images/fire.png"
              width={58}
              height={58}
              alt="fire-icon"
              className="hidden lg:inline w-[22px] md:w-[58px] pointer-events-none h-fit mr-5  select-none"
            />
          </span>{" "}
        </h1>
        <div className="flex lg:hidden flex-col items-center mx-auto">
          <h1 className="text-[32px] w-[300px] sm:text-[60px] md:mx-auto font-black text-white text-center lg:text-left sm:w-[500px]">
            getlinked Tech
          </h1>
          <div className="md:w-full sm:w-full w-[320px] items-center justify-around flex gap-0">
            <h1 className="text-[32px] w-[300px] sm:text-[60px] md:mx-auto font-black text-white text-center lg:text-left sm:w-[500px]">
              Hackathon <span className="text-[#D434FE]">1.0</span>{" "}
            </h1>
            <Image
              src="/assets/Images/chain.png"
              width={86}
              height={86}
              alt="chain-icon"
              className="w-[32px] sm:w-[86px] md:w-[86px] pointer-events-none h-fit select-none"
            />
            <Image
              src="/assets/Images/fire.png"
              width={58}
              height={58}
              alt="fire-icon"
              className="w-[22px] sm:w-[58px] md:w-[58px] pointer-events-none h-fit mr-5  select-none"
            />
          </div>
        </div>
        <p className="sm:text-[20px] w-[80%] text-[13px] sm:w-[500px] text-center lg:text-left md:w-[600px] md:mx-auto lg:mx-0 lg:text-[15px] xl:text-[20px] text-white lg:w-[400px] xl:w-[520px]">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
        <Link
          href="/register"
          className="md:mx-auto lg:mx-0 text-white w-fit h-fit rounded-[4px] px-14 py-3"
          style={{
            background: "linear-gradient(to right, #FE34B9, #D434FE, #903AFF)",
          }}
        >
          Register
        </Link>

        <Image
          src="/assets/Images/countdown.png"
          width={291}
          height={85}
          alt="countdown"
          className="mt-10 md:mx-auto lg:mx-0 md:w-[290px] w-[220px] lg:w-[200px] xl:w-[291px] pointer-events-none select-none"
        />
      </div>
      <div className="z-20 mt-auto">
        <Image
          src="/assets/Images/hero-graphics.png"
          width={781}
          height={641}
          alt="hero-graphics"
          className="absolute lg:w-[33%] md:w-[50%]  w-[338px] md:mt-28 lg:mt-[3em] right-0 md:mr-[12rem] lg:mr-5 pointer-events-none select-none"
        />
        <Image
          src="/assets/Images/hero.png"
          width={715}
          height={905}
          alt="hero"
          className="md:mt-10  lg:mt-0 w-[419px] sm:w-[715px]  lg:w-[590px] xl:min-w-auto pointer-events-none select-none"
        />
      </div>
    </section>
  );
};

export default HeroSection;
