"use client";
import { MutableRefObject, RefObject, useRef } from "react";
import About from "./components/about";
import Books from "./components/books";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Music from "./components/music";
import Navbar from "./components/navbar";

const Home = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const musicRef = useRef<HTMLDivElement>(null);
  const booksRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleClick = (targetId: string) => {
    const targetRef: RefObject<HTMLElement> | null = getTargetRef(targetId);
    if (targetRef && targetRef.current) {
      const y = targetRef.current.getBoundingClientRect().top;
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getTargetRef = (targetId: string) => {
    switch (targetId) {
      case "home":
        return homeRef;
      case "about":
        return aboutRef;
      case "experience":
        return experienceRef;
      case "music":
        return musicRef;
      case "books":
        return booksRef;
      case "contact":
        return contactRef;
      default:
        return null;
    }
  };

  return (
    <main>
      <div className="flex flex-row">
        <Navbar handleClick={handleClick} />
        <div ref={homeRef} className=" absolute left-72 flex flex-col ">
          <div className="flex flex-col items-center min-h-screen m-5 justify-evenly">
            <About ref={aboutRef} />
            <Experience ref={experienceRef} />
            <Music ref={musicRef} />
            <Books ref={booksRef} />
            <Contact ref={contactRef} />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;
