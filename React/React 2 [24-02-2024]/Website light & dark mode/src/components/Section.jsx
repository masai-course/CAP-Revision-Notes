const darkModeStyle = {
   border: "1px solid grey",
   padding: "5px",
};

const lightModeStyle = {
   border: "1px solid black",
   padding: "5px",
};

export const Section = (argument) => {
   const { prop } = argument;
   const { mode, text } = prop;
   return (
      <div style={mode === "light" ? lightModeStyle : darkModeStyle}>
         {text}
      </div>
   );
};
