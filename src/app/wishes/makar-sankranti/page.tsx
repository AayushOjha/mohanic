"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getTimeLeft } from "@/helpers/getLeftTime";
import moment from "moment";
import "animate.css";
import { useRouter } from "next/navigation";
import { snakeCase, startCase } from "lodash";

type Props = {};
const flags = Array(35).fill(null);

const Page = (props: Props) => {
  const searchParams = useSearchParams();
  const paramName = searchParams.get("name");
  const name = startCase(paramName || "अपना नाम लिखे");
  const date = moment("2024-01-15");

  // const audioRef = useRef<HTMLAudioElement>(null);
  const router = useRouter();

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(date));
  const [inputName, setInputName] = useState("");
  const [displayState, setDisplayState] = useState({
    animation: false,
    visible: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(date));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const bellPressed = () => {
    // audioRef.current?.play();
    setDisplayState({ animation: true, visible: false });
    setTimeout(() => {
      setDisplayState({ animation: true, visible: true });
    }, 1000);
  };

  return (
    <>
      {/* <audio
        src="https://res.cloudinary.com/dca1rzsyb/video/upload/v1703991294/ram_tk08z6.mp3"
        ref={audioRef}
        loop
      /> */}

      <div
        className={`absolute top-0 left-0 w-full h-full z-20 ${
          displayState.visible ? "hidden" : ""
        }`}
      >
        <Image
          src="https://res.cloudinary.com/dca1rzsyb/image/upload/v1704379729/mohannic/wishes/makar-mobile_wdta7u.png"
          width={100}
          height={100}
          alt="makar sankranti wishes poster"
          className={`w-full h-full object-cover  ${
            displayState.animation
              ? "animate__animated animate__slideOutLeft"
              : ""
          } absolute top-0`}
        />
        <Image
          src="https://res.cloudinary.com/dca1rzsyb/image/upload/v1704379729/mohannic/wishes/makar-mobile_wdta7u.png"
          width={100}
          height={100}
          alt="makar sankranti wishes poster"
          className={`w-full h-full object-cover ${
            displayState.animation
              ? "animate__animated animate__slideOutRight"
              : ""
          } absolute top-0`}
        />

        <div
          className={`m-10 ml-20 z-30 absolute flex flex-col gap-10 ${
            displayState.animation ? "hidden" : ""
          }`}
          onClick={bellPressed}
        >
          <span className="text-3xl bg-white font-extrabold text-center p-2 text-blue-500 animate__animated animate__rubberBand animate__slower animate__infinite">
            पतंग को छुओ
          </span>
          <Image
            src="https://res.cloudinary.com/dca1rzsyb/image/upload/v1704380260/mohannic/wishes/makar-press-it_bu4uxz_iobtj0.png"
            width={100}
            height={100}
            style={{ animationDuration: "7s" }}
            alt="makar sankranti kite touch"
            className={`ml-10 animate__animated animate__shakeY animate__infinite`}
          />
        </div>
      </div>

      {/* Main page */}
      <div className="flex overflow-hidden">
        <div className="w-6 h-full overflow-hidden">
          <div className="animate-marquee ml-1">
            {flags.map((flag, i) => (
              <div key={i}>
                <Image
                  src="https://res.cloudinary.com/dca1rzsyb/image/upload/v1704380260/mohannic/wishes/makar-press-it_bu4uxz_iobtj0.png"
                  width={30}
                  height={30}
                  className="py-1"
                  alt="fling kite"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-7 py-10 pb-24">
          <div className="w-fit mx-auto text-2xl font-semibold">
            <h1 className="animate__animated animate__swing animate__slow animate__infinite bg-gradient-to-r from-green-500 via-orange-500 to-violet-500 bg-clip-text text-transparent font-extrabold">
              {name}
            </h1>
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/dca1rzsyb/image/upload/v1703913198/mohannic/wishes/kitrf_eyw2my.png"
              width={100}
              height={100}
              className="w-1/2 h-auto mx-auto"
              alt="festival wishes mohannic ki taraf se text"
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
            src="https://res.cloudinary.com/dca1rzsyb/image/upload/v1704469268/mohannic/wishes/hero_wish_makar_2_tumnn3-removebg-preview_r9ews7.png"
            alt="happy makar sankranti text"
            width={100}
            height={100}
            className="w-10/12 h-auto mx-auto animate__animated animate__infinite animate__pulse animate__slower"
          />
          <div className="s">
            <Image
              src="https://res.cloudinary.com/dca1rzsyb/image/upload/v1704468071/mohannic/wishes/middle_makar_u3hi9b_jubooz.png"
              alt="happy makar sankranti wish photo"
              width={100}
              height={100}
              className="w-10/12 h-auto mx-auto"
            />
          </div>
          <Image
            src="https://res.cloudinary.com/dca1rzsyb/image/upload/v1704469322/mohannic/wishes/hero_wish_makar_ivemyq-removebg-preview_fird8g.png"
            alt="happy makar sankranti wish quote"
            width={100}
            height={100}
            className="w-10/12 h-auto mx-auto"
          />
        </div>
        <div className="w-6 overflow-hidden">
          <div className="animate-marquee2 ml-1">
            {flags.map((flag, i) => (
              <div key={i}>
                <Image
                  src="https://res.cloudinary.com/dca1rzsyb/image/upload/v1704380260/mohannic/wishes/makar-press-it_bu4uxz_iobtj0.png"
                  width={30}
                  height={30}
                  className="py-1"
                  alt="flying kite"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed CTA */}
      <div
        className={`fixed bottom-5 left-0 w-full z-40 px-3 flex gap-5 ${
          displayState.visible ? "" : "hidden"
        } `}
      >
        <div className="w-2/3 p-2 rounded text-white  border border-gray-900 bg-red-600 animate__animated animate__pulse animate__slow animate__infinite">
          <input
            type="text"
            value={inputName}
            onChange={({ currentTarget }) => {
              setInputName(currentTarget.value);
            }}
            placeholder="👉 अपना नाम लिखे"
            className="w-full bg-inherit outline-none placeholder-white text-center text-lg"
          ></input>
        </div>
        <div
          style={{ animationDuration: "7s" }}
          className={` ${
            inputName
              ? "bg-green-700 text-white animate__shakeX"
              : "bg-gray-400 text-gray-900"
          } rounded p-2 px-4 text-center text-lg border border-gray-900 animate__animated animate__infinite`}
          onClick={() => {
            if (inputName) {
              router.push(
                `/wishes/makar-sankranti/view?name=${snakeCase(inputName)}`
              );
            }
          }}
        >
          👉 देखें
        </div>
      </div>
    </>
  );
};

export default Page;
