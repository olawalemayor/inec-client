import axios from "axios";
import { useEffect, useState } from "react";
import { getLGA } from "../services/pollingService";
import LGAFilter from "../shared/lgaFilter";
import { LGA } from "../models/lga";

export default function Polling() {
  return (
    <div className="px-3">
      <h2 className="uppercase text-center text-white text-xl sm:text-3xl sm:font-bold">
        POLLING unit
      </h2>

      <div className="flex justify-around text-center h-full">
        <div className="mt-[30vh]">
          <LGAFilter />
        </div>
      </div>
    </div>
  );
}
