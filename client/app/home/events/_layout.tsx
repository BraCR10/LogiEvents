import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return(<Stack>
    <Stack.Screen name="index" options={{headerShown: false,title: 'Home'}} />
    <Stack.Screen name="[id]" options={{ headerShown: false,title: 'Perfil de Usuario' }} />
  </Stack>);
}
