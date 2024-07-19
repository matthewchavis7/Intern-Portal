import React from "react";

const Header = () => {
  return (
    <div
      className="hero min-w-screen"
      style={{
        backgroundImage: "url(/MeetTeam.jpg)",
        minHeight: "500px",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Coming onboard means joining the family
          </h1>
          <p>
            Joining Akima isn't just stepping into a workplace; it's becoming
            part of a dynamic global family. Together, we're not only powering
            critical and cutting-edge work for the federal government but also
            creating a supportive community where every member is valued. From
            day one, you'll feel the warmth and strength of our collective
            spirit, united by a shared commitment to excellence and innovation.
            Joining Akima means joining a family that celebrates diversity,
            fosters growth, and thrives on collaboration to make a meaningful
            impact in the world. Welcome to our family, where your contributions
            are not just appreciated but cherished.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header;
