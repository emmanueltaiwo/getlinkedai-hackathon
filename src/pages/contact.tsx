import React from "react";
import Image from "next/image";
import Header from "@/components/Layout/Header";
import { useRouter } from "next/router";
import ContactInformation from "@/components/Contact/ContactInformtion";
import ContactFormPanel from "@/components/Contact/ContactFormPanel";
import ContactPageBackgroundArt from "@/components/Contact/ContactPageBackgroundArt";
import Head from "next/head"

const Contact = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>getLinkedai Hackathon - Contact</title>
      </Head>
      <Header pageName="contact" />
      <ContactPageBackgroundArt />
      <main className="w-full h-[86.5vh] my-auto items-center flex flex-col md:flex-row gap-5 md:justify-between">
        <ContactInformation />
        <button
          onClick={() => router.push("/")}
          className="inline md:hidden mt-12 mr-auto"
        >
          <Image
            src="/assets/Images/close-border.svg"
            width={30}
            height={30}
            alt="close border"
            className="absolute left-0 ml-7 sm:ml-[8rem] top-[41px]"
          />
          <Image
            src="/assets/Images/previous-icon.png"
            width={100}
            height={30}
            alt="previous icon"
            className="ml-9 sm:ml-[8.5rem] w-[10px]"
          />
        </button>

        <ContactFormPanel />
      </main>
    </>
  );
};

export default Contact;
