import Image from "next/image";
import Link from "next/link";
import React from "react";
import home from "../../public/home-2-svgrepo-com.svg";
import blog from "../../public/blog-comment-edit-svgrepo-com.svg";
import random from "../../public/random-1dice-svgrepo-com.svg";
import about from "../../public/user-svgrepo-com.svg";

type NavitemProp = {
  text: string;
  img: string;
};

const Navbar = () => {
  return (
    <div className="flex flex-col justify-start p-5 min-h-screen border-r-2 border-r-black">
      <Navitem text="Home" img={home} />
      <Navitem text="Blog" img={blog} />
      <Navitem text="Random" img={random} />
      <Navitem text="About" img={about} />
    </div>
  );
};

const Navitem = (navitem: NavitemProp) => {
  return (
    <div className="flex flex-row items-center justify-start m-5">
      <Link className="mr-2" href={"/" + navitem.text}>
        <p className="text-2xl">{navitem.text}</p>
      </Link>
      <Image src={navitem.img} alt="navbar item" height={25} width={25} />
    </div>
  );
};

export default Navbar;
