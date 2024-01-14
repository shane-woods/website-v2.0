// app/music/page.tsx
"use client";
import React, { useState, useEffect } from "react";

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
    <div>
      <h1>My Liked Songs</h1>
      <ul>
        {/* {likedSongs.map((song) => (
          <li key={song.id}>
            {song.name} by {song.artists[0].name}
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Music;
