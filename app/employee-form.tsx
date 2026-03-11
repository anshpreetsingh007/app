import { View, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { employeeSchema } from "../schemas/employeeSchema";
import InputField from "../components/InputField";

export default function EmployeeFormScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(employeeSchema),
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    console.log("Employee Data:", data);
  };

  return (
    <View style={{ padding: 20 }}>
      
      <Controller
        control={control}
        name="fullName"
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
        name="phone"
        render={({ field: { onChange, value } }) => (
          <InputField
            label="Phone"
            value={value}
            onChangeText={onChange}
            error={errors.phone?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="position"
        render={({ field: { onChange, value } }) => (
          <InputField
            label="Position"
            value={value}
            onChangeText={onChange}
            error={errors.position?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="postalCode"
        render={({ field: { onChange, value } }) => (
          <InputField
            label="Postal Code"
            value={value}
            onChangeText={onChange}
            error={errors.postalCode?.message}
          />
        )}
      />

      <Button
        title="Submit"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      />
    </View>
  );
}