"use client";
import { RefObject, useRef } from "react";
import About from "./components/about";
import Books from "./components/books";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { ThemeButton } from "./components/themebutton";

const Home = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const booksRef = useRef<HTMLDivElement>(null);

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
      case "books":
        return booksRef;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row  bg-slate-50 dark:bg-slate-900">
      <Navbar handleClick={handleClick} />
      <div
        ref={homeRef}
        className="absolute left-72 flex flex-col bg-slate-50 dark:bg-slate-900"
      >
        <div className="flex flex-col items-center min-h-screen m-5 justify-evenly">
          <ThemeButton />
          <About ref={aboutRef} />
          <Experience ref={experienceRef} />
          <Books ref={booksRef} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
