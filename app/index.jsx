import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.blackBg]}>
        <Text style={styles.primaryColor}>Black</Text>
      </View>

      <View style={[styles.box, styles.redBg]}>
        <Text style={styles.primaryColor}>Red</Text>
      </View>
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
    gap: 10,
    backgroundColor: "white",
  },

  primaryColor: {
    color: "white",
  },

  box: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 50,
    borderRadius: 4,
  },

  blackBg: {
    backgroundColor: "black",
  },

  redBg: {
    backgroundColor: "red",
  },
});
