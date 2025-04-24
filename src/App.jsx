import { useEffect, useState } from "react";
import Counter from "./Counter";
import Name from "./Name";
import Users from "./Users";
import Form from "./Form";
import APICall from "./APICall";
import HOC from "./HOC";
import { Route, Routes, useParams, Link, useNavigate, useLocation } from "react-router-dom";
import RouteHOC from "./RouteHOC";
import LoginForm from "./LoginForm";
import Reducer from "./Reducer";
import ProtectedRoute from "./utils/ProtectedRoute";
import IsAdmin from "./utils/IsAdmin";

const App = () => {
  const [counts, setCounts] = useState(0);
  const user = JSON.parse(localStorage?.getItem("user"));
  const [showForm, setShowForm] = useState(true);
  const navigate = useNavigate();

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const goToTest = () => {
    navigate("/test", {
      state: { val: true },
    });
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
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter Home</Link>
        </li>
        <li>
          <Link to="/counter/app">Counter Page</Link>
        </li>
        <li>
          <Link to="/counter/sayeed">Dynamic Value</Link>
        </li>
        <IsAdmin user={user}>
          <li>
            <Link to="/reducer">Reducer</Link>
          </li>
        </IsAdmin>
        <button className="bg-blue-600 p-4" onClick={goToTest}>
          Go to Test
        </button>
        {`Welcome ${localStorage.getItem("user") ? JSON.parse(localStorage?.getItem("user"))?.name : "User!"}`}
      </ul>
      <Routes>
        <Route
          path={"/"}
          exact
          element={
            <ProtectedRoute user={user}>
              <h1>Welcome to My HomePage!</h1>
            </ProtectedRoute>
          }
        />
        <Route path="counter">
          <Route index element={<h1>Welcome to my Counter</h1>} />
          <Route
            path="app"
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
          <Route path=":name" element={<TestDynamic />} />
          <Route path="*" element={<h1>NOT FOUND 404</h1>} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/reducer"
          element={
            <IsAdmin user={user} isRoute={true}>
              <Reducer />
            </IsAdmin>
          }
        />
        <Route path="*" element={<h1>NOT FOUND 404</h1>} />
      </Routes>
      <RouteHOC path="/test" element={<TestComp />} />
    </>
  );
};

const TestComp = () => {
  const location = useLocation();
  console.log(location);
  return <h1>Testing RouteHOC</h1>;
};

const TestDynamic = () => {
  const params = useParams();
  console.log(params);
  return <>Welcome {params.name}!</>;
};

export default App;
