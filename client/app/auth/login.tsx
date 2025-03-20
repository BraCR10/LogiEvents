import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
export default function HomeScreen() {
  const router = useRouter();

  const goHome = () => {
      router.push("/home"); 
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Please login!</Text>
      <Button title="Login" onPress={goHome} />
    </View>
  );
}
