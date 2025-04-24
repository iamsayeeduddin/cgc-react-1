import React, { useReducer } from "react";
import { useState } from "react";

// const Reducer = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//     </div>
//   );
// };

const Reducer = () => {
  const initialTodos = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
    },
  ];

  const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case "COMPLETE":
        return state.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, complete: true };
          } else {
            return todo;
          }
        });
      case "PENDING":
        return state.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, complete: false };
          } else {
            return todo;
          }
        });
      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (id, complete) => {
    dispatch({ type: !complete ? "COMPLETE" : "PENDING", id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input type="checkbox" checked={todo.complete} onChange={() => handleComplete(todo.id, todo.complete)} />
            {todo.title} TASK {todo.complete ? "COMPLETED" : "PENDING"}
          </label>
        </div>
      ))}
    </>
  );
};

export default Reducer;
