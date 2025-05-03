import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
const Colon = require("../assets/Colon.png");

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size="small" color="black" /> */}
      <View style={[styles.box, styles.boxShadow]}></View>
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
  box: {
    width: 100,
    height: 100,
    backgroundColor: "grey",
    borderRadius: 6,
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 6,
    shadowRadius: 4,
  },
  // for android specifically
  // androidShadow: {
  //   elevation: 10,
  // },
});
