import React from "react";
import { Alert, Button } from "react-native";
import { useState } from "react";
function AlertComponent(props) {
  let items = ["i1", "i2", "i3"];
  const [item, setItem] = useState(items);
 setItem([]) //item=[]
 
  //[stateVariable,callbackfunc]
  function showSimpleAlert() {
    Alert.alert("this is my title", "This is a simple aLert", [
      { title: "Yes", onPress: () => {} },
      { title: "No", onPress: () => {} },
    ]);
  }
  return (
    <>
      <Button title="Simple Alert" onPress={showSimpleAlert}></Button>
    </>
  );
}

export default AlertComponent;
