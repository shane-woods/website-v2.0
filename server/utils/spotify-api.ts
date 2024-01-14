// server/utils/spotify-api.ts

import axios from "axios";

export async function getLikedSongs() {
  try {
    // Fetch access token and set it to state
    // Implement Spotify authentication flow here

    // Fetch liked songs using the Spotify API
    const accessToken =
      "BQCGgnBjUqZ6oRFcgUE5TlY9VdztrDAK8uCZYkSGWB8roICrjw9RXgAc4kPkxMWgevS_j4oe9J08fkddmEO4HYmKtPk-eDov1102qDq_IkaiVn1NR0g"; // Replace with actual access token
    const response = await axios.get("https://api.spotify.com/v1/me/tracks", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data.items;
  } catch (error) {
    console.error("Error fetching liked songs:", error);
    throw error;
  }
}
