import React, { useState } from "react";
import { Even } from "./Even";
import { Odd } from "./Odd";

const evenStyle = {
   color: "green",
   fontFamily: "sans-serif",
};
const oddStyle = {
   color: "red",
   fontStyle: "italic",
};

export const Counter = () => {
   const [count, setCount] = useState(0);

   const handleIncrement = () => {
      setCount(count + 1);
   };
   const handleDecrement = () => {
      setCount(count - 1);
   };

   return (
      <>
         <h2 style={count % 2 === 0 ? evenStyle : oddStyle}>Count: {count}</h2>
         <button onClick={handleIncrement}>+1</button>
         <button onClick={handleDecrement}>-1</button>
         {/* <h2>{count % 2 === 0 ? <Even /> : <Odd />}</h2> */}
      </>
   );
};
