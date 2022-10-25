import { View, Text } from "react-native";

function Lab7(props) {
  //children
  console.log(props.children);
  return (
    <>
      <View>
        <Text>{props.name}</Text>
      </View>
    </>
  );
}
export default Lab7;
