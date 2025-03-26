import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

export default function RegisterScreen() {
  const router = useRouter();

  const goLogin = () => {
      router.push("/auth/login"); 
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
      <Button title="Register" onPress={goLogin} />
      <View style={styles.loginLink}>
        <Text>Already have an account?</Text>
        <Button title="Login" onPress={goLogin} />
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
  loginLink: {
    marginTop: 20,
    alignItems: "center"
  }
});