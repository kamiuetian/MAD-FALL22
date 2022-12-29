import React from "react";
import { createContext } from "react";

/**Context */
const CounterContext = createContext({ counter: 0, setCounter: () => {} });

/**Context Provider */
function CounterProvider(props) {
  const increment = () => {
    setCounter(count + 1);
  };
  const [counter, setCounter] = React.useState(0);
  return (
    <CounterContext.Provider value={{ counter, setCounter, increment }}>
      {props.children}
    </CounterContext.Provider>
  );
}

export { CounterContext, CounterProvider };
