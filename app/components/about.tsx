"use client";

import Image from "next/image";
import React from "react";

const About = React.forwardRef<HTMLDivElement>(
  ({}, ref: React.ForwardedRef<HTMLDivElement>) => {
    const unhLink = (
      <a href="https://www.unh.edu/" className="text-blue-400">
        University of New Hampshire
      </a>
    );

    const fidelityLink = (
      <a href="https://www.fidelity.com/" className="text-blue-400">
        Fidelity Investments
      </a>
    );

    const wrestlingLink = (
      <a
        href="https://campusrec.unh.edu/programs/sport-clubs/wrestling"
        className="text-blue-400"
      >
        UNH Wrestling Club
      </a>
    );

    const imapLink = (
      <a
        href="https://imap.princeton.edu/engagement/student-collaboration"
        className="text-blue-400"
      >
        IMAP Student Collaboration
      </a>
    );

    const leapLink = (
      <a href="https://jobs.fidelity.com/leap/" className="text-blue-400">
        Fidelity LEAP
      </a>
    );

    return (
      <div ref={ref} className="flex flex-col w-full items-center pt-10">
        <div className="w-11/12 py-6 px-12 text-xl leading-relaxed dark:text-slate-200">
          Hi! My name is Shane and I am currently a senior studying Computer
          Science at the {unhLink}. After I graduate, I'll be working as a Full
          Stack Software Engineer at {fidelityLink}.
        </div>
        <div className="w-11/12 pb-6 px-12 text-xl leading-relaxed dark:text-slate-200">
          During my time at UNH, I was lucky to be a part of some fun projects.
          In the fall of my sophmore year, I took over as the {wrestlingLink}{" "}
          President and was also named Team Captain. Also during my sophmore
          year, I joined the {imapLink}, a NASA funded mission comprised of
          graduate and undergraduate students building a small satellite called
          a CubeSat, and sending it into space.
        </div>
        <div className="w-11/12 pb-6 px-12 text-xl leading-relaxed dark:text-slate-200">
          These fantastic opprotunities that I was fortunate to take part in,
          allowed me to land an internship at Fidelity to pursue my true
          passion, software engineering. I completed my internship this summer
          as a part of the {leapLink} program, and will be returning full-time
          as a Full-Stack Software Engineer in summer 2024. Below you can find
          out more about my work experience, what I'm reading, and how to
          contact me!
        </div>
      </div>
    );
  }
);

export default About;
