import { useState, useContext } from "react";
import UserContext from "../UserContext/UserContext";

function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("button clicked");
    setUser({ username, password, gender });
  };

  return (
    <div>
      login page:
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      Password :{" "}
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <br />
      Male:{" "}
      <input
        type="radio"
        name={gender}
        value="male"
        onChange={(e) => setGender(e.target.value)}
      />
      Female:{" "}
      <input
        type="radio"
        name={gender}
        value="female"
        onChange={(e) => setGender(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default login;
