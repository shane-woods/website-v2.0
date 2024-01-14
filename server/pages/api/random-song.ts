// server/pages/api/random-song.ts

import { NextApiRequest, NextApiResponse } from "next";
import { getLikedSongs } from "../../utils/spotify-api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Fetch liked songs using the Spotify API utility
    const likedSongs = await getLikedSongs();

    // Select a random song
    const randomIndex = Math.floor(Math.random() * likedSongs.length);
    const randomSong = likedSongs[randomIndex];

    res.status(200).json(randomSong);
  } catch (error) {
    console.error("Error fetching random song:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
