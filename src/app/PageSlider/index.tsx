"use client";

import { BgColors } from "@/constant";
// import useContentful from "@/helpers/fetchJokes";
import { BsWhatsapp } from "react-icons/bs";
import { IJoke } from "@/interfaces";
import React, { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import ReactGA from "react-ga4";

interface IProps {
  jokes: IJoke[];
}

function PageSlider({ jokes }: IProps) {
  const scrollableDivRef = useRef<HTMLUListElement>(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  // useContentful()
  //   .getJokes()
  //   .then((jokes) => {
  //     console.log(jokes?.items.map((item) => item.fields));
  //   });

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
      <ul
        ref={scrollableDivRef}
        className="w-screen h-[100dvh] overflow-auto snap-x snap-mandatory scroll-smooth flex no-sidebar-visibility"
      >
        {jokes.map((joke, index) => {
          const bgColor = BgColors[index % 10];
          return (
            <li
              key={index}
              id={joke.slug}
              style={{ backgroundColor: bgColor }}
              className="w-full h-full pt-40 pb-16 p-4 flex-shrink-0 snap-start leading-8 text-white overflow-hidden flex flex-col"
            >
              <div className="max-w-xl mx-auto flex-1">
                <Markdown>{joke.content}</Markdown>
              </div>

              <div
                className="w-fit mx-auto"
                onClick={() => {
                  ReactGA.event({
                    category: "Joke | bhilwara jokes",
                    action: "share",
                  });
                  const whatsappURL = `https://api.whatsapp.com/send?text=https://mohannic.com/jokes/bhilwara-jokes/`;
                  window.open(whatsappURL, "_blank");
                }}
              >
                <BsWhatsapp size="2rem" />
              </div>
            </li>
          );
        })}
      </ul>

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
