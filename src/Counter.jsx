import { useState } from "react";
// import "./Css.css";

const Counter = (props) => {
  const { initCount, onClickInc, onClickDec, counts, setCounts } = props;
  const [count, setCount] = useState(initCount);
  //   let count = 0;

  //   const decrement = () => {
  //     setCount(count - 1);
  //   };

  //   const increment = () => {
  //     setCount(count + 1);
  //   };
  console.log("COUNTER " + props.sno);
  return (
    <div>
      {/* <button onClick={() => onClickDec(setCount, count)} className="border-2 border-black p-2 mx-2"> */}
      <button onClick={() => setCounts(counts - 1)} className="border-2 border-black p-2 mx-2">
        -
      </button>
      <span>{counts}</span>
      {/* <button onClick={() => onClickInc(setCount, count)} className="border-2 border-black p-2 mx-2"> */}
      <button onClick={() => setCounts(counts + 1)} className="border-2 border-black p-2 mx-2">
        +
      </button>
    </div>
  );
};

export default Counter;
