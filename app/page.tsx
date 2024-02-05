"use client";
import { MouseEventHandler } from "react";
import About from "./components/about";
import Books from "./components/books";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Music from "./components/music";
import Navbar from "./components/navbar";

const Home = () => {
  const handleClick = (targetId: string) => {
    console.log(`targetId: ${targetId}`);
    const targetElement = document.getElementById(targetId);
    console.log(`target: ${targetElement}`);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust the offset based on your layout
        behavior: "smooth",
      });
    }
  };

  return (
    <main>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <Navbar handleClick={handleClick} />
        </div>
        <div className="flex flex-col justify-center w-full">
          <div className="flex flex-col min-h-screen m-5 justify-evenly">
            <div className="flex flex-col items-center">
              <About />
              <Experience />
              <Music />
              <Books />
              <Contact />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;
