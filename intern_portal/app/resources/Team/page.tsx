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
            <p className="text-8xl text-center py-6">The Team</p>
            <p className="text-7xl text-center mt-12 mb-12 text-blue-500">
              Akima
            </p>
            <HerndonCard />
          </div>
          <div className="mt-24">
            <p className="text-7xl text-center mb-12 text-green-600">
              Pinnacle Solutions
            </p>
            <PinnacleCards />
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
