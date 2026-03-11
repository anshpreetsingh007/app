import { View, Text, TextInput, StyleSheet } from "react-native";

export default function InputField({
  label,
  error,
  ...props
}: any) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>

      <TextInput
        style={[styles.input, error && styles.errorInput]}
        {...props}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 15 },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 6,
  },

  errorInput: {
    borderColor: "red",
  },

  errorText: {
    color: "red",
    marginTop: 5,
  },
});