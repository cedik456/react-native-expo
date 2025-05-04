import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const Home = () => {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions({ window });
    });
    return () => subscription?.remove();
  });

  const window = dimensions;
  const windowWidth = window.width;
  const windowHeight = window.height;
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
