import Image from "next/image";
import Link from "next/link";
import React, { MouseEventHandler, useState } from "react";

type NavbarProp = {
  handleClick: (targetId: string) => void;
};

const Navbar = (prop: NavbarProp) => {
  const [selected, setSelected] = useState<string>("");
  const handleClick = (link: string) => {
    setSelected(link);
    prop.handleClick(link);
  };
  return (
    <>
      <div className="fixed flex flex-col p-5 min-w-max min-h-screen bg-slate-50 dark:bg-slate-900">
        <Name handleClick={() => handleClick("home")} />
        <Navitem
          text="About"
          emoji="📝"
          handleClick={() => handleClick("about")}
          selected={selected}
        />
        <Navitem
          text="Experience"
          emoji="💼"
          handleClick={() => handleClick("experience")}
          selected={selected}
        />
        <Navitem
          text="Books"
          emoji="📚"
          handleClick={() => handleClick("books")}
          selected={selected}
        />
        <Links />
      </div>
    </>
  );
};

type NameProp = {
  handleClick: (targetId: string) => void;
};

const Name = (prop: NameProp) => {
  const onClick = () => {
    const targetId = "home";
    prop.handleClick(targetId);
  };
  return (
    <div className="flex flex-col p-3 m-3 items-start">
      <div
        onClick={onClick}
        className="font-bold text-3xl text-center cursor-pointer dark:text-slate-200"
      >
        Shane Woods
      </div>
      <div className="w-52 text-sm font-semibold mt-2 dark:text-slate-200">
        Full Stack Engineer at Fidelity Investments
      </div>
    </div>
  );
};

const Links = () => {
  const gmail_url: string =
    "https://uolyxvlqilyhwhgtuqah.supabase.co/storage/v1/object/sign/website-logos/gmail-svgrepo-com.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlLWxvZ29zL2dtYWlsLXN2Z3JlcG8tY29tLnBuZyIsImlhdCI6MTcwNzA5NjU1NiwiZXhwIjoyMDIyNDU2NTU2fQ.xoOvElafzDLv9d6kfLGI25M8smlgAcidSIO6qR3fKYA&t=2024-02-05T01%3A29%3A16.769Z";
  const linkedin_url: string =
    "https://uolyxvlqilyhwhgtuqah.supabase.co/storage/v1/object/sign/website-logos/linkedin-svgrepo-com.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlLWxvZ29zL2xpbmtlZGluLXN2Z3JlcG8tY29tLnBuZyIsImlhdCI6MTcwNzA5NjYyMSwiZXhwIjoyMDIyNDU2NjIxfQ.x-UrtsJn447GUNNnlL9zrZfyVM4Jz5S3S-Ads5mh5eM&t=2024-02-05T01%3A30%3A21.802Z";
  const spotify_url: string =
    "https://uolyxvlqilyhwhgtuqah.supabase.co/storage/v1/object/sign/website-logos/spotify-color-svgrepo-com.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlLWxvZ29zL3Nwb3RpZnktY29sb3Itc3ZncmVwby1jb20ucG5nIiwiaWF0IjoxNzA3MDk2NjM4LCJleHAiOjIwMjI0NTY2Mzh9.6cGwuLfglUQtGzew4OPEKnAJ0UrPi89VuYZaA3USYlk&t=2024-02-05T01%3A30%3A38.215Z";
  return (
    <div className="flex flex-row p-5 space-x-3">
      <Link href="mailto:shwoods35@gmail.com">
        <Image src={gmail_url} height={30} width={30} alt="Gmail logo" />
      </Link>
      <Link href="https://www.linkedin.com/in/shane-woods-cs/">
        <Image src={linkedin_url} height={30} width={30} alt="LinkedIn logo" />
      </Link>
      <Link href="https://open.spotify.com/user/shwoods35">
        <Image src={spotify_url} height={30} width={30} alt="Spotify logo" />
      </Link>
    </div>
  );
};

type NavitemProp = {
  text: string;
  emoji: string;
  selected: string;
  handleClick: (targetId: string) => void;
};

const Navitem = (navitem: NavitemProp) => {
  const onClick = () => {
    const targetId = `${navitem.text.toLowerCase()}`;
    navitem.handleClick(targetId);
  };
  const isActive: boolean =
    navitem.selected === `${navitem.text.toLowerCase()}`;
  const className: string = isActive
    ? "text-blue-400 border-b-2 border-blue-400 text-2xl dark:text-blue-400"
    : "border-transparent border-b-2 hover:border-blue-400 text-2xl dark:text-slate-200";
  return (
    <div
      onClick={onClick}
      className="inline-flex flex-row m-3 gap-4 justify-start p-2 cursor-pointer"
    >
      <p className={className}>{navitem.text}</p>
      <div className="text-2xl">{navitem.emoji}</div>
    </div>
  );
};

export default Navbar;
