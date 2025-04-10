const Name = (props) => {
  return (
    <>
      <h1>Welcome {props.name}!</h1> <h4>{props.course}</h4>
      {props.showInput ? <input /> : null}
    </>
  );
};

export const PI = 3.14;
export const Age = 10;

export default Name;

// module.exports = Name;

// function add() {
//   return [1 + 2, 2 + 3];
// }
