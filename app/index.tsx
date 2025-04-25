import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
      <View style={{ backgroundColor: "red", width: 100, height: 100 }}></View>
      <View
        style={{ backgroundColor: "green", width: 100, height: 100 }}
      ></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
