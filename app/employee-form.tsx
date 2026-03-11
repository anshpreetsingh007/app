import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import InputField from "../components/InputField";

type EmployeeFormData = {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  postalCode: string;
};

export default function EmployeeFormScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<EmployeeFormData>({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      position: "",
      postalCode: "",
    },
  });

  const onSubmit = (data: EmployeeFormData) => {
    console.log("Employee Data:", data);

    if (Platform.OS === "web") {
      window.alert("Employee form submitted successfully.");
    } else {
      Alert.alert("Success", "Employee form submitted successfully.");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Text style={styles.title}>Employee Information</Text>
          <Text style={styles.subtitle}>
            Fill in the employee details below
          </Text>

          <Controller
            control={control}
            name="fullName"
            rules={{
              required: "Full name is required",
              minLength: {
                value: 3,
                message: "Full name must be at least 3 characters",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <InputField
                label="Full Name"
                value={value}
                onChangeText={onChange}
                error={errors.fullName?.message}
                placeholder="Enter full name"
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Enter a valid email address",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <InputField
                label="Email"
                value={value}
                onChangeText={onChange}
                error={errors.email?.message}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter email"
              />
            )}
          />

          <Controller
            control={control}
            name="phone"
            rules={{
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Enter a valid phone number",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <InputField
                label="Phone Number"
                value={value}
                onChangeText={onChange}
                error={errors.phone?.message}
                keyboardType="phone-pad"
                placeholder="Enter phone number"
              />
            )}
          />

          <Controller
            control={control}
            name="position"
            rules={{
              required: "Position is required",
              minLength: {
                value: 2,
                message: "Position must be at least 2 characters",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <InputField
                label="Position"
                value={value}
                onChangeText={onChange}
                error={errors.position?.message}
                placeholder="Enter job position"
              />
            )}
          />

          <Controller
            control={control}
            name="postalCode"
            rules={{
              required: "Postal code is required",
              pattern: {
                value: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
                message: "Enter a valid postal code",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <InputField
                label="Postal Code"
                value={value}
                onChangeText={onChange}
                error={errors.postalCode?.message}
                autoCapitalize="characters"
                placeholder="Enter postal code"
              />
            )}
          />

          <Pressable
            style={[styles.button, !isValid && styles.buttonDisabled]}
            onPress={handleSubmit(onSubmit)}
            disabled={!isValid}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e2e8f0",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#f8fafc",
    borderRadius: 18,
    padding: 22,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: "#64748b",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 8,
  },
  buttonDisabled: {
    backgroundColor: "#94a3b8",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});