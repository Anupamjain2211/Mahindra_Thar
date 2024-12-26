import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const SideBar = ({ setIsSidebarVisible }) => {
  // const [isSidebarVisible, setIsSidebarVisible] = useState(true); // State to control sidebar visibility

  return (
    <View style={styles.sidebarContainer}>
      <Image
        source={require("../assets/pexels-asadphoto-1450360.jpg")}
        style={styles.sidebarImage}
      />

      {/* Each text item with an icon */}
      <View style={styles.sidebarItem}>
        <MaterialCommunityIcons
          name="tablet-cellphone"
          size={20}
          color="black"
        />
        <Text style={styles.text}>Mahindra Thar Wallpapers</Text>
      </View>

      <View style={styles.sidebarItem}>
        <Entypo name="mobile" size={20} color="black" />
        <Text style={styles.text}>Mahindra Thar Wallpapers</Text>
      </View>

      <View style={styles.sidebarItem}>
        <Entypo name="mobile" size={20} color="black" />
        <Text style={styles.text}>More Wallpapers</Text>
      </View>

      <View style={styles.sidebarItem}>
        <MaterialCommunityIcons
          name="tablet-cellphone"
          size={20}
          color="black"
        />
        <Text style={styles.text}>More Wallpapers For Tablet</Text>
      </View>

      <View style={styles.sidebarItem}>
        <MaterialIcons name="menu-open" size={20} color="black" />
        <Text style={styles.text}>Main Menu</Text>
      </View>

      <View style={styles.sidebarItem}>
        <Ionicons name="settings-sharp" size={20} color="black" />
        <Text style={styles.text}>Setting</Text>
      </View>

      {/* Footer section */}
      <View style={styles.footerItem}>
        <Text style={styles.textOne}>Communicate</Text>
      </View>
      <View style={styles.sidebarItem}>
        <MaterialIcons name="rate-review" size={20} color="black" />
        <Text style={styles.text}>Rate Us</Text>
      </View>

      <View style={styles.sidebarItem}>
        <MaterialIcons name="apps" size={20} color="black" />
        <Text style={styles.text}>More App</Text>
      </View>

      <View style={styles.sidebarItem}>
        <Ionicons name="share-social" size={20} color="black" />
        <Text style={styles.text}>Share</Text>
      </View>
      <TouchableOpacity onPress={() => setIsSidebarVisible(false)}>
        <View style={styles.sidebarItem}>
          <MaterialIcons name="exit-to-app" size={20} color="black" />
          <Text style={styles.text}>Exit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 280,
    height: "100%",
    backgroundColor: "#fff",
    zIndex: 10,
  },
  sidebarImage: {
    width: "100%",
    height: 150,
    marginBottom: 20,
  },
  sidebarItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  text: {
    marginLeft: 10,
    fontSize: 15,
    color: "#333",
    flex: 1,
  },

  textOne: {
    fontSize: 15,
    color: "#333",
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },

  footer: {
    marginTop: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SideBar;
