import React, { useState, useEffect } from "react";
import Image from "next/image";
import { faqData } from "@/db/faq-data";
import { FaqBackgroundGraphics } from "./FaqBackgroundGraphics";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Faq = () => {
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

  const [faqIsOpen, setFaqIsOpen] = useState(false);
  const [faqContent, setFaqContent] = useState("");
  const [selectedId, setSelectedId] = useState(0);

  const toggleFaq = (id: number) => {
    setFaqIsOpen(!faqIsOpen);
    setSelectedId(id);
    const getFaqData = faqData.filter((data) => data.id === id);
    const getFaqContent = getFaqData.map((data) => data.content).toString();
    setFaqContent(getFaqContent);
  };
  return (
    <motion.section
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      ref={ref}
      id="faq"
      className="w-full flex flex-col lg:flex-row gap-8 justify-between items-center h-full py-10 border-b-[0.2px] border-gray-600"
    >
      <FaqBackgroundGraphics />

      <motion.div
        variants={textVariants}
        className="flex w-screen lg:w-fit flex-col gap-5 lg:ml-[100px] xl:ml-[215px]"
      >
        <h1 className="text-[20px] md:text-[32px] w-[60%] text-center mx-auto md:w-full lg:text-left lg:mx-0 lg:w-[280px] font-bold text-white">
          Frequently Ask <span className="text-[#D434FE]">Question</span>{" "}
        </h1>
        <p className="text-[12px] md:text-[14px] text-center lg:text-left w-[70%] mx-auto lg:mx-0 text-white leading-[25px] md:w-[339px]">
          We got answers to the questions that you might want to ask about{" "}
          <span className="font-bold">getlinked Hackathon 1.0</span>
        </p>
        <ul className="flex flex-col gap-6 w-full md:w-[80%] mx-auto lg:w-[427px] mt-10">
          {faqData.map((data) => (
            <li
              className="flex flex-col justify-between gap-5 md:gap-5 mx-auto lg:mx-0 w-[80%] md:w-full lg:w-[450px] text-white text-[12px] md:text-[14px] border-b-2 pb-2 border-[#D434FE] cursor-pointer"
              key={data.id}
              onClick={() => toggleFaq(data.id)}
            >
              <div className="w-full flex justify-between items-center">
                {data.title}
                <Image
                  src="/assets/Images/add.svg"
                  width={12}
                  height={28}
                  alt="add"
                  className="pointer-events-none select-none"
                />
              </div>
              <div>
                {data.id === selectedId && faqIsOpen && (
                  <p className="text-[12px] md:text-[13px] font-bold">
                    {faqContent}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
      <div className="lg:mr-[50px] flex items-center flex-col mt-20 xl:mr-[100px] z-20 lg:mt-24">
        <div className="flex lg:gap-20 gap-10">
          <Image
            src="/assets/Images/question-mark-2.png"
            width={50}
            height={71}
            alt="purple-grad-4"
            className="pointer-events-none mt-12 select-none"
          />
          <Image
            src="/assets/Images/question-mark-1.png"
            width={60}
            height={71}
            alt="purple-grad-4"
            className=" pointer-events-none select-none"
          />
          <Image
            src="/assets/Images/question-mark-2.png"
            width={50}
            height={71}
            alt="purple-grad-4"
            className="pointer-events-none mt-12 select-none"
          />
        </div>

        <Image
          src="/assets/Images/faq-hero.svg"
          width={600}
          height={741}
          alt="faq-hero"
          className="pointer-events-none w-[327px] md:w-[500px] lg:w-[600px] select-none"
        />
      </div>
    </motion.section>
  );
};

export default Faq;
