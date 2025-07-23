import { Slot } from "expo-router";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";

export default function Layout() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Expo App</Text>
      </View>
      <Slot />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Saurav</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },

  header: {
    padding: 20,
    backgroundColor: "#6200ee",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold", // Add this line
  },
  footer: {
    padding: 20,
    backgroundColor: "#6200ee",
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold", // Add this line
  },
});
