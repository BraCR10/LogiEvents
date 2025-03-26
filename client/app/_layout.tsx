import { Stack } from "expo-router";
import React from "react";
import { StyleSheet,View} from "react-native";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <View style={styles.container}>
       <Navbar />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: "Welcome" }} />
        <Stack.Screen name="home" options={{ title: "Home" }} />
        <Stack.Screen name="auth/login" options={{ title: "Auth" }} />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});