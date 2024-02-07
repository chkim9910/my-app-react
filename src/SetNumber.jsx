import { useState } from "react";

const SetNumber = () => {
  const [number, setNumber] = useState(0);
  //   const increase = () => {
  //     setNumber(number + 1);
  //   };
  //   const decrease = () => {
  //     setNumber(number - 1);
  //   };
  return (
    <div>
      <h1>{number}</h1>
      {/* 아래는 한 줄로 표기한 것 */}
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      {/* <button onClick={increase}>+</button> */}
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -
      </button>
      {/* <button onClick={decrease}>-</button> */}
    </div>
  );
};

export default SetNumber;
