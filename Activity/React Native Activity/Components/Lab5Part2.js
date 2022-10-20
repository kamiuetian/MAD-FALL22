import { View, StyleSheet, Text } from "react-native";

function Lab5Part2(props) {
  return (
    <View style={styles.wrapper}>
      {/*header* */}
      <View style={styles.header}>
        <Text>Block 1</Text>
      </View>
      {/**Content */}
      <View style={styles.contentArea}>
        <Text>Block 2</Text>
      </View>
      {/**Footer */}
      <View style={styles.Footer}>
        <Text>Block 3</Text>
      </View>
      {/*header* */}
      <View style={styles.header}>
        <Text>Block 4</Text>
      </View>
      {/**Content */}
      <View style={styles.contentArea}>
        <Text>Block 5</Text>
      </View>
      {/**Footer */}
      <View style={styles.Footer}>
        <Text>Block 6</Text>
      </View>
      <View style={styles.header}>
        <Text>Block 7</Text>
      </View>
      {/**Content */}
      <View style={styles.contentArea}>
        <Text>Block 8</Text>
      </View>
      {/**Footer */}
      <View style={styles.Footer}>
        <Text>Block 9</Text>
      </View>
      {/*header* */}
    </View>
  );
}

export default Lab5Part2;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    maxWidth: 1000,
    alignContent: "center",
  },
  header: {
    height: 300,
    width: 200,
    backgroundColor: "red",
  },
  contentArea: {
    height: 300,
    width: 200,
    backgroundColor: "yellow",
  },
  Footer: {
    height: 300,
    width: 200,
    backgroundColor: "green",
  },
});
