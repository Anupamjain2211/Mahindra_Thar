import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const ThreeDots = ({ setIsDotsVisible, setShowWallpapers }) => {
  return (
    <View style={styles.sidebarContainer}>
      <View style={styles.sidebarItem}>
        <Text style={styles.text}>Setting</Text>
      </View>
      <TouchableOpacity
  onPress={() => {
    setIsDotsVisible(false);
    setShowWallpapers(false);
  }}
>
  <View style={styles.sidebarItem}>
    <Text style={styles.text}>Exit</Text>
  </View>
</TouchableOpacity>
    </View>
  );
};

export default ThreeDots;

const styles = StyleSheet.create({
  sidebarContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 180,
    height: "11%",
    backgroundColor: "#fff",
    zIndex: 10,
  },
  sidebarItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});
