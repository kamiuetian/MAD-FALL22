import { Button, View, Text } from "react-native";
import { useState } from "react";
function Lab5(props) {
  console.log("Lab5 Component Render Method Called.");
  let [counter, setCounter] = useState(0);
  let [student,setStudent]=useState({"name":"test","regNo":"tets"})
  return (
    <View>
      <Text>{counter}</Text>
      <Button
        title="Increment"
        onPress={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      ></Button>
      <Button
        title="decrement"
        onPress={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}
      ></Button>
    </View>
  );
}

export default Lab5;
