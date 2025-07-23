import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>
      <Link href="/products">Go to Products</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
});
