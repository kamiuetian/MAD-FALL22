// In App.js in a new project
import React from "react";
import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { CounterContext, CounterProvider } from "./Store/CounterContext";
/**Component A */
function ComponentA({ counter }) {
  //const [counterA, setCounterA] = React.useState(0);
  return (
    <>
      <Text>Cmponent A</Text>
      <Child counter={counter} />
    </>
  );
}
function Child() {
  const { counter } = useContext(CounterContext);
  return (
    <>
      <Text>Cmponent A Child</Text>
      <Text>{counter}</Text>
    </>
  );
}
/**Component B */
function ComponentB() {
  const { increment } = useContext(CounterContext);

  return (
    <>
      <Text>Cmponent B</Text>
      <Button title="Increment" onPress={increment()}></Button>
    </>
  );
}
function App() {
  return (
    <CounterProvider>
      <>
        <ComponentA />
        <ComponentB />
      </>
    </CounterProvider>
  );
}

export default App;
