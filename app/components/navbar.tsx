import Image from "next/image";
import Link from "next/link";
import React from "react";
import homeurl from "../../public/home-2-svgrepo-com.svg";
import BlogSVG from "../../public/journal-bookmark-fill-svgrepo-com.svg";
import MusicSVG from "../../public/music-svgrepo-com.svg";
import AboutSVG from "../../public/user-svgrepo-com.svg";

type NavitemProp = {
  text: string;
  emoji: string;
};

const Navbar = () => {
  return (
    <div className="flex flex-col p-5 min-h-screen">
      <Navitem text="About" emoji="📝" />
      <Navitem text="Experience" emoji="💼" />
      <Navitem text="Music" emoji="🎧" />
      <Navitem text="Books" emoji="📚" />
      <Navitem text="Contact" emoji="☎️" />
    </div>
  );
};

const Navitem = (navitem: NavitemProp) => {
  const lowerCase: string = navitem.text.toLowerCase();
  return (
    <div className="flex flex-row m-5 gap-4 justify-start">
      <Link className="" href={"/" + navitem.text.toLowerCase()}>
        <p className="text-2xl">{navitem.text}</p>
      </Link>
      <div className="text-2xl">{navitem.emoji}</div>
    </div>
  );
};

export default Navbar;
