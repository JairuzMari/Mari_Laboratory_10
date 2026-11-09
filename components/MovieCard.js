import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function MovieCard({ movie }) {
  return (
    <View style={styles.cardContainer}>
      <Image source={movie.image} style={styles.poster} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.details}>
          Year: {movie.year} | ⭐ {movie.rating}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {movie.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#1e1e2f",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  poster: {
    width: 60,
    height: 90,
    borderRadius: 6,
    resizeMode: "cover",
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  details: {
    color: "#a0a0b2",
    fontSize: 12,
    marginVertical: 4,
  },
  description: {
    color: "#cfcfdf",
    fontSize: 11,
  },
});
