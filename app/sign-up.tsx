import { Controller, useForm } from "react-hook-form";
import { Button, Text, View } from "react-native";

import InputField from "../components/InputField";

export default function SignUpScreen() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  const onSubmit = (data: any) => {
    console.log("Sign Up Data:", data);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Welcome
      </Text>

      <Controller
        control={control}
        name="fullName"
        rules={{ required: "Full name is required" }}
        render={({ field: { onChange, value } }) => (
          <InputField
            label="Full Name"
            value={value}
            onChangeText={onChange}
            error={errors.fullName?.message}
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
            message: "Enter a valid email",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <InputField
            label="Email"
            value={value}
            onChangeText={onChange}
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{ required: "Password is required" }}
        render={({ field: { onChange, value } }) => (
          <InputField
            label="Password"
            value={value}
            onChangeText={onChange}
            error={errors.password?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        rules={{
          validate: (value) => value === password || "Passwords do not match",
        }}
        render={({ field: { onChange, value } }) => (
          <InputField
            label="Confirm Password"
            value={value}
            onChangeText={onChange}
            error={errors.confirmPassword?.message}
          />
        )}
      />

      <Button
        title="Sign Up"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      />
    </View>
  );
}
