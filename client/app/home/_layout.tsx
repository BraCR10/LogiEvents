import React from "react";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function HomeLayout() {
  return (
    <View>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="[id]" options={{ title: "Event Details" }} />
      </Stack>
    </View>
  );
}
