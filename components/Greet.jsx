import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Greet = ({ name }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.textColor}>Hello {name}</Text>
    </View>
  );
};

export default Greet;

const styles = StyleSheet.create({
  card: {
    width: 300,
    borderRadius: 16,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },

  textColor: {
    color: "white",
  },
});
