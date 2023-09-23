import React from "react";
import Image from "next/image";
import Link from "next/link";
import DesktopHeader from "../Header/DesktopHeader";
import MobileHeader from "../Header/MobileHeader";

interface LayoutProps {
  pageName: string;
}

const Header = (props: LayoutProps) => {
  const { pageName } = props;
  return (
    <header
      className={`${
        pageName === "contact" || pageName === "register"
          ? "z-1 w-full pt-3 hidden md:flex justify-between h-[6.5rem] items-center"
          : "z-1 w-full pt-3 flex justify-between h-[6.5rem] items-center border-b-[0.2px] border-gray-600"
      }`}
    >
      <Link href="/" className="xl:ml-[128px] lg:ml-[100px] md:ml-[50px] ml-5">
        <Image
          src="/assets/Images/getlinked.png"
          width={171}
          height={44}
          alt="getlinked logo"
        />
      </Link>
      <DesktopHeader />
      <MobileHeader />
    </header>
  );
};

export default Header;
