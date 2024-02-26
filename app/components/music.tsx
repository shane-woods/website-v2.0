// app/music/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import SpotifyProfile from "./spotifyprofile";

const Music = React.forwardRef<HTMLDivElement>(
  ({}, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className="flex flex-col w-full pt-16 items-center">
        <SpotifyProfile />
      </div>
    );
  }
);

export default Music;
