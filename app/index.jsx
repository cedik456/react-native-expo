import { StyleSheet, View, Alert, Pressable, Text } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#333" : "#000",
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 9999,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
        onPress={() => console.log("Pressed")}
      >
        <Text style={{ color: "white" }}>Alert</Text>
      </Pressable>
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
