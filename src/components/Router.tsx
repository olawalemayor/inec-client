import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Lga from "./lga";
import Polling from "./polling";
import Individual from "./individual";
import PartyPoll from "./partyPoll";
import LgaPoll from "./lgaPoll";
import IndividualPoll from "./individualPoll";

export default function Router() {
  return (
    <Routes>
      <Route path="individual/:pun" element={<IndividualPoll />} />
      <Route path="individual" element={<Individual />} />
      <Route path="lga/:lgaId" element={<LgaPoll />} />
      <Route path="lga" element={<Lga />} />
      <Route path="polling/:party" element={<PartyPoll />} />
      <Route path="polling" element={<Polling />} />
      <Route path="" element={<Home />} />
    </Routes>
  );
}
