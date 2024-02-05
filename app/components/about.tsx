"use client";

import React from "react";

const About = React.forwardRef<HTMLDivElement>(
  ({}, ref: React.ForwardedRef<HTMLDivElement>) => {
    return <div ref={ref} className="flex flex-row"></div>;
  }
);

export default About;
