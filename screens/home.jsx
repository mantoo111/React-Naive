import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
const home = () => {
  return (
    <View style={{ marginTop: 50, backgroungColor: "black" }}>
      <Text>Home</Text>
      <Button
        textColor="white"
        style={{ backgroundColor: "red", margin: 30, borderradius: 30 }}
      
        onPress={() => console.log("button pressed")}
        onLongPress={()=> console.log("long")}
        >
        Click me
      </Button>
    </View>
  );
};

export default home;
