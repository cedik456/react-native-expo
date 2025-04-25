import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <Text>
        {" "}
        <Text style={{ color: "red" }}>Hello</Text> World
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
