import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import CustomButton from "../components/CustomButton/CustomButton";
const Colon = require("../assets/Colon.png");

const Home = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
        </View>
        <CustomButton />
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
    marginHorizontal: 25,
    paddingTop: Platform.OS === "android" ? 25 : 20,
    backgroundColor: "white",
  },
  box: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 4,
  },
  text: {
    ...Platform.select({
      ios: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
      },
      android: {
        fontSize: 20,
        textAlign: "center",
      },
    }),
  },
});
