import PartyFilter from "../shared/partyFilter";

export default function Polling() {
  return (
    <div className="px-3">
      <h2 className="uppercase text-center text-white text-xl sm:text-3xl sm:font-bold">
        POLLING unit
      </h2>

      <div className="flex justify-around text-center h-full">
        <div className="mt-[30vh]">
          <PartyFilter />
        </div>
      </div>
    </div>
  );
}
