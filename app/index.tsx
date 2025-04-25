import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
const imgLogo = require("../assets/BU_logo.png");

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <ImageBackground
        style={{ width: 200, height: 200 }}
        source={{ uri: "https://picsum.photos/300" }}
      ></ImageBackground>
      <Text>
        <Text style={{ color: "red" }}>Hello</Text> World
      </Text>
      <View>
        <Image source={imgLogo} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
