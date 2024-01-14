// server/pages/api/liked-songs.ts

import { NextApiRequest, NextApiResponse } from "next";
import { getLikedSongs } from "../../utils/spotify-api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Example usage of getLikedSongs function
    const likedSongs = await getLikedSongs();
    res.status(200).json({ likedSongs });
  } catch (error) {
    console.error("Error fetching liked songs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
