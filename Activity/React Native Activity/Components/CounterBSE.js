import React, { useState } from "react";
import { Button, Text } from "react-native";
function CounterBSE(props) {
  let counter = props.counter;
  console.log("Counter BSE Component rendered");
  return (
    <>
      <Text>{counter}</Text>
      <Button
        title="Increment"
        onPress={() => {
          props.setCounter(counter + 1);
          console.log(counter);
        }}
      ></Button>
    </>
  );
}

export default CounterBSE;
