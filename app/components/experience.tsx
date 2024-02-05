"use client";
import React from "react";
import Navbar from "./navbar";

const Experience = React.forwardRef<HTMLDivElement>(
  ({}, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        className="flex flex-col space-y-10 w-full items-center justify-center pt-16"
      >
        <ExperienceCard
          company="Fidelity Investments"
          title="Full Stack Software Engineer"
          date="Starting June 2024"
          description="Front and Backend developer"
        />
        <ExperienceCard
          company="Fideliy Investments"
          title="Full Stack Enginering Intern"
          date="June 2023 - August 2023"
          description="Created Power BI Reports for the Cloud Data Analytics team in the CAPE business unit"
        />
        <ExperienceCard
          company="IMAP Student Collaboration"
          title="Research Assitant"
          date="Since November 2021"
          description="Developed firmware for scientific instruments on a NASA funded research project to build and deploy a small satellite called a CubeSat"
        />
        <ExperienceCard
          company="UNH Wrestling Club"
          title="President and Captain"
          date="November 2021 - November 2022"
          description="Planned tournaments, coordinated meetings & managed club's finances"
        />
      </div>
    );
  }
);

type CardProp = {
  company: string;
  title: string;
  date: string;
  description: string;
};
const ExperienceCard = (info: CardProp) => {
  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.7)] flex flex-col space-y-3 h-auto p-5 border w-11/12 rounded-lg">
      <div className="font-bold text-2xl">{info.title}</div>
      <div className="text-lg">{info.company}</div>
      <div className="text-sm text-gray-500">{info.date}</div>
      <div className="text-sm">{info.description}</div>
    </div>
  );
};

export default Experience;
