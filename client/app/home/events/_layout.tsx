import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return(<Stack>
    <Stack.Screen name="index" options={{headerShown: false,title: 'events'}} />
    <Stack.Screen name="[eventId]" options={{ headerShown: false,title: 'Event information' }} />
  </Stack>);
}
