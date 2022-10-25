import { View, StyleSheet, Image } from "react-native";
function ChessBoard(props) {
  const blocks = [];
  for (let index = 1; index <= 8; index++) {
    for (let yindex = 1; yindex <= 8; yindex++) {
      blocks.push(
        <View
          style={
            index % 2 == 0
              ? yindex % 2 == 0
                ? styles.gblock
                : styles.bblock
              : yindex % 2 == 0
              ? styles.bblock
              : styles.gblock
          }
        ></View>
      );
    }
  }
  return <View style={styles.board}>{blocks}</View>;
}
const styles = StyleSheet.create({
  board: {
    width: 420,
    height: 420,
    borderColor: "brown",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  gblock: {
    width: 50,
    height: 50,
    backgroundColor: "grey",
  },
  bblock: {
    width: 50,
    height: 50,
    backgroundColor: "black",
  },
});
export default ChessBoard;
