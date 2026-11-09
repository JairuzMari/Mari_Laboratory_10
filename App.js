import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./pages/HomeScreen";
import MoviesScreen from "./pages/MoviesScreen";
import CategoryScreen from "./pages/CategoryScreen";
import ProfileScreen from "./pages/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack navigator for Movies and its sub-category pages with hidden bottom nav requirement
function MoviesStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#1e1e2f" },
        headerTintColor: "#ffffff",
      }}
    >
      <Stack.Screen
        name="MoviesMain"
        component={MoviesScreen}
        options={{ title: "CineVerse - Movies" }}
      />
      <Stack.Screen
        name="CategoryDetail"
        component={CategoryScreen}
        options={({ route }) => ({
          title: route.params?.categoryTitle || "Category",
        })}
      />
    </Stack.Navigator>
  );
}

// Helper to hide bottom tab when inside CategoryDetail sub-screen
function getTabBarStyle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "";
  if (routeName === "CategoryDetail") {
    return { display: "none" };
  }
  return {
    backgroundColor: "#1e1e2f",
    borderTopColor: "#2a2a3f",
    height: 60,
    paddingBottom: 8,
  };
}

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#121218" }}
        edges={["top"]}
      >
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerStyle: { backgroundColor: "#1e1e2f" },
              headerTintColor: "#ffffff",
              headerTitleStyle: { fontWeight: "bold" },
              tabBarActiveTintColor: "#e50914",
              tabBarInactiveTintColor: "#8c8c9e",
              tabBarStyle:
                route.name === "MoviesTab"
                  ? getTabBarStyle(route)
                  : {
                      backgroundColor: "#1e1e2f",
                      borderTopColor: "#2a2a3f",
                      height: 60,
                      paddingBottom: 8,
                    },
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Home") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "MoviesTab") {
                  iconName = focused ? "film" : "film-outline";
                } else if (route.name === "Profile") {
                  iconName = focused ? "person" : "person-outline";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "CineVerse Home" }}
            />
            <Tab.Screen
              name="MoviesTab"
              component={MoviesStackNavigator}
              options={{ title: "Movies", headerShown: false }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ title: "My Profile" }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
