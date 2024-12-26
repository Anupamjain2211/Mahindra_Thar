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
import { MaterialIcons } from "@expo/vector-icons"; // For icons (requires expo-vector-icons)
import Entypo from "@expo/vector-icons/Entypo";

import SideBar from "./Slider.js"; // Import the sidebar component
import ThreeDots from "./ThreeDots.js";

const Wallpaper = () => {
  const [showWallpapers, setShowWallpapers] = useState(false); // Initially set to true to show wallpapers
  const [selectedWallpaper, setSelectedWallpaper] = useState(null); // For previewing the selected wallpaper
  const [selectedWallpaper1, setSelectedWallpaper1] = useState(null); // For previewing the selected wallpaper
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isDotsVisible, setIsDotsVisible] = useState(false); // Correct the typo here
  const [activeWallpaperCategory, setActiveWallpaperCategory] = useState(null); // To track selected wallpaper category

  // Images to display in the grid
  const wallpapers = [
    {
      id: 1,
      source: require("../assets/kartik-kurdekar-JcY8QC675ek-unsplash.jpg"),
    },
    {
      id: 2,
      source: require("../assets/saiyam-arora-DOM1FCGZul0-unsplash.jpg"),
    },
    {
      id: 3,
      source: require("../assets/kartik-kurdekar-JcY8QC675ek-unsplash.jpg"),
    },
    {
      id: 4,
      source: require("../assets/kartik-kurdekar-JcY8QC675ek-unsplash.jpg"),
    },
    {
      id: 5,
      source: require("../assets/kartik-kurdekar-JcY8QC675ek-unsplash.jpg"),
    },
    {
      id: 6,
      source: require("../assets/kartik-kurdekar-JcY8QC675ek-unsplash.jpg"),
    },
  ];

  const wallpapers1 = [
    {
      id: 1,
      source: require("../assets/kartik-kurdekar-JcY8QC675ek-unsplash.jpg"),
    },
    {
      id: 2,
      source: require("../assets/saiyam-arora-DOM1FCGZul0-unsplash.jpg"),
    },
    {
      id: 3,
      source: require("../assets/kartik-kurdekar-JcY8QC675ek-unsplash.jpg"),
    },
    {
      id: 4,
      source: require("../assets/kartik-kurdekar-JcY8QC675ek-unsplash.jpg"),
    },
  ];

  // Function to render wallpaper grid based on active category
  const renderWallpapers = () => {
    const wallpapersToDisplay =
      activeWallpaperCategory === "mobile" ? wallpapers : wallpapers1;

    return (
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => setIsSidebarVisible(!isSidebarVisible)}
          >
            <MaterialIcons name="menu" size={24} color="white" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Mahindra Thar Wallpap...</Text>
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
                  activeWallpaperCategory === "mobile"
                    ? setSelectedWallpaper(wallpaper.source)
                    : setSelectedWallpaper1(wallpaper.source);
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

  // Function to handle setting the wallpaper
  const setWallpaper = () => {
    Alert.alert(
      "Wallpaper Set",
      "The selected wallpaper has been set successfully!"
    );
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Conditionally render the sidebar */}
      {isDotsVisible && (
        <ThreeDots
          setIsDotsVisible={setIsDotsVisible}
          setShowWallpapers={setShowWallpapers}
        />
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
                  setActiveWallpaperCategory("mobile"); // Show mobile wallpapers
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
                  setActiveWallpaperCategory("tablet"); // Show tablet wallpapers
                }}
                style={styles.mainImageContainer}
              >
                <Image
                  source={require("../assets/amjith-s-8G4hNKdu60M-unsplash.jpg")}
                  style={styles.mainImage}
                />
                <Text style={styles.title}>Tablet Wallpapers</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.mainImageContainer}>
                <Image
                  source={require("../assets/pexels-eberhardgross-443446.jpg")}
                  style={styles.mainImage}
                />
                <Text style={styles.title}>More Mobile Wallpapers</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.mainImageContainer}>
                <Image
                  source={require("../assets/pexels-samandgos-709552.jpg")}
                  style={styles.mainImage}
                />
                <Text style={styles.title}>More Tablet Wallpapers</Text>
              </TouchableOpacity>
            </>
          ) : (
            renderWallpapers() // This part will render the wallpapers based on selected category
          )}
        </View>

        {/* Modal for previewing the wallpaper */}
        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            {selectedWallpaper && (
              <Image source={selectedWallpaper} style={styles.modalImage} />
            )}
            {selectedWallpaper1 && (
              <Image source={selectedWallpaper1} style={styles.modalImage1} />
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
    marginBottom:50,
  },
  mainImage: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    height: 250,
  },

  mainImageContainer: {
    marginBottom: 0,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
    borderBottomWidth: 2, // Adds an underline
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
  modalImage1: {
    width: "100%",
    height: "0%",
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
    fontWeight: "bold",
  },
});

export default Wallpaper;
