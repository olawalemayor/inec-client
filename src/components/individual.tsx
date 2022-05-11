import React from "react";
import PollingUnitFilter from "../shared/individualFilter";

export default function Individual() {
  return (
    <div className="px-3">
      <h2 className="uppercase text-center text-white text-xl sm:text-3xl sm:font-bold">
        INDIVIDUAL POLLING
      </h2>

      <div className="flex justify-around text-center h-full">
        <div className="mt-[30vh]">
          <PollingUnitFilter />
        </div>
      </div>
    </div>
  );
}
