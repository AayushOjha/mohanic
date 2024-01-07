import React, { ReactElement } from "react";
import moment from "moment";
import { Navbar } from "@/components/Navbar";

interface props {
  children: ReactElement;
}

const layout = ({ children }: props) => {
  return (
    <div className="bg-neutral-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-3">{children}</main>

      <footer className="shadow-inner py-3 text-slate-800 font-semibold">
        <p className="text-center">Copyright © {moment().year()} Mohannic</p>
      </footer>
    </div>
  );
};

export default layout;
