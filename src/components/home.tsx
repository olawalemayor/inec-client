import React from "react";
import { NavLink } from "react-router-dom";
import NigeriaLogo from "../assets/images/5c19606c2b16e390.png";

export default function Home() {
  return (
    <div className="text-white sm:h-full px-3">
      <div className="flex flex-col sm:flex-row mx-auto max-w-[1200px] sm:h-full mt-7 sm:mt-0">
        <div className="w-full sm:w-1/2">
          <img src={NigeriaLogo} alt="Nigeria Logo" />
        </div>

        <div className="w-full my-3 sm:w-1/2 sm:h-full flex flex-col pt-4 sm:pt-16 md:pt-24 lg:pt-32 xl:pt-48 text-center">
          <p className="text-2xl sm:text-4xl w-full sm:w-96 text-center mx-auto">
            Get the latest voting records for different polls
          </p>

          <div className="mt-5 xl:mt-7">
            <NavLink
              to="polling"
              className="px-3 xl:px-5 py-2 xl:py-3 bg-white hover:bg-slate-300 hover:text-green-700 text-green-900 text-lg xl:text-xl capitalize"
            >
              Check Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
