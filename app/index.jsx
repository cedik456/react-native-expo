import { StyleSheet, Text, View } from "react-native";
import Box from "../components/Box";

const Home = () => {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "yellow" }}>Box 1</Box>
      <Box style={{ backgroundColor: "red" }}>Box 2</Box>
      <Box style={{ backgroundColor: "green" }}>Box 3</Box>
      <Box style={{ backgroundColor: "pink", alignSelf: "stretch" }}>Box 4</Box>
      <Box style={{ backgroundColor: "blue", alignSelf: "auto" }}>Box 5</Box>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: 300,
    flexWrap: "wrap",
    marginTop: 70,
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 5,
    // flex: 1,
  },
});
