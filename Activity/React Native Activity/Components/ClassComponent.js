import { Button, Text } from "react-native";
import { useState } from "react";
function ClassComponent(props) {
  console.log("class Component Rededred method called");
  let [color, setColor] = useState("red");
  let [height, setHeight] = useState(40);
  function onChangeColor() {
    setColor("red");
    console.log(color);
  }
  return (
    <>
      <Text>{color}</Text>
      <Button title="Change Color" onPress={onChangeColor}></Button>
    </>
  );
}

export default ClassComponent;
