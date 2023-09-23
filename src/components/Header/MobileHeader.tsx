import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/db/header-data";

const MobileHeader = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="md:hidden flex">
      <Image
        src="/assets/Images/mobile-menu.png"
        width={19}
        height={14}
        alt="Mobile menu"
        className="mr-5"
        onClick={() => setMenuIsOpen(true)}
      />

      {menuIsOpen && (
        <div className="w-full duration-1000 transition-all top-0 left-0 bottom-0 right-0 h-screen fixed bg-[#150E28] text-white z-50 flex flex-col gap-5 ">
          <section className="mt-12 ml-auto">
            <Image
              src="/assets/Images/close-border.png"
              width={30}
              height={30}
              alt="close icon"
              className="absolute right-[12px] top-[40px]"
              onClick={() => setMenuIsOpen(false)}
            />
            <Image
              src="/assets/Images/close.png"
              width={13}
              height={30}
              alt="close icon"
              className="mr-5"
              onClick={() => setMenuIsOpen(false)}
            />
          </section>

          <ul className="flex flex-col gap-10 ml-10 mt-[5rem] text-[18px] text-white font-medium">
            {navLinks.map((data) => (
              <Link href={data.route} key={data.id} className="my-auto">
                {data.title}
              </Link>
            ))}

            <Link
              href="/register"
              className="w-fit h-fit rounded-[4px] px-16 py-4"
              style={{
                background:
                  "linear-gradient(to right, #FE34B9, #D434FE, #903AFF)",
              }}
            >
              Register
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
