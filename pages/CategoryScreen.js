import React from "react";
import { View, StyleSheet } from "react-native";
import MovieList from "../components/MovieList";

export default function CategoryScreen({ route, navigation }) {
  const { categoryKey } = route.params;

  return (
    <View style={styles.container}>
      <MovieList category={categoryKey} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121218",
  },
});