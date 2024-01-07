"use client";

import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Drawer } from "@mui/material";
import { NavItems } from "@/components/Navbar";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

type Props = {};

const Hamburger = (props: Props) => {
  const [isMenuSidebarOpen, setIsMenuSidebarOpen] = useState(false);
  return (
    <>
      <div
        className="lg:cursor-pointer"
        onClick={() => {
          setIsMenuSidebarOpen(true);
        }}
      >
        <MenuRoundedIcon />
      </div>

      <Drawer
        anchor="right"
        open={isMenuSidebarOpen}
        onClose={() => {
          setIsMenuSidebarOpen(false);
        }}
      >
        <div className="flex flex-col gap-5 w-[80vw] max-w-[500px] p-2">
          <div
            className="lg:cursor-pointer"
            onClick={() => {
              setIsMenuSidebarOpen(false);
            }}
          >
            <CloseRoundedIcon />
          </div>
          <NavItems />
        </div>
      </Drawer>
    </>
  );
};

export { Hamburger };
