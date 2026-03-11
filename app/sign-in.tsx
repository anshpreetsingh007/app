import { Controller, useForm } from "react-hook-form";
import { Button, Text, View } from "react-native";

import InputField from "../components/InputField";

export default function SignInScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Sign In Data:", data);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Welcome
      </Text>

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
        rules={{
          required: "Password is required",
        }}
        render={({ field: { onChange, value } }) => (
          <InputField
            label="Password"
            value={value}
            onChangeText={onChange}
            error={errors.password?.message}
          />
        )}
      />

      <Button
        title="Sign In"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      />
    </View>
  );
}
