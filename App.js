import { setStatusBarBackgroundColor, StatusBar } from "expo-status-bar";
import {
  View,
  SafeAreaView,
  // Image,
  // TextInput,
  // StyleSheet,
  // Button,
  // Switch,
  // ToastAndroid,
  ScrollView,
} from "react-native";
import Home from "./screens/home";
import Screen1 from "./screens/screen1.jsx";
import { useState } from "react";
export default function App() {
  // const [active, setActive] = useState(false);
  // console.log(active);
  // const showToast = () => {
  //   ToastAndroid.show("welcome to this app", ToastAndroid.SHORT);
  // };
  return (
    <View>
     //for scrolling purpose 
      <SafeAreaView>
        <ScrollView>
        <Home />
        <Screen1 />
        {/* <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/135px-Apple_logo_black.svg.png",
          }}
          style={{ width: 20, padding: 20, margin: 15, height: 20 }}
        /> */}
        {/* <TextInput style={{ padding: 20, color: "black" }} /> */}
        {/* <Button title="Click here" onPress={() =>console.log("button pressed")}/> */}
        {/* <Button title="Click here" onPress={showToast} color="pink"/> */}
        {/* <Button title="Click here" onPress={showToast} color="yellow"/>
        <Button title="Click here" onPress={showToast} color="black"/>
        <Button title="Click here" onPress={showToast} color="red"/>
        <Button title="Click here" onPress={showToast} color="purple"/>
        <Button title="Click here" onPress={showToast} color="blue"/>
        <Button title="Click here" onPress={showToast} color="white"/>
        <Button title="Click here" onPress={showToast} color="pink"/>
        <Button title="Click here" onPress={showToast} color="yellow"/>
        <Button title="Click here" onPress={showToast} color="grey"/>
        <Button title="Click here" onPress={showToast} color="black"/>
        <Button title="Click here" onPress={showToast} color="red"/>
        <Button title="Click here" onPress={showToast} color="green"/>
        <Button title="Click here" onPress={showToast} color="blue"/>
        <Button title="Click here" onPress={showToast} color="purple"/>
        <Button title="Click here" onPress={showToast} color="red"/>
        <Button title="Click here" onPress={showToast} color="white"/>
        <Button title="Click here" onPress={showToast} color="grey"/>
        <Button title="Click here" onPress={showToast} color="yellow"/>
        <Button title="Click here" onPress={showToast} color="blue"/>
        <Button title="Click here" onPress={showToast} color="pink"/>
        <Button title="Click here" onPress={showToast} color="black"/>
        <Button title="Click here" onPress={showToast} color="green"/> */}
        {/* <Switch value={active} onchange={() => setActive((prev) => !prev)} /> */}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
