// import { React } from "react";
// // function Props({ name, age, company }) {
// function Props(data) {
//   // console.log(data.data);
//   // console.log("props as", data.arr1[0]);
//   // console.log(data.arr1);
//   // function Props(arr) {
//   // { name, num }
//   //   const { name, age, company } = data;
//   //Sending an arary as props
//   // console.log("arr is ", arr);
//   //  console.log(arr[0][2]);
//   //   const arr1 = data;
//   //   console.log(arr1);
//   return (
//     <div>
//       Props Component
//       <hr />
//       {/* <p>
//         {name}
//         {num}
//       </p> */}
//       {/* <p>{num}</p> */}
//       {/* <p>{name}</p>
//       <p>{age}</p>
//       <p>{company}</p> */}
//       {/* <div>
//         {name}
//         {age}
//         {company}
//       </div> */}
//       {/* <p>Array is {data.arr1.join()}</p> */}
//       {/* <p>{data[0].join()}</p> */}
//       {/* <p>{data}</p> */}
//       {/* <p>{arr.map((val) => val * 2)}</p> */}
//       {/* <button onClick={data}>Click </button> */}
//       {/* <button onClick={(e) => data.addfun(10, 10)}>Add </button> */}
//       <button onClick={(e) => data.statevalue(10)}>State value</button>
//       <button
//         onClick={(e) => {
//           data.inpdata(2);
//         }}
//       >
//         click
//       </button>
//       {/* <button onClick={(e) => data.inpdata(10)}>Click me</button> */}
//     </div>
//   );
// }
// export default Props;

function Props(prop) {
  return (
    <div>
      <button onClick={(e) => prop.data(10)}>click to change value</button>
    </div>
  );
}
export default Props;
