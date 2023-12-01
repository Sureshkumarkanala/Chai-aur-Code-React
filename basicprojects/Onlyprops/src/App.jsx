// import { useState } from "react";

// import Props from "./Props";
// // let value = 999;
// // const myarr = [1, 2, 3];
// // const myObj = {
// //   name: "Arun",
// //   age: 25,
// //   company: "HCL",
// // };
// // const myobjone = {
// //   name: "Suresh",
// //   age: 25,
// //   company: "HCl",
// // };
// // function callfunction() {
// //   alert("Function is passed as a prop");
// // }

// // function calldata(num1, num2) {
// //   console.log(num1 * num2);
// //   alert("Add button clicked");
// // }

// function App() {
// const [count, setCount] = useState(0);
// const [inval, setInval] = useState(1);

// function statechange(a) {
//   setCount(a * 10);
// }

// const valuechange = (num) => {
//   console.log("num is ", num);
//   setInval(num * 100);
// };
//   return (
//     <>
//       {/* <Props name="Arun" num={value} /> */}
//       {/* <Props name={myObj.name} age={myObj.age} company={myObj.company} /> */}
//       {/* <Props {...myobjone} /> */}
//       {/* <Props arr1={[10, 20, 30]} /> */}
//       {/* <Props {...[myarr]} /> */}
//       {/* <Props data={callfunction()} /> */}

//       <p>state initial value is {count}</p>
//       {/* <Props addfun={calldata} /> */}
//       <Props statevalue={statechange} />
//       <p>First value is {inval}</p>
{
  /* <Props inpdata={valuechange} />; */
}
//     </>
//   );
// }

// export default App;

// 1. Passing name="Arun" num={value}  as a this.props
// 2.passing array as a props(By using destucture)
//3.passing the object individually as a prop
//4.pass the totalobject as prop(in child componnet we have to use the same names while destucture)
// 5. pass array along with values inside the prop we receive total array as a prop we need to use join
//  to display by saperated by ',' data.arr1.join()
// 6.send array as a prop using destructure in child we use by ushing join      <p>{data[0].join()}</p>
//7.execute the function inside the prop
//8.pass the function written in the parent,and pass  as a prop to the child component
//  and give the arguements in the child it will execute in the parent

import { useState } from "react";
import Props from "./Props";
function App() {
  const [count, setCount] = useState("0");

  const mulfun = (val) => {
    let value = val * val;
    setCount(value);
  };
  return (
    <div style={{ marginLeft: "20px" }}>
      App component
      <p>Initial value {count}</p>
      <Props data={mulfun} />
    </div>
  );
}

export default App;
