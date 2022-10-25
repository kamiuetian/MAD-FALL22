import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Image,
} from "react-native";

const DATA = [
  {
    title: "Main dishes",
    data: [{ name: "french", quantity: 3 }],
  },
  {
    title: "Sides",
    data: [
      { name: "french", quantity: 3 },
      { name: "soup", quantity: 3 },
    ],
  },
  {
    title: "Drinks",
    data: [
      { name: "cola", quantity: 3 },
      { name: "Water", quantity: 3 },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "sweet", quantity: 3 },
      { name: "salty", quantity: 3 },
    ],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    {/* <View>
      <Image
        source={require("../assets/images/icon.png")}
        style={{ width: 30, height: 30 }}
      ></Image>
    </View>
    <View>
      <Text style={styles.title}>{title}</Text>
    </View> */}
    <View style={styles.imgcontainer}>
      <Image
        source={require("../assets/images/icon.png")}
        style={{ width: 30, height: 30 }}
      ></Image>
    </View>
    <View style={styles.namecontainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);
function sectionRender({ section: { title } }) {
  return <Text style={styles.header}>{title}</Text>;
}

const MySectionList = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      renderItem={({ item }) => {
        console.log(item);
        return <Item title={item.name} />;
      }}
      renderSectionHeader={sectionRender}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    flex: 1,
    alignContent: "space-between",
    height: 20,
    flexDirection: "row",
    marginBottom: 5,
  },
  imgcontainer: {
    flex: 1,
    height: 20,
  },
  namecontainer: {
    flex: 1,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});

export default MySectionList;
