import { z } from "zod";

export const employeeSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters"),

  email: z
    .string()
    .email("Invalid email format"),

  phone: z
    .string()
    .min(10, "Phone must be at least 10 digits")
    .max(15),

  position: z.string().min(2, "Position required"),

  postalCode: z
    .string()
    .regex(/^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/, "Invalid Canadian postal code"),
});