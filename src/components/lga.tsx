import React from "react";
import LGAFilter from "../shared/lgaFilter";

export default function Lga() {
  return (
    <div className="px-3">
      <h2 className="uppercase text-center text-white text-xl sm:text-3xl sm:font-bold">
        LGA Result
      </h2>

      <div className="flex justify-around text-center h-full">
        <div className="mt-[30vh]">
          <LGAFilter />
        </div>
      </div>
    </div>
  );
}
