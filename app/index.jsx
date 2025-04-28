import { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Pressable,
  Text,
} from "react-native";

const Home = () => {
  const [statusBarHidden, setIsStatusBarHidden] = useState(false);
  const [statusBarColor, setIsStatusBarColor] = useState("black");

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={statusBarHidden}
        backgroundColor={statusBarColor}
        barStyle={statusBarColor === "black" ? "dark-content" : "light-content"}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Pressable
          onPress={() => setIsStatusBarHidden(!statusBarHidden)}
          style={{ backgroundColor: "black", padding: 10, borderRadius: 30 }}
        >
          <Text style={{ color: "white" }}>Click me</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            setIsStatusBarColor((prevColor) =>
              prevColor === "black" ? "white" : "black"
            )
          }
          style={{ backgroundColor: "black", padding: 10, borderRadius: 30 }}
        >
          <Text style={{ color: "white" }}>Change Color</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
});
