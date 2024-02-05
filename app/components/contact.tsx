"use client";
import React from "react";

const Contact = React.forwardRef<HTMLDivElement>(
  ({}, ref: React.ForwardedRef<HTMLDivElement>) => {
    return <div ref={ref} className="flex flex-row w-full pt-16"></div>;
  }
);

export default Contact;
