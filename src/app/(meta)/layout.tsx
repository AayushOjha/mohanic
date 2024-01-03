import React, { ReactElement } from "react";
import Logo from "@app/favicon-32x32.png";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

interface props {
  children: ReactElement;
}

const layout = ({ children }: props) => {
  return (
    <div className="bg-neutral-100 min-h-screen flex flex-col">
      <Link href="/">
        <header className="flex justify-center items-center gap-3 py-3 shadow-md">
          <Image src={Logo} alt="mohannic logo" />
          <h1 className="text-slate-800 text-2xl font-bold">Mohannic</h1>
        </header>
      </Link>

      <main className="flex-1 ">{children}</main>

      <footer className="shadow-inner py-3 text-slate-800 font-semibold">
        <p className="text-center">Copyright © {moment().year()} Mohannic</p>
      </footer>
    </div>
  );
};

export default layout;
