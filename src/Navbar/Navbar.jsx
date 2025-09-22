import React from "react";
import navLogo from "../assets/logo.png";
import "./navbar.css";

const Navbar = ({ balance }) => {
  return (
    <div className="px-4 md:px-10 lg:px-20 w-full z-100 shadow-xl shadow-blue-900/50">
      <div className="container mx-auto flex items-center justify-between text-white">
          <img className="w-16 py-4" src={navLogo} alt="" />
        <div className="flex gap-10 items-center">
          <ul className="md:flex items-center gap-8 hidden">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>
          <p className="text-xl font-bold">
            ${" "}
            <span
              id="balance"
              className="bg-white/80 hover:bg-white/90 text-blue-800 ml-1 mr-3 px-3 py-2 rounded-full mr-1"
            >
              {balance}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
