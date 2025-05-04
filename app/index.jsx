import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

const Home = () => {
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? "70%" : "90%",
            height: windowHeight > 600 ? "60%" : "80%",
          },
        ]}
      >
        <Text
          style={{
            color: "white",
            fontSize: windowWidth > 500 ? 50 : 24,
            fontWeight: "bold",
          }}
        >
          Box
        </Text>
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
    backgroundColor: "white",
  },
  box: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
});
