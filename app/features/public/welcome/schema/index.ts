import { z } from "zod";

export const welcomeFormSchema = z.object({
  age: z.enum(["18_24", "25_34", "35_44", "45_54", "55+"]),
  allergies: z.enum([
    "yes_medications",
    "yes_food",
    "yes_environment",
    "no_allergies",
  ]),
  weight: z
    .string()
    .min(1, "Weight is required")
    .regex(/^\d+(\.\d+)?$/, "Must be a valid number")
    .transform((val) => parseFloat(val))
    .refine(
      (val) => val > 0 && val < 500,
      "Weight must be between 0 and 500 kg",
    ),
  healthCondition: z.enum([
    "diabetes",
    "thyroid",
    "hypertension",
    "pcos",
    "sleep_apnea",
    "depression_anxiety",
    "none",
  ]),
  gender: z.enum(["male", "female", "non_binary", "other"]),
  otherGender: z
    .string()
    .optional()
    .nullable()
    .refine((val) => {
      if (val === "") return false;
      return true;
    }, "Please specify your gender")
    .optional(),

  goalWeight: z
    .string()
    .min(1, "Goal Weight is required")
    .regex(/^\d+(\.\d+)?$/, "Must be a valid number")
    .transform((val) => parseFloat(val))
    .refine(
      (val) => val > 0 && val < 500,
      "Weight must be between 0 and 500 kg",
    ),

  meal: z.enum([
    "1_2meals",
    "3meals",
    "4_5_small_meals_or_snacks",
    "eat_frequently_throughout_the_day",
    "my_eating_pattern_varies",
  ]),
  medication: z.enum(["yes_medications", "no_allergies"]),
  otherMedication: z
    .string()
    .optional()
    .transform((val) => val || ""),
  reason: z.enum([
    "improve_health",
    "boost_confidence",
    "manage_medical_condition",
    "prep_for_event",
    "other",
  ]),
  otherReason: z
    .string()
    .optional()
    .refine((val) => {
      if (val === "other") {
        return val && val.length > 0;
      }
      return true;
    }, "Please specify your reason"),
  mostWeight: z.enum([
    "abdomen",
    "hips_thighs",
    "arms_shoulders",
    "entire_body",
    "other",
  ]),
  otherMostWeight: z.string().optional(),
});

export type WelcomeFormSchema = z.infer<typeof welcomeFormSchema>;
