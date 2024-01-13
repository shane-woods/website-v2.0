import Footer from "./components/footer";
import Links from "./components/links";
import Name from "./components/name";
import Navbar from "./components/navbar";

const Home = () => {
  return (
    <main>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <Name />
          <Navbar />
          <Links />
        </div>
        <div className="flex flex-col justify-center w-full">
          <div className="flex flex-col min-h-screen m-5 justify-evenly">
            <div className="flex flex-col items-center"></div>
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;
