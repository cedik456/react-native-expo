import { StyleSheet, View, Alert, Pressable, Text } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#333" : "#000",
          },
          styles.alertButton,
        ]}
        onPress={() => Alert.alert("Wrong password!")}
      >
        <Text style={{ color: "white" }}>Alert</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#333" : "#000",
          },
          styles.alertButton,
        ]}
        onPress={() =>
          Alert.alert("Wrong password!", "Type password again", [
            {
              text: "Cancel",
              onPress: () => {
                console.log("Canceled");
              },
            },
            {
              text: "Ok",
              onPress: () => {
                console.log("Ok");
              },
            },
          ])
        }
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

  alertButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
  },
});
