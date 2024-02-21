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

    return (
      <div ref={ref} className="flex flex-col w-full pt-16 items-center">
        <h1 className="dark:text-slate-200">
          Display your Spotify profile data
        </h1>

        <section id="profile">
          <h2 className="dark:text-slate-200">
            Logged in as <span id="displayName"></span>
          </h2>
          <span id="avatar"></span>
          <ul>
            <li className="dark:text-slate-200">
              User ID: <span id="id"></span>
            </li>
            <li className="dark:text-slate-200">
              Email: <span id="email"></span>
            </li>
            <li className="dark:text-slate-200">
              Spotify URI: <a id="uri" href="#"></a>
            </li>
            <li className="dark:text-slate-200">
              Link: <a id="url" href="#"></a>
            </li>
            <li className="dark:text-slate-200">
              Profile Image: <span id="imgUrl"></span>
            </li>
          </ul>
        </section>
      </div>
    );
  }
);

export default Music;
