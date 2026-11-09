import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { MOVIES } from "../data/moviesData";
import MovieCard from "./MovieCard";

export default function MovieList({ category }) {
  const filteredMovies = MOVIES.filter((movie) =>
    movie.categories.includes(category),
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121218",
    paddingVertical: 10,
  },
});
