import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { MOVIES } from "../data/moviesData";
import MovieCard from "./MovieCard";

export default function MovieList({ category, navigation }) {
  const filteredMovies = MOVIES.filter((movie) =>
    movie.categories.includes(category)
  );

  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onPress={() =>
              navigation.navigate("MovieDetails", { movie, title: movie.title })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#121218",
    justifyContent: "center", // Centers vertically on the screen
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Centers the movie cards horizontally!
    paddingHorizontal: 20,
    paddingVertical: 20,
    minWidth: "100%", // Ensures it spans enough width to center properly
  },
});