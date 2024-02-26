// components/Profile.tsx
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Profile = {
  display_name: string;
  external_urls: string[];
  images: any[];
  href: string;
  id: string;
  type: string;
  uri: string;
};

const SpotifyProfile = () => {
  return (
    <div className="flex flex-col items-center bg-black p-5 rounded-lg text-2xl">
      <p className="text-white">{}</p>
    </div>
  );
};

export default SpotifyProfile;
