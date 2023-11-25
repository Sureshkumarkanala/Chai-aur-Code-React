import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  //   const [data, setdata] = useState([]);
  //   const [followers, setfollowers] = useState();

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setdata(res);
  //         // {
  //         //   setdata(res.login);
  //         // }
  //         // {
  //         //   setfollowers(res.followers);
  //         // }
  //       });
  //   }, []);

  return (
    <div className="text-center bg-gray-700 p-4 text-2xl text-yellow-600">
      GitHub username:{data.login}
      <p>Followers are :{data.followers}</p>
    </div>
  );
}

export default GitHub;

// export const githubInfoloader = async () => {
//   const response = await fetch("https://api.github.com/users/hiteshchoudhary");
//   return response.json();
// };
