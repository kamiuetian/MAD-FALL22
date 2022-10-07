import { View, Text, TextInput, Image, Button } from "react-native";
export default function Greeting(props) {
  //console.log(props);
  function onPressed() {
    console.log("====================================");
    console.log("Text Pressed");
    console.log("====================================");
  }
  return (
    <>
      <Image
        source={require("../assets/icon.png")}
        style={{ width: 50, height: 50 }}
      ></Image>
      <Text>
        Hello Welcome
        <Text onPress={onPressed}>{props.name}</Text>
      </Text>
      <TextInput
        value="abc"
        onChangeText={(text) => {
          console.log(text);
        }}
      ></TextInput>
      <Button
        title="Press Me"
        color="red"
        disabled={true}
        onPress={() => {
          console.log("Button pressed");
        }}
      ></Button>
    </>
  );
}
