import { useState } from "react";
import Counter from "./Counter";
import Name from "./Name";
import Users from "./Users";
import Form from "./Form";
import APICall from "./APICall";
import HOC from "./HOC";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [counts, setCounts] = useState(0);
  const [showForm, setShowForm] = useState(true);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    // <>
    //   <Name name="Sayeeduddin" course="MERN Stack" />
    //   <Counter
    //     sno={1}
    //     counts={counts}
    //     setCounts={setCounts}
    //     initCount={1}
    //     onClickDec={(setCount, count) => (count < 20 ? setCount(count - 2) : null)}
    //     onClickInc={(setCount, count) => setCount(count + 2)}
    //   />
    //   {/* <Counter
    //     sno={2}
    //     // counts={counts}
    //     // setCounts={setCounts}
    //     initCount={0}
    //     onClickDec={(setCount, count) => setCount(count - 3)}
    //     onClickInc={(setCount, count) => setCount(count + 3)}
    //   /> */}
    //   {/* <Users /> */}
    //   <button className="bg-blue-500 px-6 py-6 cursor-pointer" onClick={handleShowForm}>
    //     {showForm ? "Hide" : "Show"} Form
    //   </button>
    //   <APICall />
    //   <HOC>
    //     {showForm ? <Form /> : null}
    //     <p className="text-blue-800 text-6xl">Testing HOC</p>
    //   </HOC>
    // </>
    <Routes>
      <Route
        path={"/"}
        exact
        element={
          <>
            <h1>Welcome to My HomePage!</h1>
          </>
        }
      />
      <Route
        path="/counter/app"
        element={
          <Counter
            sno={1}
            counts={counts}
            setCounts={setCounts}
            initCount={1}
            onClickDec={(setCount, count) => (count < 20 ? setCount(count - 2) : null)}
            onClickInc={(setCount, count) => setCount(count + 2)}
          />
        }
      />
    </Routes>
  );
};

export default App;
