import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { judgingCriteriaData } from "@/db/judging-criteria-data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const JudgingCriteria = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2, duration: 1, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 1, ease: "easeOut" },
    },
  };
  return (
    <motion.section
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      ref={ref}
      className="w-full flex flex-col lg:flex-row justify-between items-center h-full py-10 border-b-[0.2px] border-gray-600"
    >
      <Image
        src="/assets/Images/purple-grad-3.png"
        width={837}
        height={948}
        alt="purple-grad-3"
        className="absolute left-0 md:top-[2050px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/pink-star.png"
        width={30}
        height={36}
        alt="pink-star"
        className="absolute xl:left-[100px] w-[12px] md:w-[30px] lg:left-[100px] lg:mb-[500px] xl:mb-0 xl:top-[1975px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/bright-star.png"
        width={30}
        height={36}
        alt="bright-star"
        className="absolute lg:left-[400px] sm:mt-[750px] right-0 mr-[30px] sm:mr-[100px] mt-[1050px] w-[12px] md:w-[30px] md:mt-[1000px] md:left-[30px] lg:mt-[650px] xl:mt-0 xl:left-[600px] xl:top-[2640px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/gray-star.png"
        width={30}
        height={36}
        alt="grat-star"
        className="absolute mt-[150px] w-[12px] md:w-[30px] xl:left-[490px] md:right-0 md:mt-[300px] md:mr-10 lg:m-0 lg:left-[300px] xl:top-[2375px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/ellipse1.png"
        width={134}
        height={134}
        alt="ellipse1"
        className="absolute hidden xl:inline left-0 ml-[12%] top-[2040px] pointer-events-none select-none"
      />
      <div className="xl:ml-[66px] lg:ml-[33px] z-20">
        <Image
          src="/assets/Images/judging-hero.png"
          width={710}
          height={587}
          alt="judging-hero"
          className="pointer-events-none w-[332px] md:w-[600px] lg:w-[500px] xl:w-[710px] select-none"
        />
      </div>
      <motion.div
        variants={textVariants}
        className="flex mx-auto flex-col z-20 gap-5 lg:mr-[100px]"
      >
        <h1 className="text-[20px] w-[180px] sm:w-[80%] mx-auto lg:mx-0 md:text-[32px] text-center lg:text-left md:w-full lg:w-[280px] font-bold text-white">
          Judging Criteria{" "}
          <span className="text-[#D434FE]">Key attributes</span>{" "}
        </h1>
        <ul className="flex flex-col gap-3 md:gap-5 w-[299px] sm:w-[80%] md:w-[80%] sm:mx-auto lg:mx-0 text-center md:text-left lg:w-[450px] xl:w-[535px]">
          {judgingCriteriaData.map((data) => (
            <li
              className="text-white text-[13px] md:text-[14px] leading-[173.5%]"
              key={data.id}
            >
              <span className="font-bold text-[#FF26B9]">{data.heading}</span>{" "}
              {data.content}
            </li>
          ))}

          <Link
            href="/"
            className="mt-3 md:mt-5 text-white mx-auto lg:mx-0 w-fit h-fit rounded-[4px] px-10 py-3"
            style={{
              background:
                "linear-gradient(to right, #FE34B9, #D434FE, #903AFF)",
            }}
          >
            Read More
          </Link>
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default JudgingCriteria;
