"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="flex overflow-hidden">
        <div className="bg-red-400 w-4 z-10 flex-shrink-0"></div>
        <div className="flex-1 flex flex-col gap-7 py-10">
          <div className="w-fit mx-auto text-2xl font-semibold">Ayush</div>
          <div className="s">
            <Image
              src="https://res.cloudinary.com/dca1rzsyb/image/upload/v1703913198/mohannic/wishes/kitrf_eyw2my.png"
              width={100}
              height={100}
              className="w-1/2 h-auto mx-auto"
              alt="Ram mandir badhai ki taraf se text"
            />
          </div>
          <div className="s">
            <p id="demo">
              22<span className="text-red-500"> दिन ,</span> 13
              <span className="text-red-500"> घंटे,</span> 10
              <span className="text-red-500"> मिनट,</span> 29
              <span className="text-red-500">सेकंड</span>
              पहले
            </p>
          </div>

          <Image
            src="https://res.cloudinary.com/dca1rzsyb/image/upload/v1703913713/mohannic/wishes/mainr_zrzjoj.png"
            alt="Ram mandir subh aarambh wish text"
            width={100}
            height={100}
            className="w-10/12 h-auto mx-auto"
          />
          <div className="s">
            <Image
              src="https://res.cloudinary.com/dca1rzsyb/image/upload/v1703915407/mohannic/wishes/ram2_clg3i8.png"
              alt="shree Ram mandir photo 1"
              width={100}
              height={100}
              className="w-10/12 h-auto mx-auto"
            />
          </div>
          <Image
            src="https://res.cloudinary.com/dca1rzsyb/image/upload/v1703931345/mohannic/wishes/hindu_1_kad0pw.png"
            alt="shree Ram mandir photo 1"
            width={100}
            height={100}
            className="w-10/12 h-auto mx-auto"
          />
          <Marquee>
            <div className="bg-orange-600 text-white opacity-90 font-extrabold px-5">
              अयोध्या राम मंदिर उद्घाटन की तारीख तारीख 22 जनवरी 2024 हैं।
            </div>
          </Marquee>
        </div>
        <div className="bg-red-400 w-4 z-10 flex-shrink-0"></div>
      </div>
    </>
  );
};

export default page;
