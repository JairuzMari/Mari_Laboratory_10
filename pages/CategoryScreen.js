import React from "react";
import { View, StyleSheet } from "react-native";
import MovieList from "../components/MovieList";

export default function CategoryScreen({ route }) {
  const { categoryKey } = route.params;

  return (
    <View style={styles.container}>
      <MovieList category={categoryKey} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121218",
  },
});
