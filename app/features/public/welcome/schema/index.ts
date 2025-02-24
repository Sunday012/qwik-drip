import { z } from "zod";

export const welcomeFormSchema = z.object({
  // items: z.array(z.string()).refine((value) => value.some((item) => item), {
  //   message: "You have to select at least one item.",
  // }),

  gender: z.enum(["Male", "Female", "Non-binary", "Other"], {
    message: "Please select a gender",
  }),
  otherGender: z
    .string()
    .optional()
    .transform((v) => v || undefined)
    .refine((val) => {
      if (val === "other") {
        return val && val.length > 0;
      }
      return true;
    }, "Please specify your gender"),
  age: z.enum(["18-24", "25-34", "35-44", "45-54", "55+"], {
    message: "Please select a age",
  }),
  allergies: z.enum(
    [
      "Yes, to specific medications",
      "Yes, to specific foods",
      "Yes, to environmental factors",
      "No known allergies",
    ],
    {
      message: "Please select an allergy",
    },
  ),
  // weight: z.string(),
  // goalWeight: z.string(),
  weight: z
    .string()
    .min(1, "Weight is required")
    .regex(/^\d+(\.\d+)?$/, "Must be a valid number")
    .transform((val) => parseFloat(val))
    .refine(
      (val) => val > 0 && val < 500,
      "Weight must be between 0 and 500 kg",
    ),
  goalWeight: z
    .string()
    .min(1, "Goal Weight is required")
    .regex(/^\d+(\.\d+)?$/, "Must be a valid number")
    .transform((val) => parseFloat(val))
    .refine(
      (val) => val > 0 && val < 500,
      "Weight must be between 0 and 500 kg",
    ),
  healthCondition: z.enum(
    [
      "Diabetes (Type 1 or Type 2)",
      "Thyroid disorders (e.g., hypothyroidism)",
      "Hypertension or cardiovascular conditions",
      "PCOS (Polycystic Ovary Syndrome)",
      "Sleep Apnea",
      "Depression or Anxiety",
      "None",
    ],
    {
      message: "Please select a health condition",
    },
  ),
  meal: z.enum(
    [
      "1-2 Meals",
      "3 Meals",
      "4-5 Small Meals or Snacks",
      "Eat Frequently Throughout the Day",
      "My Eating Pattern Varies",
    ],
    {
      message: "Please select a meal pattern",
    },
  ),
  medication: z.enum(["Yes", "No"], {
    message: "Please select a medication",
  }),
  otherMedication: z
    .string()
    .optional()
    .transform((val) => val || ""),
  reason: z.enum(
    [
      "Improve Health",
      "Boost Confidence",
      "Manage Medical Condition",
      "Prep for Event",
      "Other",
    ],
    {
      message: "Please select a reason",
    },
  ),
  otherReason: z
    .string()
    .optional()
    .refine((val) => {
      if (val === "Other") {
        return val && val.length > 0;
      }
      return true;
    }, "Please specify your reason"),
  mostWeight: z.enum(
    ["Abdomen", "Hips Thighs", "Arms Shoulders", "Entire Body", "Other"],
    {
      message: "Please select a part of your body",
    },
  ),
  otherMostWeight: z.string().optional(),
});

export type WelcomeFormSchema = z.infer<typeof welcomeFormSchema>;
export type WelcomeFormFieldName = keyof WelcomeFormSchema;

export const PlanSchema = z.object({
  name: z.string().min(1, "Name is Required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z.string().min(1, "Phone is required").max(11),
  plan: z.string().min(1, "This is required"),
  yearlyPlan: z.boolean(),
  onlineService: z.boolean().optional(),
  largerStorage: z.boolean().optional(),
  customizableProfile: z.boolean().optional(),
});

export type PlanSchemaType = z.infer<typeof PlanSchema>;
export type FieldName = keyof PlanSchemaType;
