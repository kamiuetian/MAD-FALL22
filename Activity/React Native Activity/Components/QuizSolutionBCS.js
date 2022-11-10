import React from "react";
import { Pressable, View, Text } from "react-native";

function QuizSolutionBCS(props) {
  return (
    <Pressable onPress={() => console.log("I am pressed")}>
      <View>
        <Text>Heelo World</Text>
      </View>
    </Pressable>
  );
}

import React from "react";

function MyComponent({ name, section }) {
  return (
    <>
      <Text>{name}</Text>
      <Text style={{ alignItems: "center", justifyContent: "center" }}>
        {section}
      </Text>
    </>
  );
}
export default QuizSolutionBCS;
