// app/music/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./navbar";

const Music = React.forwardRef<HTMLDivElement>(
  ({}, ref: React.ForwardedRef<HTMLDivElement>) => {
    const [likedSongs, setLikedSongs] = useState([]);

    // useEffect(() => {
    //   const fetchLikedSongs = async () => {
    //     try {
    //       // Fetch liked songs from the API route
    //       const response = await fetch("/api/liked-songs");
    //       const data = await response.json();

    //       setLikedSongs(data.likedSongs);
    //     } catch (error) {
    //       console.error("Error fetching liked songs:", error);
    //     }
    //   };

    //   fetchLikedSongs();
    // }, []); // Run the effect only once on mount

    return <div ref={ref} className="flex flex-row w-full pt-16"></div>;
  }
);

export default Music;
