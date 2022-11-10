import React, { useState, useEffect } from "react";
import { Button, Text } from "react-native";
function CounterBSE(props) {
  let counter = props.counter;
  let abc = 0;
  useEffect(() => {
    //database reading
    console.log("useEffect called");
  }, [props]);
  console.log("Counter BSE Component rendered");
  return (
    <>
      <Text>{counter}</Text>
      <Button
        title="Increment"
        onPress={() => {
          props.setCounter(counter + 1);
          abc += 1;
          console.log(counter);
        }}
      ></Button>
    </>
  );
}

export default CounterBSE;
