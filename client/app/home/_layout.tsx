import React from "react";
import { Stack } from "expo-router";
import Navbar from "../../components/Navbar";

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="[id]" options={{ title: "Event Details" }} />
      </Stack>
    </>
  );
}
