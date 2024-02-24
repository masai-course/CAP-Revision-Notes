import SubHeading from "./SubHeading";

const Heading = (argument) => {
   const {text} = argument
   return (
      <>
         <h1>{text}</h1>
         <SubHeading text={"Toyota"} />
         <SubHeading text={"BMW"} />
         <SubHeading text={"Nissan"} />
      </>
   );
};

export default Heading;
