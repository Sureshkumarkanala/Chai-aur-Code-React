import { React } from "react";
// function Props({ name, age, company, data }) {
// function Props(data) {
function Props(data) {
  //   const { name, age, company } = data;
  //   const arr = data[0];
  //   console.log(arr[0][1]);

  //   const arr1 = data;
  //   console.log(arr1);

  return (
    <div>
      Props Component
      <hr />
      {/* <p>{name}</p>
      <p>{num}</p> */}
      {/* <p>{name}</p>
      <p>{age}</p>
      <p>{company}</p> */}
      {/* <p>Array is {data.arr1.join("")}</p> */}
      {/* <p>{arr.join("")}</p> */}
      {/* <p>{arr.map((val) => val * 2)}</p> */}
      {/* <button onClick={data.data}>Click </button> */}
      {/* <button onClick={(e) => data.data(10, 10)}>Add </button> */}
      {/* <button onClick={(e) => data.statevalue(10)}>State value</button> */}
      <button onClick={(e) => data.inpdata(100)}>Click me</button>
    </div>
  );
}
export default Props;
