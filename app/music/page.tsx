// app/music/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";

const Music: React.FC = () => {
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
    <div className="flex flex-row">
      <div className="flex flex-col">
        <Navbar />
      </div>
    </div>
  );
};

export default Music;
