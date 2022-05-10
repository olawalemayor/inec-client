import React, { useContext, useEffect, useState } from "react";
import LGAFilter from "../shared/lgaFilter";
import { PUResult } from "../models/pu_result";
import { getPollingUnitResults } from "../services/pollingService";
import { useParams } from "react-router-dom";

export default function LgaPoll() {
  const [pollingUnit, setPollingUnit] = useState<PUResult[]>([]);

  const tableHeader = ["Polling Unit", "Poling Unit Number", "Score"];

  const { party } = useParams();

  useEffect(() => {
    const fetchPoll = async () => {
      if (party) {
        const { data } = await getPollingUnitResults(party);
        setPollingUnit(data);
      }
    };

    fetchPoll().catch((err) => console.error(err));
  }, [party]);

  return (
    <div className="flex flex-col justify-center xl:flex-row max-w-[1200px] mx-auto">
      <div className="lg:w-1/3">
        <LGAFilter />
      </div>

      <div className="lg:w-2/3 px-2">
        {pollingUnit.length && (
          <div className="bg-white">
            <h2 className="text-center text-3xl py-5 font-bold text-green-900">
              {party}
            </h2>

            <div className="flex text-left px-2">
              {tableHeader &&
                tableHeader.map((item) => (
                  <div key={item} className=" border text-lg font-bold  w-1/2">
                    {item}
                  </div>
                ))}
            </div>

            {pollingUnit.map(
              ({
                party_score,
                polling_unit_name,
                polling_unit_number,
                result_id,
              }) => (
                <div className="flex text-left px-2" key={result_id}>
                  <div className=" w-1/2 border">{polling_unit_name}</div>
                  <div className="w-1/2 border pl-3 sm:pl-0 text-center">
                    {polling_unit_number}
                  </div>
                  <div className="w-1/2 border pl-3 sm:pl-0 text-center">
                    {party_score}
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {!pollingUnit.length && (
          <div className="bg-white h-full p-4 text-xl">
            <h3>No result available!</h3>
          </div>
        )}
      </div>
    </div>
  );
}
