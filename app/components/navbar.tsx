import Image from "next/image";
import Link from "next/link";
import React, { MouseEventHandler } from "react";
import { usePathname } from "next/navigation";

type NavitemProp = {
  text: string;
  emoji: string;
  handleClick: (targetId: string) => void;
};

type NavbarProp = {
  handleClick: (targetId: string) => void;
};

const Navbar = (prop: NavbarProp) => {
  return (
    <>
      <div className="fixed flex flex-col p-5 min-w-max justify-evenly min-h-screen">
        <Name />
        <Navitem text="About" emoji="📝" handleClick={prop.handleClick} />
        <Navitem text="Experience" emoji="💼" handleClick={prop.handleClick} />
        <Navitem text="Music" emoji="🎧" handleClick={prop.handleClick} />
        <Navitem text="Books" emoji="📚" handleClick={prop.handleClick} />
        <Navitem text="Contact" emoji="☎️" handleClick={prop.handleClick} />
        <Links />
      </div>
    </>
  );
};

const Name = () => {
  return (
    <div className="flex flex-col p-3 m-3">
      <Link href="/">
        <div className="font-bold text-3xl text-center">Shane Woods</div>
      </Link>
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
    <div className="flex flex-row p-5 space-x-3 ">
      <Image src={gmail_url} height={30} width={30} alt="Gmail logo" />
      <Image src={linkedin_url} height={30} width={30} alt="LinkedIn logo" />
      <Image src={spotify_url} height={30} width={30} alt="Spotify logo" />
    </div>
  );
};

const Navitem = (navitem: NavitemProp) => {
  const onClick = () => {
    const targetId = `${navitem.text.toLowerCase()}`;
    navitem.handleClick(targetId);
  };
  const pathname = usePathname();
  const isActive: boolean = pathname === `/${navitem.text.toLowerCase()}`;
  const className: string = isActive
    ? "text-blue-400 border-b-2 border-blue-400 text-2xl"
    : "border-transparent border-b-2 hover:border-blue-400 text-2xl";
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
