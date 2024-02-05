"use client";

import Image from "next/image";
import React from "react";

const About = React.forwardRef<HTMLDivElement>(
  ({}, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className="flex flex-col w-full items-center pt-16">
        <div className="flex w-11/12 items-center py-6 px-12 text-2xl text-center">
          Hi! My name is Shane and I am currently a senior studying Computer
          Science at the University of New Hampshire. After I graduate, I'll be
          working as a Full Stack Software Engineer at Fidelity Investments.
        </div>
      </div>
    );
  }
);

export default About;
