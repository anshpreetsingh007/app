import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function InputField({
  label,
  error,
  secureTextEntry,
  ...props
}: any) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text>{label}</Text>

      <View style={{ position: "relative" }}>
        <TextInput
          style={[
            styles.input,
            secureTextEntry && styles.inputWithEye,
            error && styles.errorInput,
          ]}
          secureTextEntry={secureTextEntry && !showPassword}
          {...props}
        />

        {secureTextEntry && (
          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eye}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={20}
              color="gray"
            />
          </Pressable>
        )}
      </View>

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

  inputWithEye: {
    paddingRight: 40,
  },

  errorInput: {
    borderColor: "red",
  },

  errorText: {
    color: "red",
    marginTop: 5,
  },

  eye: {
    position: "absolute",
    right: 10,
    top: 12,
  },
});