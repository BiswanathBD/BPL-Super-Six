import React from "react";
import "./footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 bg-black/50 pt-36 pb-32 mt-60 footer relative">
      <div className="absolute container max-w-10/12 top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] border border-white/50 rounded-3xl bg-white/5">
        <div className="newsletter p-10 md:px-32 md:py-16 m-3 rounded-2xl text-center">
          <h2 className="text-2xl font-bold w-full">
            Subscribe to our Newsletter
          </h2>
          <p className="text-neutral-500 w-full">
            Get the latest updates and news right in your inbox!
          </p>
          <form
            action="submit"
            className="w-full flex flex-wrap gap-2 justify-center mt-4"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              className="border border-neutral-300 rounded-xl py-2 px-4 outline-none md:w-80"
            />
            <button className="py-2 px-4 bg-gradient-to-r from-violet-400 to-orange-400 rounded-xl text-white font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-center w-full mt-4">
        <img className="w-32" src={logo} alt="" />
      </div>

      <div className="text-white container mx-auto px-4 md:px-10 lg:px-20 flex flex-wrap gap-20 justify-center lg:justify-between">
        <div className="max-w-60">
          <p className="text-lg font-semibold mb-4">About Us</p>
          <p className="text-neutral-400">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div className="w-fit">
          <p className="text-lg font-semibold mb-4">Quick link</p>
          <ul className="footer-nav text-neutral-400">
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div>
          <p className="text-lg font-semibold mb-4">Subscribe</p>
          <p className="text-neutral-400 w-60">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex mt-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              className="border border-white/30 rounded-l-xl py-2 px-4 outline-none"
            />
            <button className="py-2 px-4 bg-gradient-to-r from-violet-400 to-orange-400 rounded-r-xl text-white font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
