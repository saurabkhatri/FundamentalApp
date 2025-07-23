import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Customnotfound() {
  return (
    <View style={styles.container}>
      <Text>+not-found</Text>
      <Link href="/">Go to Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});
