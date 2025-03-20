import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

export default function HomeScreen() {
  const router = useRouter();

  const goHome = () => {
      router.push("/home"); 
  };

  const goRegister = () => {
        router.push("/auth/register");
    }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please login!</Text>
      <Button title="Login" onPress={goHome} />
      <View style={styles.registerBtn}>
        <Button title="Register" onPress={goRegister} />
      </View>
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
  },

  registerBtn : {
    marginTop: 20,
    alignItems: "center"
  }
});