"use client";

import { BgColors } from "@/constant";
import { IJoke } from "@/interfaces";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";

interface IProps {
  jokes: IJoke[];
}

function PageSlider({ jokes }: IProps) {
  const scrollableDivRef = useRef<HTMLDivElement>(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    if (scrollableDivRef.current) {
      const position = scrollableDivRef.current.scrollLeft;
      setScrollPosition(position);
    }
  };

  useEffect(() => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollableDivRef.current) {
        scrollableDivRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={scrollableDivRef}
        className="w-screen h-screen overflow-auto snap-x snap-mandatory scroll-smooth flex no-sidebar-visibility"
      >
        {jokes.map((joke, index) => {
          const bgColor = BgColors[index % 10];
          return (
            <div
              key={index}
              id={joke.slug}
              style={{ backgroundColor: bgColor }}
              className="w-full h-full pt-48 p-4 flex-shrink-0 snap-start leading-8 text-white overflow-hidden"
            >
              <div className="w-full max-w-xl m-auto">
                <Markdown>{joke.content}</Markdown>
              </div>
            </div>
          );
        })}
      </div>

      {scrollPosition < 600 ? (
        <div className="absolute z-10 bottom-10 w-40 left-1/2">
          <img
            src={
              "https://res.cloudinary.com/dca1rzsyb/image/upload/v1699790486/mohannic/swipe_ucsc80.gif"
            }
            alt="navigation helper"
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export { PageSlider };
