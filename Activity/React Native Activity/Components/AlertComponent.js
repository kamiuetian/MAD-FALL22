import React from "react";
import { Alert, Button } from "react-native";
import { useState } from "react";
function AlertComponent(props) {
  function showSimpleAlert() {
    Alert.alert(
      //Alert title
      "Title of Alert Dialog",
      //Alert Message
      "Message of ALert Dialog",
      //Array of buttons
      [
        //Button object
        {
          text: "OK",
          onPress: () => {
            console.log("OK button pressed");
          },
        },
        {
          text: "Cancel",
          onPress: () => {
            console.log("Cancel button pressed");
          },
        },
      ],
      //Options object
      {
        cancelable: true,
        onDismiss: () => {
          console.log("Alert dismissed by clicking outside");
        },
      }
    );
  }
  return (
    <>
      <Button title="Simple Alert" onPress={showSimpleAlert}></Button>
    </>
  );
}

export default AlertComponent;
