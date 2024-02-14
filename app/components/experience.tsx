"use client";
import React, { useState } from "react";
import Navbar from "./navbar";

type ExpProp = {
  company: string;
  title: string;
  date: string;
  description: string;
};

const Experience = React.forwardRef<HTMLDivElement>(
  ({}, ref: React.ForwardedRef<HTMLDivElement>) => {
    const [index, setIndex] = useState<number>(0);
    const [fidelityClass, setFidelityClass] = useState<string>(
      "cursor-pointer border-l-2 border-black p-2 hover:border-blue-400"
    );
    const [imapClass, setImapClass] = useState<string>(
      "cursor-pointer border-l-2 border-black p-2 hover:border-blue-400"
    );
    const [unhClass, setUnhClass] = useState<string>(
      "cursor-pointer border-l-2 border-black p-2 hover:border-blue-400"
    );
    const experiences: ExpProp[] = [
      {
        company: "Fidelity",
        title: "Full Stack Software Engineer",
        date: "Starting June 2024",
        description:
          "Previously interned at Fidelity during summer 2023, going back full time in June 2024",
      },
      {
        company: "IMAP Student Collaboration",
        title: "Research Assitant",
        date: "Since November 2021",
        description:
          "Developed firmware for scientific instruments on a NASA funded research project to build and deploy a small satellite called a CubeSat",
      },
      {
        company: "UNH Wrestling Club",
        title: "President and Captain",
        date: "November 2021 - November 2022",
        description:
          "Planned tournaments, coordinated meetings & managed club's finances",
      },
    ];

    const handleClick = (n: number) => {
      setIndex(n);
      switch (n) {
        case 0:
          setFidelityClass("cursor-pointer p-2 border-l-2 border-blue-400");
          setImapClass(
            "cursor-pointer border-l-2 border-black p-2 hover:border-blue-400"
          );
          setUnhClass(
            "cursor-pointer border-l-2 border-black p-2 hover:border-blue-400"
          );
          break;
        case 1:
          setImapClass("cursor-pointer p-2 border-l-2 border-blue-400");
          setUnhClass(
            "cursor-pointer border-l-2 border-black p-2 hover:border-blue-400"
          );
          setFidelityClass(
            "cursor-pointer border-l-2 border-black p-2 hover:border-blue-400"
          );
          break;
        case 2:
          setUnhClass("cursor-pointer p-2 border-l-2 border-blue-400");
          setImapClass(
            "cursor-pointer border-l-2 border-black p-2 hover:border-blue-400"
          );
          setFidelityClass(
            "cursor-pointer border-l-2 border-black p-2 hover:border-blue-400"
          );
          break;
      }
    };

    return (
      <div
        ref={ref}
        className="flex flex-row space-x-10 w-full items-center justify-center pt-16"
      >
        <div className="flex flex-col h-auto min-w-max">
          <div className={fidelityClass} onClick={() => handleClick(0)}>
            Fidelity
          </div>
          <div className={imapClass} onClick={() => handleClick(1)}>
            IMAP
          </div>
          <div className={unhClass} onClick={() => handleClick(2)}>
            UNH Wrestling
          </div>
        </div>
        <ExperienceCard
          company={experiences[index].company}
          title={experiences[index].title}
          date={experiences[index].date}
          description={experiences[index].description}
        />
      </div>
    );
  }
);

const ExperienceCard = (info: ExpProp) => {
  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.7)] flex flex-col space-y-3 p-5 border w-5/6 rounded-lg">
      <div className="font-bold text-2xl">{info.title}</div>
      <div className="text-lg">{info.company}</div>
      <div className="text-sm text-gray-500">{info.date}</div>
      <div className="text-sm">{info.description}</div>
    </div>
  );
};

export default Experience;
