import { useState } from "react";
import Counter from "./Counter";
import Name from "./Name";
import Users from "./Users";
import Form from "./Form";
import APICall from "./APICall";

const App = () => {
  const [counts, setCounts] = useState(0);
  const [showForm, setShowForm] = useState(true);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Name name="Sayeeduddin" course="MERN Stack" />
      <Counter
        sno={1}
        counts={counts}
        setCounts={setCounts}
        initCount={1}
        onClickDec={(setCount, count) => (count < 20 ? setCount(count - 2) : null)}
        onClickInc={(setCount, count) => setCount(count + 2)}
      />
      {/* <Counter
        sno={2}
        // counts={counts}
        // setCounts={setCounts}
        initCount={0}
        onClickDec={(setCount, count) => setCount(count - 3)}
        onClickInc={(setCount, count) => setCount(count + 3)}
      /> */}
      {/* <Users /> */}
      <button className="bg-blue-500 px-6 py-6 cursor-pointer" onClick={handleShowForm}>
        {showForm ? "Hide" : "Show"} Form
      </button>
      <APICall />
      {showForm ? <Form /> : null}
    </>
  );
};

export default App;
