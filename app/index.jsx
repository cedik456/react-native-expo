import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";
const imgLogo = require("../assets/BU_logo.png");

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      {/* <ImageBackground
        style={{ width: 200, height: 200 }}
        source={{ uri: "https://picsum.photos/300" }}
      ></ImageBackground> */}
      <ScrollView>
        <View>
          <Image source={imgLogo} />
        </View>
        <Pressable
          style={[styles.button, styles.center]}
          onPress={() => setIsModalOpen(true)}
        >
          <Text style={styles.buttonText}>Click</Text>
        </Pressable>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et,
          eveniet iure nemo nesciunt odit omnis fuga maxime voluptatum harum
          officia quod impedit eius ex laudantium autem mollitia provident
          rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          esse laborum, quae voluptas ipsa, eaque accusamus dicta aliquid
          commodi, aperiam amet tempore vel similique impedit praesentium est
          fugit iste asperiores! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugiat et, eveniet iure nemo nesciunt odit omnis
          fuga maxime voluptatum harum officia quod impedit eius ex laudantium
          autem mollitia provident rerum. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Eius esse laborum, quae voluptas ipsa,
          eaque accusamus dicta aliquid commodi, aperiam amet tempore vel
          similique impedit praesentium est fugit iste asperiores! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Fugiat et, eveniet iure
          nemo nesciunt odit omnis fuga maxime voluptatum harum officia quod
          impedit eius ex laudantium autem mollitia provident rerum. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Eius esse laborum,
          quae voluptas ipsa, eaque accusamus dicta aliquid commodi, aperiam
          amet tempore vel similique impedit praesentium est fugit iste
          asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugiat et, eveniet iure nemo nesciunt odit omnis fuga maxime
          voluptatum harum officia quod impedit eius ex laudantium autem
          mollitia provident rerum. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Eius esse laborum, quae voluptas ipsa, eaque
          accusamus dicta aliquid commodi, aperiam amet tempore vel similique
          impedit praesentium est fugit iste asperiores! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Fugiat et, eveniet iure nemo
          nesciunt odit omnis fuga maxime voluptatum harum officia quod impedit
          eius ex laudantium autem mollitia provident rerum. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Eius esse laborum, quae
          voluptas ipsa, eaque accusamus dicta aliquid commodi, aperiam amet
          tempore vel similique impedit praesentium est fugit iste asperiores!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et,
          eveniet iure nemo nesciunt odit omnis fuga maxime voluptatum harum
          officia quod impedit eius ex laudantium autem mollitia provident
          rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          esse laborum, quae voluptas ipsa, eaque accusamus dicta aliquid
          commodi, aperiam amet tempore vel similique impedit praesentium est
          fugit iste asperiores!
        </Text>
      </ScrollView>
      <Modal
        visible={isModalOpen}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={[styles.container, { backgroundColor: "red" }]}>
          <Text>This is a modal</Text>
          <Pressable
            style={[styles.button]}
            onPress={() => setIsModalOpen(false)}
          >
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },

  button: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: 100,
    height: 40,
    marginBottom: 20,
    borderRadius: 5,
  },

  buttonText: {
    color: "white",
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
