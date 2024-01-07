import moment from "moment";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="shadow-inner py-3">
      <div className="flex justify-center items-center gap-3 mb-2">
        <Link
          className="p-1"
          href="https://www.instagram.com/shreemaanengineer/"
        >
          <YouTubeIcon className="text-[25px] text-red-600" />
        </Link>
        <Link
          className="p-1"
          href="https://www.youtube.com/channel/UCl-S6NW9Hi7eF6YVzzhazzw"
        >
          <InstagramIcon className="text-pink-600" />
        </Link>
      </div>
      <div>
        <p className="text-center font-semibold">
          Copyright © {moment().year()} Mohannic
        </p>
      </div>
    </footer>
  );
};

export { Footer };
