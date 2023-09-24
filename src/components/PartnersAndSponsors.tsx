import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PartnersAndSponsors = () => {
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
        src="/assets/Images/purple-grad-11.png"
        className="absolute mt-[-10rem]"
        width={637}
        height={948}
        alt="purple-grad-10"
      />
      <Image
        src="/assets/Images/purple-grad-12.png"
        className="absolute hidden lg:inline right-0 mt-[10%]"
        width={637}
        height={948}
        alt="purple-grad-10"
      />
      <Image
        src="/assets/Images/pink-star.png"
        width={30}
        height={36}
        alt="pink-star"
        className="absolute w-[10px] mt-[190px] md:mt-[250px] ml-[8%] lg:m-0 md:w-[30px] z-10 lg:left-[200px] lg:top-[5985px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/pink-star.png"
        width={20}
        height={36}
        alt="pink-star"
        className="absolute w-[10px] md:w-[20px] md:mt-[450px] mt-[230px] ml-[52%] lg:m-0 lg:left-[800px] lg:top-[6150px] pointer-events-none select-none"
      />
      <Image
        src="/assets/Images/bright-star.png"
        width={30}
        height={36}
        alt="bright-star"
        className="absolute w-[10px] md:w-[30px] mt-[300px] md:mt-[700px] md:ml-[700px] ml-[300px] lg:m-0 lg:left-[780px] lg:top-[6510px] pointer-events-none select-none"
      />

      <motion.section
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        ref={ref}
        className="w-full z-50 flex flex-col justify-center gap-5 items-center h-full pt-10 pb-20 border-b-[0.2px] border-gray-600"
      >
        <h1 className="text-white z-50 text-[20px] text-center mx-auto md:text-left md:mx-0 md:text-[32px] font-[700]">
          Partners and Sponsors
        </h1>
        <p className="text-[12px] z-50 w-[90%] md:text-[14px] text-white md:w-[452px] text-center font-[400]">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
        <motion.div
          variants={textVariants}
          className="lg:w-[90%] xl:w-[1255px] z-40 w-[90%] h-fit p-5 md:p-0 mt-5 md:mt-10 md:h-[560px] flex items-center justify-center rounded-[4px] border-[1px] border-[#D434FE]"
        >
          <Image
            src="/assets/Images/partner.png"
            width={899}
            height={271}
            alt="partners-and-sponsors image"
            className="pointer-events-none select-none w-[333px] md:w-[800px] lg:w-[899px]"
          />
        </motion.div>
      </motion.section>
    </>
  );
};

export default PartnersAndSponsors;
