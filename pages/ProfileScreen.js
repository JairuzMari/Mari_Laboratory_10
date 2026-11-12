import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Profile Picture */}
        <Image
          source={require("../assets/images/profile.jpg")} // Make sure this matches your file name!
          style={styles.avatar}
        />

        {/* Name & Email */}
        <Text style={styles.name}>Jairuz Mari</Text>
        <Text style={styles.email}>jairuz.mari@cvsu.edu.ph</Text>
        <Text style={styles.course}>BS Information Technology - 3rd Year</Text>

        {/* Divider Line */}
        <View style={styles.divider} />

        {/* Bio */}
        <Text style={styles.bio}>
          Passionate app developer & movie enthusiast building high-performance React Native apps.
        </Text>
      </View>
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
  card: {
    backgroundColor: "#1a1a26",
    borderRadius: 20,
    padding: 44, // Increased padding for a roomier card
    width: "100%",
    maxWidth: 900,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#2a2a3f",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45,
    shadowRadius: 10,
    elevation: 8,
  },
  avatar: {
    width: 150,          // Increased from 90
    height: 150,         // Increased from 90
    borderRadius: 75,    // Half of 150 to keep it a perfect circle
    marginBottom: 20,
    borderWidth: 3,      // Slightly thicker red ring
    borderColor: "#e50914",
    resizeMode: "cover",
  },
  name: {
    color: "#ffffff",
    fontSize: 28,        // Increased from 20
    fontWeight: "bold",
    marginBottom: 6,
  },
  email: {
    color: "#a0a0b2",
    fontSize: 16,        // Increased from 13
    marginBottom: 6,
  },
  course: {
    color: "#e50914",
    fontSize: 16,        // Increased from 13
    fontWeight: "600",
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#2a2a3f",
    marginVertical: 24,
  },
  bio: {
    color: "#cfcfdf",
    fontSize: 16,        // Increased from 13
    textAlign: "center",
    lineHeight: 24,
  },
});