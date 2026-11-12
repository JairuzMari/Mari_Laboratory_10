import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MovieDetailsScreen({ route }) {
  const { movie } = route.params;

  // Extended descriptive text for a richer detail view experience
  const extendedDescription = `${movie.description} This cinematic masterpiece takes audiences on an unforgettable journey filled with stunning visuals, gripping suspense, and deep thematic storytelling that lingers long after the credits roll.`;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Poster Container with Drop Shadow */}
      <View style={styles.posterWrapper}>
        <Image source={movie.image} style={styles.poster} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        
        {/* Rating and Year Row */}
        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="calendar-outline" size={16} color="#a0a0b2" />
            <Text style={styles.metaText}>{movie.year}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="star" size={16} color="#f5c518" />
            <Text style={styles.metaText}>{movie.rating} / 10</Text>
          </View>
        </View>

        {/* Categories Badges */}
        <View style={styles.badgeContainer}>
          {movie.categories.map((cat, index) => (
            <Text key={index} style={styles.badge}>
              {cat.replace("_", " ").toUpperCase()}
            </Text>
          ))}
        </View>

        {/* Centered Synopsis Section */}
        <Text style={styles.sectionHeader}>Synopsis</Text>
        <Text style={styles.description}>{extendedDescription}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121218",
  },
 posterWrapper: {
    alignItems: "center",
    backgroundColor: "#1a1a24",
    paddingVertical: 28,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  poster: {
    width: 280,   // Increased from 200
    height: 420,  // Increased from 300 (keeps the exact 2:3 movie poster ratio)
    borderRadius: 16,
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: "#2a2a3f",
  },
  poster: {
    width: 200,
    height: 300,
    borderRadius: 12,
    resizeMode: "cover",
  },
  contentContainer: {
    padding: 24,
    alignItems: "center", // Centers all children horizontally
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
    textAlign: "center",
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
  },
  metaText: {
    fontSize: 14,
    color: "#a0a0b2",
    marginLeft: 6,
    fontWeight: "600",
  },
  badgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 24,
  },
  badge: {
    backgroundColor: "#e50914",
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "bold",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginHorizontal: 4,
    overflow: "hidden",
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#cfcfdf",
    lineHeight: 22,
    textAlign: "center", // Centers the synopsis paragraph
    maxWidth: 500, // Keeps it readable on wider screens/tablets
  },
});