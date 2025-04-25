import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
const imgLogo = require("../assets/BU_logo.png");

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* <ImageBackground
        style={{ width: 200, height: 200 }}
        source={{ uri: "https://picsum.photos/300" }}
      ></ImageBackground> */}
      <ScrollView>
        <Text>
          <Text style={{ color: "red" }}>Hello</Text> World
        </Text>
        <View>
          <Image source={imgLogo} />
        </View>
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
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
