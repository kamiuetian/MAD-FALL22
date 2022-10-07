import { StyleSheet, Text, View, TextInput } from "react-native";
import Greeting from "./Components/Greeting";
export default function App() {
  return (
    <View style={styles.container}>
      <Greeting name="BSE" uni="CUI" city="Attock" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
