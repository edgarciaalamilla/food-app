import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign name="search1" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        // onChangeText={(newTerm) => onTermChange(newTerm)}
        // onEndEditing={() => onTermSubmit()}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    margin: 15,

    flexDirection: "row",
  },
  iconStyle: {
    fontSize: 30,
    color: "black",
    alignSelf: "center",
    marginHorizontal: 15,
  },
  inputStyle: {
    fontSize: 22,

    // borderColor: "black",
    // borderWidth: 5,
    flex: 1,
  },
});

export default SearchBar;
