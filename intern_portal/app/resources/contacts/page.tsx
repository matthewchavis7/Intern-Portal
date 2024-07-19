import React from "react";
import ContactContentHeader from "../components/Header";
import Header from "../components/Header";
import HerndonCard from "../components/HerndonCards";
import PinnacleCards from "../components/PinnacleCards";
const page = () => {
  return (
    <div className="flex flex-col items-center">
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
    </div>
  );
};

export default page;
