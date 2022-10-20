import { Text, View } from "react-native";

function FlatItem({ Item }) {
  console.log(Item.item);
  return (
    <View>
      <Text>{Item.name}</Text>
    </View>
  );
}

export default FlatItem;
