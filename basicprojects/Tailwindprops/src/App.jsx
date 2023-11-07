import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/card";

function App() {
  const myobj = { name: "Arun", age: 30, company: "HCl" };
  const myarr = [1, 2, 3, 4];
  return (
    <>
      <h1 className="bg-green-700 pg-left-20px"> Vite + React!</h1>

      <Card Heroname="Pawan star" Someobj={myobj} Somearr={myarr} />
    </>
  );
}

export default App;
