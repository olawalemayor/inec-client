import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Lga from "./lga";
import Polling from "./polling";
import Parties from "./parties";
import LgaPoll from "./lgaPoll";

export default function Router() {
  return (
    <Routes>
      <Route path="parties" element={<Parties />} />
      <Route path="lga" element={<Lga />} />
      <Route path="polling/:party" element={<LgaPoll />} />
      <Route path="polling" element={<Polling />} />
      <Route path="" element={<Home />} />
    </Routes>
  );
}
