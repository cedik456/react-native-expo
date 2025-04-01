import { View, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.helloText}>Hello, World! 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the whole screen
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#f0f0f0",
  },
  helloText: {
    fontSize: 24,
    fontWeight: "light",
    color: "#333",
  },
});
