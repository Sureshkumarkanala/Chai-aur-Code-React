import { useRef } from "react";
import { useState, useCallback, useEffect } from "react";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

function App() {
  const [length, setLength] = useState(8);

  const [password, setPassword] = useState("");
  const [allownum, setAllownum] = useState(false);
  const [allowchar, setAllowchar] = useState(false);

  const passwordGanertor = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklmnopqrstuvwxyz";
    // let num = "0123456789";

    if (allownum) str += "0123456789";
    if (allowchar) str += "!@#$%^&*(){}~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      console.log(char);
      pass += str.charAt(char);
      console.log(pass);
    }
    setPassword(pass);
  }, [length, allowchar, allownum, setPassword]);

  const passwordRef = useRef(null);

  const Copypassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
    console.log("selected password is ", passwordRef.current.value);

    console.log("selected password is ", passwordRef.value);
  }, [password]);

  useEffect(() => {
    passwordGanertor();
  }, [length, allowchar, allownum, passwordGanertor]);

  return (
    <div>
      <h1
        // className="text-4xl text-center text-black mt-1.5rem "
        style={{ marginTop: "150px ", marginLeft: "550px" }}
      >
        Password Genarator
      </h1>
      <div
        // className="ml-10rem"
        style={{ marginLeft: "540px", marginTop: "20px" }}
      >
        <input
          type="text"
          // className="ml-20px "
          value={password}
          style={{ color: "red" }}
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={Copypassword} style={{ color: "blue" }}>
          Copy
        </button>
        <div style={{ marginTop: "20px" }}>
          <input
            type="range"
            min={10}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          ></input>
          <label style={{ color: "blue" }}>length:{length}</label>
          <input
            type="checkbox"
            defaultChecked={allownum}
            className="cursor-pointer"
            onChange={(e) => {
              setAllownum((prevnum) => !prevnum);
            }}
          ></input>
          <label style={{ color: "blue" }}>Numbers</label>

          <input
            type="checkbox"
            defaultChecked={allowchar}
            className="cursor-pointer"
            onChange={(e) => {
              setAllowchar((prevchar) => !prevchar);
            }}
          ></input>
          <label style={{ color: "blue" }}>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
