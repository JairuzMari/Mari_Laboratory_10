import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>Welcome to CineVerse! 🎬</Text>
      <Text style={styles.subtitle}>
        Your ultimate destination to explore top cinematic masterpieces.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("MoviesTab")}
      >
        <Text style={styles.buttonText}>Go to Movies</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121218",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  welcomeTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#a0a0b2",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#e50914",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
