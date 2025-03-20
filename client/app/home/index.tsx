import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Index() {
  const goWelcome = () => {
      router.push("/"); 
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.title}>Welcome to Home</Text>
        <Button title="Logout" onPress={goWelcome} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcomeContainer: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    marginTop: 50
  },
  title: {
    fontSize: 24, 
    marginBottom: 20, 
    justifyContent: "center"
  }
});