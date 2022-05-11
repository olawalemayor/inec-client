import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getPollingUnits } from "../services/pollingService";
import { PollingUnit } from "../models/polling-unit";

export default function PollingUnitFilter() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>("");
  const [puData, setPUData] = useState<PollingUnit[]>([]);

  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPUs = async () => {
      const { data } = await getPollingUnits();
      setPUData(data);
    };

    fetchPUs().catch((err) => console.error(err));
  }, [getPollingUnits]);

  const setFilter = (pun: string) =>
    pathname === "/individual"
      ? navigate(pun)
      : navigate(`../individual/${pun}`, { replace: true });

  return (
    <div className="p-2">
      <div className="flex flex-col">
        <label htmlFor="state" className="text-white">
          Select Polling Unit :
        </label>
        <select
          name="state"
          id="state"
          className="w-full md:w-96"
          onChange={(e) => setSelected(e.currentTarget.value)}
        >
          <option value="" className="text-center">
            --Select Polling Unit--
          </option>
          {puData.length &&
            puData.map(
              ({ unique_id, polling_unit_number, polling_unit_name }) => (
                <option
                  key={unique_id}
                  className="text-center"
                  value={polling_unit_number}
                >
                  {polling_unit_name} - {polling_unit_number}
                </option>
              )
            )}
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
