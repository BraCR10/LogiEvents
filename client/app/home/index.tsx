import React from "react";
import { Button, Text, View } from "react-native";
import { router } from "expo-router";

const goWelcome = () => {
    router.push("/"); 
};
export default function Index() {
  return (
    <View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" , marginTop: 50}}>
            <Text style={{ fontSize: 24, marginBottom: 20, justifyContent:"center" }}>Welcome to Home</Text>
            <Button title="Logout" onPress={goWelcome} />
        </View>
    </View>
  );
}
