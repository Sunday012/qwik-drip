import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  isBusinessOwner: z.boolean().optional(),
  isCreator: z.boolean().optional(),
  isConsumer: z.boolean().optional(),
});

export type FormValues = z.infer<typeof formSchema>;