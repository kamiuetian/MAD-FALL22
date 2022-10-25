import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import CounterExample from "./Components/CounterExample";
import Lab7 from "./Components/Lab7";
import MyText from "./Components/MyText.jsx";
export default function App() {
  const [counter, setCounter] = useState(0);
  function onTextPressed() {
    console.log("Text Pressed");
  }
  function onBtnPressed() {}
  return (
    <View style={sty.container}>
      <CounterExample
        counter={counter}
        setCounter={setCounter}
      ></CounterExample>
      <MyText>
        <Text>This is Text 1</Text>
        <Text>This is text 2</Text>
      </MyText>
    </View>
  );
}

const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
});
