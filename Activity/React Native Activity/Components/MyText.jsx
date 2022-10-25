import { Text } from "react-native";
function MyText(props) {
  return (
    <Text
      onPress={props.onTextPressed}
      style={{ color: "red", fontWeight: "bold" }}
    >
      {props.children}
    </Text>
  );
}

export default MyText;
