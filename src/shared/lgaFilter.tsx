import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getLGA } from "../services/pollingService";
import { LGA } from "../models/lga";

export default function LGAFilter() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>("");
  const [lgaData, setLgaData] = useState<LGA[]>([]);

  const { pathname } = useLocation();

  useEffect(() => {
    const fetchLgas = async () => {
      const { data } = await getLGA();
      setLgaData(data);
    };

    fetchLgas().catch((err) => console.error(err));
  }, [getLGA]);

  const setFilter = (lgaId: string) =>
    pathname === "/lga"
      ? navigate(lgaId)
      : navigate(`../lga/${lgaId}`, { replace: true });

  return (
    <div className="p-2">
      <div className="flex flex-col">
        <label htmlFor="state" className="text-white">
          Select Party :
        </label>
        <select
          name="state"
          id="state"
          className="w-full md:w-96"
          onChange={(e) => setSelected(e.currentTarget.value)}
        >
          <option value="" className="text-center">
            --Select LGA--
          </option>
          {lgaData.length &&
            lgaData.map(({ lga_id, lga_name }) => (
              <option key={lga_id} className="text-center" value={lga_id}>
                {lga_name}
              </option>
            ))}
        </select>
      </div>

      <div className="flex justify-center sm:text-left">
        <button
          onClick={() => setFilter(selected)}
          className="px-3 py-2 bg-white mt-5 xl:mt-7 text-lg hover:bg-slate-200 hover:text-green-700"
        >
          Filter
        </button>
      </div>
    </div>
  );
}
