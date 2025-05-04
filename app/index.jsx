import { StyleSheet, Text, View } from "react-native";
import Box from "../components/Box";

const Home = () => {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "yellow", flexShrink: 1 }}>Box 1</Box>
      <Box style={{ backgroundColor: "red", flexShrink: 2 }}>Box 2</Box>
      {/* <Box style={{ backgroundColor: "green" }}>Box 3</Box>
      <Box style={{ backgroundColor: "pink" }}>Box 4</Box>
      <Box style={{ backgroundColor: "blue" }}>Box 5</Box> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 70,
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 5,
    // alignContent: "stretch",
    flex: 1,
  },
});
