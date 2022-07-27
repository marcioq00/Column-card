import React from "react";
import "./index.css";
import Sedans from "./components/Sedans";
import Suvs from "./components/Suvs";
import Luxury from "./components/Luxury";

export default function App() {
  return (
    <div className="container">
      <Sedans />
      <Suvs />
      <Luxury />
    </div>
  );
}
