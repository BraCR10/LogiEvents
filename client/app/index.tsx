import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

export default function HomeScreen() {
  const router = useRouter();

  const goHome = () => {
      router.push("/auth/login"); 
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to LogiEvents</Text>
      <Button title="Try login" onPress={goHome} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
  },
  title: {
    fontSize: 24, 
    marginBottom: 20
  }
});   