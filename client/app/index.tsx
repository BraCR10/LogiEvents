import React from "react";
import { Text, View } from "react-native";
import Navbar  from "../components/Navbar";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar />
    </View>
  );
}
