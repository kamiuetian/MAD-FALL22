import React from "react";
import { createContext } from "react";

const MyContext = createContext();

const MyContextProvider = (props) => {
  const [val, setVal] = React.useState(0);
  const [val1, setVal1] = React.useState(0);
  return (
    <MyContext.Provider value={{ val, setVal, val1, setVal1 }}>
      {props.Children}
    </MyContext.Provider>
  );
};
export { MyContextProvider, MyContext };
