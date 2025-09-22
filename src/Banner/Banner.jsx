import React from "react";
import "./banner.css";
import heroImg from "../assets/banner-main.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-20">
      <div className="hero-section p-16 rounded-4xl ">
        <div className="grid gap-4 justify-center text-center">
          <img className="mx-auto" src={heroImg} alt="" />
          <h2 className="text-4xl font-semibold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>
          <h4 className="text-2xl">
            Beyond Boundaries Beyond Limits
          </h4>
          <button className="text-2xl bg-blue-600 text-white font-semibold px-6 py-3 animate-pulse rounded-2xl w-fit mx-auto mt-4">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
