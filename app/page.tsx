import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row">
        <Navbar />
        <div className="flex flex-col min-h-screen items-center m-5 justify-between">
          <p className="font-bold text-3xl">
            Shane Woods&apos;s Personal Website
          </p>
          <p className="text-lg">Version 2.0</p>
        </div>
      </div>
    </main>
  );
}
