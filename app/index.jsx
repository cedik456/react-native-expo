import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
const Colon = require("../assets/Colon.png");

const Home = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="black" />
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
