import React from "react";
import Timeline from "./Components/timeline";

const page = () => {
  return (
    <div className="pt-16 flex flex-col items-center">
      <div className="max-w-6xl">
        <p className="text-5xl text-center py-6">Internship Timeline</p>
        <Timeline />;
      </div>
    </div>
  );
};

export default page;
