import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal={true}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.resultStyle}>
              <Text>{item.name}</Text>
              <Text>{item.rating}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 15,
  },
  resultStyle: {
    marginHorizontal: 15,
  },
});

export default ResultsList;
