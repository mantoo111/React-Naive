import { View, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

const Screen1 = () => {
  return (
    <View style={{ marginTop: 50, backgroundColor: "black" }}>
      <Text style={{ color: "white", textAlign: "center", marginBottom: 20 }}>screen1</Text>
      <Button
        textColor="white"
        style={{ backgroundColor: "red", margin: 30, borderRadius: 30 }}
        onPress={() => console.log("button pressed")}
        onLongPress={() => console.log("long press detected")}
      >
        Click me
      </Button>
    </View>
  );
};

export default Screen1;
