import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import "./Css.css";
import Name from "./Name";

const Course = () => {
  return <h1>MERN Stack</h1>;
};

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sayeeduddin");
  // console.log(Name, PI, Age);
  // const printName = (nm) => {
  //   console.log(nm);
  // };

  // printName("Sayeed");
  // printName("Azhar");
  // printName("Salman");
  // printName("Asad");
  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Next JS</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p className="">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {/* <input type="text" onChange={(e) => setName(e.target.value)} /> */}
        {/* <Course /> */}
        <Name name="Sayeed" course="MERN" showInput={true} />
        <Name name="Azhar" course="Cybersecurity" />
        <Name name="Salman" course="AWS" />
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
