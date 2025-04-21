// const greet = (name) => {
//   return "Hello " + name;
// };

// function processUser(name, callback) {
//   console.log(callback(name));
// }

// processUser("Sayeed", greet);
// processUser("Sayeed", greetA);
import React from "react";

const HOC = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default HOC;
