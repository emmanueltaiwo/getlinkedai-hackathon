import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Introduction = () => {
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
      id="overview"
      className="w-full flex flex-col lg:flex-row mt-7 md:mt-0 justify-between items-center h-full py-10 lg:h-[75vh] border-b-[0.2px] border-gray-600 gap-8"
    >
      <Image
        src="/assets/Images/pink-star.png"
        width={21}
        height={25}
        alt="pink-star"
        className="absolute w-[11px] sm:mt-[400px] md:mt-0 lg:top-[900px] md:top-[1500px] md:w-[21px] top-[1000px] left-[20px] xl:left-[70px] xl:top-[1000px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/pink-star.png"
        width={30}
        height={36}
        alt="pink-star"
        className="absolute mr-10 sm:mt-[300px] md:mt-0 lg:top-[950px] md:top-[1600px] right-0 lg:right-0 w-[8px] md:w-[30px] top-[1310px] xl:top-[970px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/arrow.png"
        width={49.43}
        height={57.97}
        alt="arrow"
        className="absolute sm:top-[1650px] w-[19px] md:top-[1850px] md:w-[49px] lg:left-[550px] lg:top-[1270px] xl:left-[650px] top-[1245px] xl:top-[1270px] pointer-events-none select-none"
      />

      <motion.div
        variants={textVariants}
        className="lg:ml-[100px] xl:ml-[200px] z-20"
      >
        <Image
          src="/assets/Images/big-idea.svg"
          width={490}
          height={477}
          alt="the-big-idea"
          className="w-[264px] md:w-[490px] pointer-events-none select-none"
        />
      </motion.div>
      <motion.div
        variants={textVariants}
        className="flex mt-5 z-20 md:mt-0 flex-col gap-3 md:gap-5 lg:mr-[50px] xl:mr-[100px]"
      >
        <h1 className="text-[20px] text-center lg:text-left mx-auto lg:mx-0 md:text-[32px] w-[90%] md:w-[430px] font-bold text-white">
          Introduction to getlinked <br />
          <span className="text-[#D434FE]">techHackathon 1.0</span>{" "}
        </h1>
        <p className="w-[90%] text-center lg:text-left md:w-[80%] mx-auto lg:mx-0 lg:w-[527px] h-[165px] text-[13px] md:leading-[33px] md:text-[14px] text-white">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Introduction;
