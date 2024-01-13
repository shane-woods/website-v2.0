import Image from "next/image";
import Link from "next/link";
import React from "react";
import homeurl from "../../public/home-2-svgrepo-com.svg";
import BlogSVG from "../../public/journal-bookmark-fill-svgrepo-com.svg";
import MusicSVG from "../../public/music-svgrepo-com.svg";
import AboutSVG from "../../public/user-svgrepo-com.svg";

type NavitemProp = {
  text: string;
  img: any;
};

const Navbar = () => {
  return (
    <div className="flex flex-col p-5 min-h-screen">
      <Navitem text="About" img={""} />
      <Navitem text="Experience" img={""} />
      <Navitem text="Music" img={""} />
      <Navitem text="Contact" img={""} />
    </div>
  );
};

const Navitem = (navitem: NavitemProp) => {
  return (
    <div className="flex flex-row m-5">
      <Link className="" href={"/" + navitem.text}>
        <p className="text-2xl">{navitem.text}</p>
      </Link>
      {/* <img src={""} style={{ height: 50, width: 50 }} alt="navigation image" /> */}
    </div>
  );
};

export default Navbar;
