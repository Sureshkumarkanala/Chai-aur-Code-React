import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const Incrementval = () => {
    let newCounter = counter + 1;
    if (counter < 20) {
      setCounter(newCounter);
    } else {
      alert("Counter must be below 20");
    }
  };
  const Decrement = () => {
    let newcounter = counter - 1;
    if (counter > 0) {
      setCounter(newcounter);
    } else {
      alert("Counter value must be greater than zero");
    }
  };
  return (
    <>
      <div>
        <h1>Counter value is {counter}</h1>
        <button onClick={Incrementval}>
          Increment <br />
          <h1>{counter}</h1>
        </button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </>
  );
}
export default App;
