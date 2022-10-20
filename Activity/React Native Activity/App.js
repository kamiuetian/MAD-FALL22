import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ChessBoard from "./Components/ChessBoard";
import Lab5Part2 from "./Components/Lab5Part2";
import Lab6 from "./Components/Lab6";
import { styles } from "./Components/Lab6";
export default function App() {
  console.log(styles);
  return (
    <View style={sty.container}>
      <Lab6></Lab6>
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
