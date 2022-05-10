import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Router } from "./components";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="h-screen pg-bg overflow-scroll">
        <Navbar />
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
