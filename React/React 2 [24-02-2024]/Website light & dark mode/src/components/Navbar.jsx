import React, { useEffect, useState } from "react";
import { Section } from "./Section";
import styles from "./navbar.module.css";

const buttonDarkModeStyle = {
   color: "white",
   backgroundColor: "black",
   border: "1px solid white",
   padding: "3px",
   cursor: "pointer"
};

const buttonLightModeStyle = {
   color: "black",
   backgroundColor: "whitesmoke",
   border: "1px solid black",
   padding: "3px",
   cursor: "pointer"
};

const darkModeStyles = {
   color: "grey",
   border: "2px solid grey",
   backgroundColor: "black",
};

const lightModeStyles = {
   color: "black",
   border: "2px solid black",
   backgroundColor: "white",
};

export const Navbar = () => {
   const [mode, setMode] = useState("light");

   useEffect(() => {
      if (mode === "light") {
         document.body.style.backgroundColor = "white";
      } else {
         document.body.style.backgroundColor = "black";
      }
   }, [mode]);

   const handleModeChange = () => {
      if (mode === "light") {
         setMode("dark");
      } else {
         setMode("light");
      }
   };

   return (
      <>
         <button
            style={
               mode === "light" ? buttonLightModeStyle : buttonDarkModeStyle
            }
            onClick={handleModeChange}
         >
            Toggle Mode: {mode}
         </button>
         <div
            style={mode === "light" ? lightModeStyles : darkModeStyles}
            className={styles.navbar}
         >
            <Section prop={{ mode, text: "Home" }} />
            <Section prop={{ mode, text: "About" }} />
            <Section prop={{ mode, text: "Sign up" }} />
            <Section prop={{ mode, text: "Login" }} />
         </div>
      </>
   );
};
