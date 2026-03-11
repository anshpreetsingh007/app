import { View, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>

      <Button
        title="Employee Form"
        onPress={() => router.push("/employee-form")}
      />

      <Button
        title="Sign In"
        onPress={() => router.push("/sign-in")}
      />

      <Button
        title="Sign Up"
        onPress={() => router.push("/sign-up")}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
    padding: 20,
  },
});