import { StyleSheet, View, ActivityIndicator } from "react-native";
import Greet from "../components/Greet";

const Home = () => {
  return (
    <View style={styles.container}>
      <Greet name="Cedric Nano" />
      <Greet name="Charles Alamares" />
      <Greet name="Lou Canon" />
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
    gap: 30,
    backgroundColor: "white",
  },
});
