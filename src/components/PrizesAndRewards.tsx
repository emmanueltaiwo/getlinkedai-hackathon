import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PrizesAndRewards = () => {
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
    <>
      <Image
        src="/assets/Images/pink-star.png"
        width={20}
        height={36}
        alt="pink-star"
        className="absolute left-[300px] mt-[20%] md:left-[200px] w-[10px] md:w-[20px] md:mt-[5%] lg:m-0 lg:top-[5150px] lg:left-[200px] xl:top-[5085px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/bright-star.png"
        width={25}
        height={36}
        alt="bright-star"
        className="absolute right-0 mr-5 mt-[500px] md:right-0 md:mr-[200px] w-[10px] md:w-[20px] md:mt-[550px] lg:m-0 lg:left-[700px] lg:top-[5330px] xl:top-[5330px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/bright-star.png"
        width={26}
        height={36}
        alt="bright-star"
        className="absolute left-0 mt-[430px] ml-[5%] w-[10px] md:w-[20px] mr-28 md:left-0 md:ml-[250px] md:mt-[400px] lg:m-0 lg:right-0 lg:mr-28 lg:top-[5385px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/gray-star.png"
        width={26}
        height={36}
        alt="gray-star"
        className="absolute mt-[750px] mr-[100px] right-0 md:mr-[19rem] w-[10px] md:w-[20px] md:mt-[5%] lg:m-0 lg:mr-[19rem] lg:top-[5790px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/bright-star.png"
        width={15}
        height={36}
        alt="bright-star"
        className="absolute hidden md:inline lg:left-[320px] w-[10px] md:w-[20px] md:left-[500px] md:mt-[1250px] lg:m-0 lg:top-[5700px] pointer-events-none select-none"
      />

      <motion.section
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        ref={ref}
        className="w-full flex flex-col lg:flex-row justify-between gap-3 md:gap-10 items-center h-full pt-14 pb-24"
        style={{
          backgroundImage: "url(/assets/Images/prizes-bg.png)",
        }}
      >
        <h1 className="text-[20px] w-[50%] text-center mx-auto md:hidden font-[700] text-white">
          Prizes and <span className="text-[#D434FE]">Rewards</span>
        </h1>
        <p className="text-white md:hidden font-400 w-[80%] text-center mx-auto text-[12px]">
          Highlight of the prizes or rewards for winners and for participants.
        </p>
        <div className="md:ml-[106px] mt-5 md:mt-0 md:w-[548px] opacity-100">
          <Image
            src="/assets/Images/trophy.png"
            width={548}
            height={482}
            alt="trophy image"
            className="pointer-events-none w-[321px] md:w-[548px] mx-auto md:mx-0 select-none"
          />
        </div>
        <motion.div
          variants={textVariants}
          className="flex flex-col gap-5 lg:w-[650px] lg:mr-[90px]"
        >
          <h1 className="hidden md:inline ml-28 text-[32px] w-[174px] md:w-full lg:w-[174px] md:text-center lg:text-start md:mx-auto lg:mx-0 font-[700] text-white">
            Prizes and <span className="text-[#D434FE]">Rewards</span>
          </h1>
          <p className="hidden md:inline text-white font-400 leading-[27px] w-[401px] md:text-center lg:text-left md:mx-auto lg:mx-0 text-[16px] ml-28">
            Highlight of the prizes or rewards for winners and for participants.
          </p>

          <Image
            src="/assets/Images/rewards.svg"
            width={692}
            height={494}
            alt="rewards image"
            className="pointer-events-none mt-5 md:mt-0 w-[294px] md:w-[692px] select-none"
          />
        </motion.div>
      </motion.section>
    </>
  );
};

export default PrizesAndRewards;
