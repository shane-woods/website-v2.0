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
    <>
      <Name />
      <div className="flex flex-col p-5 min-h-screen">
        <Navitem text="About" emoji="📝" />
        <Navitem text="Experience" emoji="💼" />
        <Navitem text="Music" emoji="🎧" />
        <Navitem text="Books" emoji="📚" />
        <Navitem text="Contact" emoji="☎️" />
      </div>
      <Links />
    </>
  );
};

const Name = () => {
  return (
    <div className="flex flex-col p-5">
      <Link href="/">
        <div className="text-sm text-center">Hello my name is</div>
        <div className="font-bold text-lg text-center">
          &lt;Shane Woods&nbsp;&#47;&gt;
        </div>
      </Link>
    </div>
  );
};

const Links = () => {
  return (
    <div className="flex flex-col items-center">
      <LinkIcon label="email" />
      <LinkIcon label="linkedin" />
      <LinkIcon label="spotify" />
    </div>
  );
};

const LinkIcon = (props: { label: string }) => {
  return <div>{props.label}</div>;
};

const Navitem = (navitem: NavitemProp) => {
  return (
    <Link className="" href={"/" + navitem.text.toLowerCase()}>
      <div className="flex flex-row m-5 gap-4 justify-start">
        <p className="text-2xl">{navitem.text}</p>
        <div className="text-2xl">{navitem.emoji}</div>
      </div>
    </Link>
  );
};

export default Navbar;
