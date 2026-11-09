import React from "react";
import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/moviesData";

export default function MoviesScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.headerTitle}>Movie Categories</Text>
      {CATEGORIES.map((cat) => (
        <Pressable
          key={cat.key}
          style={styles.categoryCard}
          onPress={() =>
            navigation.navigate("CategoryDetail", {
              categoryKey: cat.key,
              categoryTitle: cat.title,
            })
          }
        >
          <Text style={styles.categoryText}>{cat.title}</Text>
          <Text style={styles.arrowText}>➔</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121218",
    padding: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 16,
  },
  categoryCard: {
    flexDirection: "row",
    backgroundColor: "#1e1e2f",
    padding: 20,
    borderRadius: 12,
    marginBottom: 14,
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  arrowText: {
    color: "#e50914",
    fontSize: 18,
    fontWeight: "bold",
  },
});
