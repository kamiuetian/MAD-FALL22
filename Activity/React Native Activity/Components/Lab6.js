import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import FlatItem from "./FlatItem";
function Lab6(props) {
  const DATA = [
    { name: "ali", id: 1 },
    { name: "asim", id: 2 },
    { name: "mohid", id: 3 },
  ];
  function itemrenderer({ item, index }) {
    return <FlatItem Item={item}></FlatItem>;
  }
  return (
    <>
      <FlatList
        data={DATA}
        renderItem={itemrenderer}
        keyExtractor={id}
      ></FlatList>
    </>
  );
}

export default Lab6;
export const styles = StyleSheet.create({
  header: {
    height: 300,
    width: 200,
    backgroundColor: "red",
  },
});
