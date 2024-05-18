import { useState } from "react";
import styles from "./app.module.css";

function Calculator() {
   const [data, setData] = useState({
      firstValue: "",
      secondValue: "",
      output: "",
   });

   const handleChange = (e, type) => {
      if (type === "first") {
         setData({ ...data, firstValue: +e.target.value });
      } else {
         setData({ ...data, secondValue: +e.target.value });
      }
   };

   const handleOperation = (choice) => {
      switch (choice) {
         case "+":
            setData({ ...data, output: data.firstValue + data.secondValue });
            break;
         case "-":
            setData({ ...data, output: data.firstValue - data.secondValue });
            break;
         case "*":
            setData({ ...data, output: data.firstValue * data.secondValue });
            break;
         case "/":
            setData({ ...data, output: data.firstValue / data.secondValue });
            break;
         default:
            console.log("Wrong choice added");
      }
   };

   return (
      <div className={styles.container}>
         <div className={styles.inputBox}>
            <input
               onChange={(e) => handleChange(e, "first")}
               value={data.firstValue}
               type="text"
               placeholder="Enter the first number here"
            />
            <input
               onChange={(e) => handleChange(e, "second")}
               value={data.secondValue}
               type="text"
               placeholder="Enter the second number here"
            />
         </div>
         <div className={styles.buttonGroup}>
            <button onClick={() => handleOperation("+")}>ADD</button>
            <button onClick={() => handleOperation("-")}>SUBTRACT</button>
            <button onClick={() => handleOperation("*")}>MULTIPLE</button>
            <button onClick={() => handleOperation("/")}>DIVIDE</button>
         </div>
         <h1 className={styles.output}>Output: {data.output}</h1>
      </div>
   );
}

export default App;
