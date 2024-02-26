// pages/api/profile.ts

export default async function getSpotifyProfile() {
  const accessToken = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

  try {
    const response = await fetch("https://api.spotify.com/v1/users/shwoods35", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch profile");
    }

    const profile = await response.json();
    return profile;
  } catch (error) {}
}
