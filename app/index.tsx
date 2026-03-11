import { router } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Form App</Text>
        <Text style={styles.subtitle}>React Hook Form + Validation</Text>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/employee-form")}
        >
          <Text style={styles.buttonText}>Employee Form</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/sign-in")}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/sign-up")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    width: "100%",
    maxWidth: 350,
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#0f172a",
  },

  subtitle: {
    color: "#64748b",
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#2563eb",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});