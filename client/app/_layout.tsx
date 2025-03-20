import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: "Welcome" }} />
        <Stack.Screen name="home" options={{ title: "Home" }} />
        <Stack.Screen name="auth/login" options={{ title: "Auth" }} />
      </Stack>
    </>
  );
}
