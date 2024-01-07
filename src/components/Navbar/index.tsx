import React from "react";
import Logo from "@app/favicon-32x32.png";
import Link from "next/link";
import Image from "next/image";
import { Hamburger } from "@/app/(home)/Hamburger";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-full h-fit shadow-md p-2 lg:px-5 flex justify-between items-center">
      <Link href="/">
        <header className="flex gap-2">
          <Image src={Logo} alt="mohannic logo" />
          <h1 className="text-slate-800 text-2xl font-bold">Mohannic</h1>
        </header>
      </Link>
      {/* Mobile visible hamburger  */}
      <Hamburger />
      <div className="hidden">
        <NavItems />
      </div>
    </nav>
  );
};

export const NavItems = () => {
  return (
    <ul className="font-semibold mt-4 text-gray-800">
      <li className="py-4 border-b border-gray-300 ">
        <Link href={"/jokes/bhilwara-jokes"}>भीलवाड़ा जोक्स</Link>
      </li>
      <li className="py-4 border-b border-gray-300 ">
        <Link href={"/diwali-jokes"}>दिवाली पर चुटकुले</Link>
      </li>
      <li className="py-4 border-b border-gray-300 ">
        <Link href={"/wishes/ram-mandir"}>राम मंदिर की बधाई</Link>
      </li>
      <li className="py-4">
        <Link href={"/wishes/makar-sankranti"}>मकर संक्रान्ति की बधाई</Link>
      </li>
      <li className="py-4 border-b border-gray-300 mt-20">
        <Link href={"/contact-us"}>Contact Us</Link>
      </li>
      <li className="py-4">
        <Link
          href={
            "https://www.termsfeed.com/live/a2bf0561-c764-4c38-9a7a-8d55273615d1"
          }
          target="_blank"
        >
          Privacy Policy
        </Link>
      </li>
    </ul>
  );
};

export { Navbar };
