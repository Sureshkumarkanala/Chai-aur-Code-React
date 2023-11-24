import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Props from "./Props";
// let value = 1000;

const myarr = [1, 2, 3];

const myObj = {
  name: "Arun",
  age: 30,
  company: "HCL",
};
const myobjone = {
  name: "Suresh",
  age: 30,
  company: "HCl",
};

// function callfunction() {
//   alert("Function is passed as a prop");
// }

// function calldata(num1, num2) {
//   alert("Add butto cicked");

//   return console.log(num1 * num2);
// }

function App() {
  // const [count, setCount] = useState(0);
  const [inval, setInval] = useState(1);

  // function statechange(a) {
  //   setCount(a * 10);
  // }

  const valuechange = (num) => {
    console.log(num);
    setInval(num * 100);
  };
  return (
    <>
      {/* <Props name="Arun" num={value}  /> */}
      {/* <Props name={myObj.name} age={myObj.age} company={myObj.company} /> */}
      {/* <Props {...myobjone} /> */}
      {/* <Props arr1={[10, 20, 30]} /> */}

      {/* <Props {...[myarr]} /> */}

      {/* <Props data={callfunction} /> */}
      {/* <p>state initial value is {count}</p> */}
      {/* <Props data={calldata} /> */}
      {/* <Props statevalue={statechange} /> */}
      <p>First value is {inval}</p>
      <Props inpdata={valuechange} />
    </>
  );
}

export default App;
