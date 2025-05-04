import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
const Colon = require("../assets/Colon.png");

const Home = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
        </View>
        {/* <ActivityIndicator size="small" color="black" /> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  box: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 4,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
