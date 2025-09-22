import React from "react";
import navLogo from "../assets/logo.png";
import "./navbar.css";

const Navbar = ({ balance }) => {
  return (
    <div className="px-4 md:px-10 lg:px-20 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-10 py-2">
          <img src={navLogo} alt="" />
        </div>
        <div className="flex gap-10 items-center">
          <ul className="md:flex items-center gap-8 text-neutral-500 hidden">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>
          <p className="text-xl font-bold">
            ${" "}
            <span
              id="balance"
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full mr-1"
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
