import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import React from "react";
import { useState } from "react";
function SingleItem({ item }) {
  return (
    <View
      style={{
        backgroundColor: "grey",
        borderBottomColor: "black",
        borderBottomWidth: 2,
      }}
    >
      <Text>{item.name}</Text>
      <Text>{item.phone}</Text>
    </View>
  );
}
function LabTask28Oct(props) {
  const [data, setData] = useState([
    { name: "kamran", key: 1, phone: 1125 },
    { name: "Ali", key: 2, phone: 42358 },
  ]);
  const [selectedContact, updateselectedContact] = useState(data[0]);
  function getItem(item) {
    updateselectedContact(item);
    console.log(selectedContact);
  }
  function itemrenderer({ item }) {
    return (
      <Pressable onLongPress={() => getItem(item)}>
        <SingleItem item={item}></SingleItem>
      </Pressable>
    );
  }
  function updateContactFunc(contact) {
    data[contact.key - 1] = contact;
    setData([...data]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.Clist}>
        <FlatList data={data} renderItem={itemrenderer}></FlatList>
      </View>
      <View style={styles.Eform}>
        <TextInput
          placeholder="Name"
          value={selectedContact.name}
          onChangeText={(text) =>
            updateselectedContact({ ...selectedContact, name: text })
          }
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "white",
            height: 50,
          }}
        ></TextInput>
        <TextInput
          placeholder="phone"
          value={selectedContact.phone.toString()}
          keyboardType="phone-pad"
          onChangeText={(text) =>
            updateselectedContact({ ...selectedContact, phone: text })
          }
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "white",
            height: 50,
          }}
        ></TextInput>
        <Button
          title="Edit"
          onPress={() => updateContactFunc(selectedContact)}
        ></Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Clist: {
    flex: 2,
    backgroundColor: "yellow",
  },
  Eform: {
    flex: 1,
    backgroundColor: "red",
  },
  container: {
    flex: 1,
  },
});
export default LabTask28Oct;
