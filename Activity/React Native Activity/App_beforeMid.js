import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
  Button,
} from "react-native";
import AlertComponent from "./Components/AlertComponent";
import CounterBSE from "./Components/CounterBSE";
import CounterExample from "./Components/CounterExample";
import Lab6 from "./Components/Lab6";
import Lab7 from "./Components/Lab7";
import LabTask28Oct from "./Components/LabTask28Oct";
import MyText from "./Components/MyText.jsx";
export default function App() {
  /* let [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("useEffect hook called");
  }, []); /*1- Called on every render
  2- [] called on first render only
  */
  /* useEffect(() => {
    console.log("useEffect hook called on counter update");
  }, [counter]); */

  /* let [counter, setCounter] = useState(0);
  let abc = 1;
  function onTextPressed() {
    console.log("Text Pressed");
  }
  function onBtnPressed() {}
 */
  return (
    <View style={{ flex: 1, paddingTop: 30 }}>
      <AlertComponent></AlertComponent>
      {/* <Text>{counter}</Text>
      <Button
        title="Increment"
        onPress={() => {
          setCounter((counter += 1));
        }}
      ></Button> */}

      {/**Lab Task Flat List */}
      {/*
      <CounterBSE
        abc={abc}
        counter={counter}
        setCounter={setCounter}
      ></CounterBSE> */}

      {/* <Pressable
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
      </Pressable> */}

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
