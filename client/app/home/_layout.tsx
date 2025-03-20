import React from "react";
import { Stack } from "expo-router";
import Navbar from "../../components/Navbar";
import { View } from "react-native";

export default function HomeLayout() {
  return (
    <View>
      <Navbar />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="[id]" options={{ title: "Event Details" }} />
      </Stack>
    </View>
  );
}
