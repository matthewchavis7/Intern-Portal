import React from "react";
import ContactContentHeader from "../components/Header";
import Header from "../components/Header";
import HerndonCard from "../components/HerndonCards";
import PinnacleCards from "../components/PinnacleCards";
import { Inter, Newsreader, Roboto } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const page = () => {
  return (
    <>
      <main className={`pt-16 flex flex-col items-center ${inter.className}`}>
        <Header />
        <div className="mt-4">
          <p className="text-blue-700 text-xl text-center py-6">Meet</p>
          <div>
            <p className="text-5xl text-center py-6">The Team</p>
            <HerndonCard />
          </div>
          <div className="mt-4">
            <p className="text-5xl">Huntsville</p>
            <PinnacleCards />
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
