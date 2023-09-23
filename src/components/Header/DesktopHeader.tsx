import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { navLinks } from "@/db/header-data";

const DesktopHeader = () => {
  const router = useRouter();

  const isContactOrRegisterPage =
    router.pathname === "/contact" || router.pathname === "/register";
  const isRegisterPage = router.pathname === "/register";

  const linkStyle = (text: string) => {
    if (
      isContactOrRegisterPage &&
      (text === "Contact" || text === "Register")
    ) {
      return {
        background: "linear-gradient(90deg, #903AFF 3.08%, #FF26B9 93.85%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      };
    }
    return {};
  };

  return (
    <div className="hidden md:flex">
      <nav className="xl:mr-[128px] lg:mr-[100px] md:mr-[50px] my-auto">
        <ul className="flex xl:gap-14 lg:gap-10 md:gap-5 my-auto lg:text-[16px] md:text-[14px] font-normal text-white">
          {navLinks.map((data) => (
            <Link href={data.route} key={data.id} className="my-auto">
              <span style={linkStyle(data.title)}>{data.title}</span>
            </Link>
          ))}

          <Link
            href="/register"
            className="xl:ml-14 lg:ml-10 md:ml-5 h-[53px] text-center flex items-center justify-center rounded-[4px] w-[172px] py-3"
            style={
              isRegisterPage
                ? {
                    border: "2px solid transparent",
                    borderImage:
                      "linear-gradient(to right, #9A39FF, #FF29B9) 1",
                    borderRadius: "12px",
                    backgroundClip: "text",
                  }
                : {
                    borderRadius: "4px",
                    background:
                      "linear-gradient(to right, #FE34B9, #D434FE, #903AFF)",
                  }
            }
          >
            Register
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default DesktopHeader;
