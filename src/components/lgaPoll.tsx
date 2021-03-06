import React, { useEffect, useState } from "react";
import PartyFilter from "../shared/partyFilter";
import { PUResult } from "../models/pu_result";
import { getLGAResults } from "../services/pollingService";
import { useParams } from "react-router-dom";
import LGAFilter from "../shared/lgaFilter";

export default function LgaPoll() {
  const [pollingUnit, setPollingUnit] = useState<PUResult[]>([]);

  const tableHeader = ["Political Party", "Party Score"];

  const { lgaId } = useParams();

  useEffect(() => {
    const fetchPoll = async () => {
      if (lgaId) {
        const { data } = await getLGAResults(lgaId);
        setPollingUnit(data);
      }
    };

    fetchPoll().catch((err) => console.error(err));
  }, [lgaId]);

  return (
    <div className="flex flex-col justify-center xl:flex-row max-w-[1200px] mx-auto">
      <div className="lg:w-1/3">
        <LGAFilter />
      </div>

      <div className="lg:w-2/3 px-2">
        {pollingUnit && (
          <div className="bg-white">
            <h2 className="text-center text-3xl py-5 font-bold text-green-900">
              LGA ID: {lgaId}
            </h2>

            <div className="flex text-left px-2">
              {tableHeader &&
                tableHeader.map((item) => (
                  <div
                    key={item}
                    className=" border text-lg font-bold text-center  w-1/2"
                  >
                    {item}
                  </div>
                ))}
            </div>

            {pollingUnit.map(
              ({ party_score, party_abbreviation, result_id }) => (
                <div className="flex text-left px-2" key={result_id}>
                  <div className="w-1/2 border pl-3 sm:pl-0 text-center">
                    {party_abbreviation}
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
