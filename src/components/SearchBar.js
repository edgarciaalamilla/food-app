import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.searchBarStyle}>
      <AntDesign name="search1" size={30} color="black" />
      <TextInput placeholder="Search" style={styles.searchTextStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarStyle: {
    backgroundColor: "#CCCCCC",
    borderRadius: 5,
    margin: 15,
    paddingLeft: 10,
    height: 50,

    flexDirection: "row",
    alignItems: "center",
  },
  searchTextStyle: {
    fontSize: 20,
    marginLeft: 10,
  },
});

export default SearchBar;
