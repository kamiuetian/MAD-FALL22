import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import CounterBSE from "./Components/CounterBSE";
import CounterExample from "./Components/CounterExample";
import Lab7 from "./Components/Lab7";
import MyText from "./Components/MyText.jsx";
export default function App() {
  let [counter, setCounter] = useState(0);
  console.log("App Component loaded");
  function onTextPressed() {
    console.log("Text Pressed");
  }
  function onBtnPressed() {}

  return (
    <View style={sty.container}>
      {/* <CounterBSE counter={counter} setCounter={setCounter}></CounterBSE>
      
 */}
      <Pressable
        onPressIn={() => {
          console.log("on Press In called");
        }}
        onPressOut={() => {
          console.log("on Press Out called");
        }}
        onPress={() => {
          console.log("on Press called");
        }}
        onLongPress={() => {
          console.log("On Ong Press Called");
        }}
      >
        <View style={{ width: 100, height: 100, backgroundColor: "green" }}>
          <Text>This is my article</Text>
        </View>
      </Pressable>

      {/* <CounterExample
        counter={counter}
        setCounter={setCounter}
      ></CounterExample>
      <MyText>
        <Text>This is Text 1</Text>
        <Text>This is text 2</Text>
      </MyText> */}
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
