import React from "react";
import { useState } from "react";

export const AddInputTag = () => {
   const [data, setData] = useState([{ title: "" }]);
   const handleAdd = () => {
      const newObj = { title: "" };
      setData([...data, newObj]);
   };
   return (
      <div>
         <div>
            <button onClick={handleAdd}>ADD</button>
         </div>
         <div>
            {data.map((el, idx) => (
               <input key={idx} value={el.title} type="text" />
            ))}
         </div>
      </div>
   );
};
