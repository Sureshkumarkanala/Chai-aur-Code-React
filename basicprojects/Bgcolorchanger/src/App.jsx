import { useState } from "react";

function App() {
  const [color, setColor] = useState("purple");
  function changecolor(val) {
    setColor(val);
  }

  const changecolors = (value) => {
    setColor(value);
  };
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <footer className=" fixed flex flex-wrap justify-center bottom-12 inset-x-10 px-1">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-full">
          <button
            className="outline-none px-3  py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "red" }}
            onClick={() => changecolor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-3  py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "blue" }}
            onClick={setColor("blue")}
          >
            Blue
          </button>

          <button
            className="outline-none px-3  py-1 rounded-full text-white shadow-sm"
            onClick={() => changecolors("pink")}
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>

          <button
            className="outline-none px-3  py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "yellow" }}
            onClick={() => changecolor("yellow")}
          >
            yellow
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
