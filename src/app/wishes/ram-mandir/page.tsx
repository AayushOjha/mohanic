"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useSearchParams } from "next/navigation";
import { getTimeLeft } from "@/helpers/getLeftTime";
import moment from "moment";
import "animate.css";

type Props = {};
const flags = Array(35).fill(null);

const Page = (props: Props) => {
  const searchParams = useSearchParams();
  const paramName = searchParams.get("name");
  const name = paramName || "राम भक्त";
  const date = moment("2024-01-22");

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(date));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="flex overflow-hidden">
        <div className="w-6 h-full overflow-hidden">
          <div className="animate-marquee ml-1">
            {flags.map((flag, i) => (
              <div key={i}>
                <Image
                  src="https://res.cloudinary.com/dca1rzsyb/image/upload/v1703913216/mohannic/wishes/bhagwa1_hyfkwu.png"
                  width={30}
                  height={30}
                  className="py-1"
                  alt="ram mandir flag"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-7 py-10">
          <div className="w-fit mx-auto text-2xl font-semibold">
            <h1 className="animate__animated animate__swing animate__slow animate__infinite bg-gradient-to-r from-green-500 via-orange-500 to-violet-500 bg-clip-text text-transparent font-extrabold">
              {name}
            </h1>
          </div>
          <div
          // className="animate__animated animate__rubberBand animate__repeat-3	animate__slower"
          >
            <Image
              src="https://res.cloudinary.com/dca1rzsyb/image/upload/v1703913198/mohannic/wishes/kitrf_eyw2my.png"
              width={100}
              height={100}
              className="w-1/2 h-auto mx-auto"
              alt="Ram mandir badhai ki taraf se text"
            />
          </div>
          <div className="s">
            <p className="text-center font-bold text-green-500">
              {timeLeft.days} <span className="text-red-500"> दिन, </span>
              {timeLeft.hours}
              <span className="text-red-500"> घंटे, </span>
              {timeLeft.minutes}
              <span className="text-red-500"> मिनट, </span>
              {timeLeft.seconds}
              <span className="text-red-500"> सेकंड </span>
              <span className="text-red-500"> पहले</span>
            </p>
          </div>

          <Image
            src="https://res.cloudinary.com/dca1rzsyb/image/upload/v1703913713/mohannic/wishes/mainr_zrzjoj.png"
            alt="Ram mandir subh aarambh wish text"
            width={100}
            height={100}
            className="w-10/12 h-auto mx-auto animate__animated animate__infinite animate__pulse animate__slower"
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
        <div className="w-6 overflow-hidden">
          <div className="animate-marquee2 ml-1">
            {flags.map((flag, i) => (
              <div key={i}>
                <Image
                  src="https://res.cloudinary.com/dca1rzsyb/image/upload/v1703913216/mohannic/wishes/bhagwa1_hyfkwu.png"
                  width={30}
                  height={30}
                  className="py-1"
                  alt="ram mandir flag"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
