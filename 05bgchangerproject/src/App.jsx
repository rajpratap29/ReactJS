import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState(() => {
  return localStorage.getItem("bgColor") || "brown";
});

  useEffect(() => {
    localStorage.setItem("bgColor", color);
  }, [color]);

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button
              onClick={() => {
                setColor("red");
              }}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("green");
              }}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => {
                setColor("blue");
              }}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => {
                setColor("black");
              }}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => {
                setColor("purple");
              }}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => {
                setColor("deeppink");
              }}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "deeppink" }}
            >
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
