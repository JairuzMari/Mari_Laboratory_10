import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MovieCard({ movie, onPress }) {
  return (
    <Pressable style={styles.cardContainer} onPress={onPress}>
      {/* Movie Poster */}
      <Image source={movie.image} style={styles.poster} />

      {/* Movie Info Inside Container */}
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {movie.title}
        </Text>

        <Text style={styles.details}>
          📅 {movie.year}  |  ⭐ {movie.rating} / 10
        </Text>

        <Text style={styles.description} numberOfLines={3}>
          {movie.description}
        </Text>

        {/* "Details" Button */}
        <View style={styles.button}>
          <Text style={styles.buttonText}>Details</Text>
          <Ionicons
            name="arrow-forward"
            size={14}
            color="#ffffff"
            style={{ marginLeft: 6 }}
          />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 260, // Individual card width so multiple fit horizontally
    backgroundColor: "#1a1a26",
    borderRadius: 16,
    padding: 16,
    marginRight: 20, // Space between each movie box
    alignItems: "center",
    // Floating shadow effect
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 1.5,
    borderColor: "#2a2a3f",
  },
  poster: {
    width: 228,
    height: 300,
    borderRadius: 12,
    resizeMode: "cover",
    marginBottom: 14,
  },
  infoContainer: {
    width: "100%",
    alignItems: "flex-start",
  },
  title: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  details: {
    color: "#f5c518",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    color: "#cfcfdf",
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 16,
    height: 54, // Keeps all cards the exact same height
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#e50914",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "bold",
  },
});