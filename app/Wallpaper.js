import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";

import SideBar from "./Slider.js";
import ThreeDots from "./ThreeDots.js";

import WallpaperImg from "./wallpaper.json";

// Static map for image resolution
const imageMap = {
  "kartik-kurdekar-JcY8QC675ek-unsplash.jpg": require("../assets/kartik-kurdekar-JcY8QC675ek-unsplash.jpg"),
  "saiyam-arora-DOM1FCGZul0-unsplash.jpg": require("../assets/saiyam-arora-DOM1FCGZul0-unsplash.jpg"),
  // Add other images here as needed
};

const Wallpaper = () => {
  const [showWallpapers, setShowWallpapers] = useState(false);
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);
  const [selectedWallpaper1, setSelectedWallpaper1] = useState(null);
  const [selectedWallpaper3, setSelectedWallpaper3] = useState(null);
  const [selectedWallpaper4, setSelectedWallpaper4] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isDotsVisible, setIsDotsVisible] = useState(false);
  const [activeWallpaperCategory, setActiveWallpaperCategory] = useState(null);

  // Resolve the image sources using the static imageMap
  const wallpapers = WallpaperImg.wallpapers.map((item) => ({
    ...item,
    source: imageMap[item.source], // Resolve image path
  }));

  const wallpapers1 = WallpaperImg.wallpapers1.map((item) => ({
    ...item,
    source: imageMap[item.source],
  }));

  const wallpapers3 = WallpaperImg.wallpapers3.map((item) => ({
    ...item,
    source: imageMap[item.source],
  }));

  const wallpapers4 = WallpaperImg.wallpapers4.map((item) => ({
    ...item,
    source: imageMap[item.source],
  }));

  // Render wallpapers for selected category
  const renderWallpapers = () => {
    let wallpapersToDisplay = [];
    switch (activeWallpaperCategory) {
      case "mobile":
        wallpapersToDisplay = wallpapers;
        break;
      case "tablet":
        wallpapersToDisplay = wallpapers1;
        break;
      case "category3":
        wallpapersToDisplay = wallpapers3;
        break;
      case "category4":
        wallpapersToDisplay = wallpapers4;
        break;
      default:
        wallpapersToDisplay = [];
        break;
    }

    return (
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => setIsSidebarVisible(!isSidebarVisible)}
          >
            <MaterialIcons name="menu" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Mahindra Thar Wallpapers</Text>
          <MaterialIcons name="refresh" size={24} color="white" />
          <TouchableOpacity onPress={() => setIsDotsVisible(!isDotsVisible)}>
            <Entypo name="dots-three-vertical" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.gridContainer}>
          {wallpapersToDisplay.map((wallpaper) => (
            <View key={wallpaper.id} style={styles.gridItem}>
              <TouchableOpacity
                onPress={() => {
                  if (activeWallpaperCategory === "mobile") {
                    setSelectedWallpaper(wallpaper.source);
                  } else if (activeWallpaperCategory === "tablet") {
                    setSelectedWallpaper1(wallpaper.source);
                  } else if (activeWallpaperCategory === "category3") {
                    setSelectedWallpaper3(wallpaper.source);
                  } else if (activeWallpaperCategory === "category4") {
                    setSelectedWallpaper4(wallpaper.source);
                  }
                  setIsModalVisible(true);
                }}
              >
                <Image
                  source={wallpaper.source}
                  style={styles.wallpaperImage}
                />
                <Text style={styles.previewText}>PREVIEW</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  };

  const setWallpaper = () => {
    Alert.alert("Wallpaper Set", "The selected wallpaper has been set successfully!");
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {isDotsVisible && (
        <ThreeDots setIsDotsVisible={setIsDotsVisible} setShowWallpapers={setShowWallpapers} />
      )}
      {isSidebarVisible && (
        <SideBar setIsSidebarVisible={setIsSidebarVisible} />
      )}
      <ScrollView>
        <View>
          {!showWallpapers ? (
            <>
              <TouchableOpacity
                onPress={() => {
                  setShowWallpapers(true);
                  setActiveWallpaperCategory("mobile");
                }}
                style={styles.mainImageContainer}
              >
                <Image
                  source={require("../assets/abhinav-arya-v0TJ6XzUhnc-unsplash.jpg")}
                  style={styles.mainImage}
                />
                <Text style={styles.title}>Mobile Wallpapers</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setShowWallpapers(true);
                  setActiveWallpaperCategory("tablet");
                }}
                style={styles.mainImageContainer}
              >
                <Image
                  source={require("../assets/amjith-s-8G4hNKdu60M-unsplash.jpg")}
                  style={styles.mainImage}
                />
                <Text style={styles.title}>Tablet Wallpapers</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setShowWallpapers(true);
                  setActiveWallpaperCategory("category3");
                }}
                style={styles.mainImageContainer}
              >
                <Image
                  source={require("../assets/pexels-eberhardgross-443446.jpg")}
                  style={styles.mainImage}
                />
                <Text style={styles.title}>More Mobile Wallpapers</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setShowWallpapers(true);
                  setActiveWallpaperCategory("category4");
                }}
                style={styles.mainImageContainer}
              >
                <Image
                  source={require("../assets/pexels-samandgos-709552.jpg")}
                  style={styles.mainImage}
                />
                <Text style={styles.title}>More Tablet Wallpapers</Text>
              </TouchableOpacity>
            </>
          ) : (
            renderWallpapers()
          )}
        </View>
        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            {(selectedWallpaper || selectedWallpaper1 || selectedWallpaper3 || selectedWallpaper4) && (
              <Image
                source={selectedWallpaper || selectedWallpaper1 || selectedWallpaper3 || selectedWallpaper4}
                style={styles.modalImage}
              />
            )}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.setWallpaperButton}
                onPress={setWallpaper}
              >
                <Text style={styles.buttonText}>Set as Wallpaper</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 50,
  },
  mainImage: {
    width: "100%",
    height: 250,
  },
  mainImageContainer: {
    marginBottom: 0,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
    borderBottomWidth: 2,
    borderBottomColor: "#a4b2b3",
  },
  header: {
    backgroundColor: "#333",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    height: 55,
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
    color: "#777c7d",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginLeft: 8,
    marginRight: 13,
  },
  gridItem: {
    width: "49%",
    marginBottom: 15,
  },
  wallpaperImage: {
    width: "100%",
    height: 150,
  },
  previewText: {
    position: "absolute",
    bottom: 0,
    fontWeight: "semibold",
    textAlign: "center",
    backgroundColor: "rgba(236, 220, 220, 0.5)",
    color: "white",
    padding: 5,
    fontSize: 12,
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalImage: {
    width: "100%",
    height: "90%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 5,
    width: "100%",
    marginTop: 5,
  },
  setWallpaperButton: {
    backgroundColor: "green",
    padding: 10,
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "red",
    padding: 10,
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Wallpaper;
