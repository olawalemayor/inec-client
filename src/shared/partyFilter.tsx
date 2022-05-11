import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getParties } from "../services/pollingService";
import { Party } from "../models/party";

export default function PartyFilter() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>("");
  const [partyData, setPartyData] = useState<Party[]>([]);

  const { pathname } = useLocation();

  useEffect(() => {
    const fetchParties = async () => {
      const { data } = await getParties();
      setPartyData(data);
    };

    fetchParties().catch((err) => console.error(err));
  }, [getParties]);

  const setFilter = (partyName: string) =>
    pathname === "/polling"
      ? navigate(partyName)
      : navigate(`../polling/${partyName}`, { replace: true });

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
            --Select Political Party--
          </option>
          {partyData.length &&
            partyData.map(({ partyid, partyname }) => (
              <option key={partyid} className="text-center" value={partyname}>
                {partyname}
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
