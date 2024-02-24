import React, { useState } from "react";
import { Image } from "./Image";

export const Display = () => {
   const [display, setDisplay] = useState(false);

   const handleToggle = () => {
      setDisplay(!display);
   };

   return (
      <>
         <button onClick={handleToggle}>Toggle</button>
         <br />
         {display === true ? <Image /> : null}
      </>
   );
};
