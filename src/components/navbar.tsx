import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="flex items-center uppercase">
      <div className="mx-2 text-white hover:text-gray-300">
        <NavLink to="polling" className="nav-link">
          Polling
        </NavLink>
      </div>
      <div className="mx-2 text-white hover:text-gray-300">
        <NavLink to="lga" className="nav-link">
          LGA RESULTS
        </NavLink>
      </div>
      <div className="mx-2 text-white hover:text-gray-300">
        <NavLink to="individual" className="nav-link">
          Individual
        </NavLink>
      </div>
    </div>
  );
};

const MobileMenu = () => {
  return (
    <div className="flex flex-col uppercase">
      <div className="mx-2 my-3 text-white hover:text-gray-300">
        <NavLink to="polling">Polling</NavLink>
      </div>
      <div className="mx-2 my-3 text-white hover:text-gray-300">
        <NavLink to="lga">LGA RESULTS</NavLink>
      </div>
      <div className="mx-2 my-3 text-white hover:text-gray-300">
        <NavLink to="parties">Parties</NavLink>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <header>
      <div className=" max-w-[1200px] mx-auto flex justify-between px-2 py-3 sm:py-7 items-center">
        <div className=" text-5xl text-white flex justify-center w-[75%] sm:w-auto items-center">
          <Link to="/" className="uppercase">
            INEC <span className="italic text-green-100">STATS</span>
          </Link>
        </div>
        <div className="hidden sm:block">
          <NavMenu />
        </div>
        <div
          className="flex items-center justify-center text-4xl text-white sm:hidden"
          onClick={() => setIsToggled(true)}
        >
          {isToggled ? "x" : "≡"}
        </div>
      </div>

      {isToggled && (
        <div className="text-white p-10 fixed h-full w-full top-0 glass-green sm:hidden">
          <div
            className="flex justify-end text-2xl"
            onClick={() => setIsToggled(false)}
          >
            x
          </div>
          <div className="flex items-center justify-center">
            <MobileMenu />
          </div>
        </div>
      )}
    </header>
  );
}
