import { View, Button } from "react-native";
import MyText from "./MyText.jsx";

function CounterExample(props) {
  let counter = props.counter;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <MyText>{props.counter}</MyText>
      <Button
        title="Increment"
        onPress={() => {
          props.setCounter((counter += 1));
        }}
      ></Button>
    </View>
  );
}

export default CounterExample;
