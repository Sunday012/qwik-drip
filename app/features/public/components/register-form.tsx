import { useId } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { parseDate } from "@internationalized/date";
import { Link } from "@tanstack/react-router";
import { format } from "date-fns";
import { CalendarIcon, LoaderCircle } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import LogoWL from "~/assets/logo_wl.svg";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Checkbox } from "~/components/ui/checkbox";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { cn } from "~/lib/utils";

import {
  useCreatePatientMutation,
  useSendRegisterOTPMutation,
} from "../api/mutations";
import { cities, genders, states } from "../data/countries";
import { useAuthModal } from "../welcome/store/use-auth-modal";
import { useOnboardingFormStore } from "../welcome/store/use-onboarding-form-store";
import { useOnboardingModal } from "../welcome/store/use-onboarding-modal";
import useRegisterFormStore from "../welcome/store/use-register-form-store";
import { useRegisterModal } from "../welcome/store/use-register-modal";
import { FormDate } from "./inputs/form-date";
import { FormInput } from "./inputs/form-input";
import FormSelect from "./select";
import SelectWithSearch from "./select-with-search";

const FormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  date_of_birth: z.string().min(1, "Date of birth is required"),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  gender: z.string().min(1, "Gender is required"),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

type RegisterFormData = z.infer<typeof FormSchema>;

export function RegisterForm() {
  const id = useId();
  const { setStep, setEmail } = useRegisterFormStore();
  const { open: openAuthModal } = useAuthModal();
  const { close } = useRegisterModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      terms: true,
    },
  });

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      terms: true,
    },
  });

  function handleLogin() {
    close();
    openAuthModal();
  }

  const { mutate: createPatient, isPending } = useCreatePatientMutation();
  const { mutate: sendRegisterOTP } = useSendRegisterOTPMutation();

  const onSubmit = handleSubmit((data) => {
    createPatient(
      {
        user_details: {
          email: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          // phone: "09123456789",
          date_of_birth: data.date_of_birth,
          gender: data.gender,
          city: data.city,
          state: data.state,
        },
      },
      {
        onSuccess: () => {
          setEmail(data.email);
          sendRegisterOTP({ email: data.email });
          setStep(2);
        },
        onError: () => {
          console.log("Error");
        },
      },
    );
  });

  return (
    <DialogContent className="max-w-xs rounded-[24px] px-4 pb-8 pt-6 sm:max-w-sm sm:px-8 sm:pb-10 sm:pt-8 md:max-w-xl lg:px-[64px] lg:pb-[60px] lg:pt-[40px] xl:max-w-[700px]">
      <div className="flex flex-col items-center gap-2">
        <div
          className="flex shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <Link to="/" className="mx-auto mb-4 lg:mb-[24px]">
            <img src={LogoWL} alt="Proxymed logo" className="w-32 lg:w-auto" />
          </Link>
        </div>
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold sm:text-3xl lg:text-[40px]">
            Register Now
          </DialogTitle>
          <DialogDescription className="text-center text-base lg:text-lg">
            Let's create an account for you, before you continue.
          </DialogDescription>
        </DialogHeader>
      </div>

      <Form {...form}>
        <form className="space-y-4 lg:space-y-5" onSubmit={onSubmit}>
          <div className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className={cn("relative w-full rounded-lg bg-background")}>
                <Input
                  {...register("first_name")}
                  id={`${id}-first-name`}
                  type="text"
                  placeholder="First name"
                />
              </div>

              <div className={cn("relative w-full rounded-lg bg-background")}>
                <Input
                  {...register("last_name")}
                  id={`${id}-last-name`}
                  type="text"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className={cn("relative w-full rounded-lg bg-background")}>
              <Input
                {...register("email")}
                id={`${id}-email`}
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="w-full">
                <Controller
                  control={control}
                  name="state"
                  render={({ field }) => (
                    <SelectWithSearch
                      label="State"
                      items={states}
                      selectedValue={field.value}
                      onSelect={field.onChange}
                    />
                  )}
                />
                {errors.state && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.state.message}
                  </p>
                )}
              </div>

              <div className="w-full">
                <Controller
                  control={control}
                  name="city"
                  render={({ field }) => (
                    <FormSelect
                      label="City"
                      items={cities}
                      selectedValue={field.value}
                      onSelect={field.onChange}
                    />
                  )}
                />
                {errors.city && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.city.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="w-full">
                <div className="group relative">
                  <Input
                    {...register("date_of_birth")}
                    id={`${id}-date-of-birth`}
                    type="date"
                    className="h-9 rounded-[16px] transition-all duration-200 group-focus-within:h-9 group-focus-within:pt-2 has-[input:not(:placeholder-shown)]:h-9 has-[input:not(:placeholder-shown)]:pt-2"
                  />
                  {errors.date_of_birth && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.date_of_birth.message}
                    </p>
                  )}
                </div>
                <div className="group relative">
                  {/* <Controller
                  control={control}
                  name="date_of_birth"
                  render={({ field }) => (
                    <FormDate
                      selectedValue={field.value}
                      onSelect={field.onChange}
                      className="h-[28px] rounded-[16px] transition-all duration-200 group-focus-within:h-[28px] group-focus-within:pt-2 has-[input:not(:placeholder-shown)]:h-[57px] has-[input:not(:placeholder-shown)]:pt-2"
                    />
                  )}
                />

                {errors.date_of_birth && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.date_of_birth.message}
                  </p>
                )} */}
                </div>
              </div>

              <div className="w-full">
                <Controller
                  control={control}
                  name="gender"
                  render={({ field }) => (
                    <FormSelect
                      label="Gender"
                      items={genders}
                      selectedValue={field.value}
                      onSelect={field.onChange}
                    />
                  )}
                />
                {errors.gender && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.gender.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id={id} {...register("terms")} />
            <Label htmlFor={id} className="text-center text-xs text-[#7F8493]">
              I agree to the{" "}
              <a
                className="font-medium text-[#363840] underline hover:no-underline"
                href="#"
                target="_blank"
              >
                Terms of service
              </a>{" "}
              and{" "}
              <a
                className="font-medium text-[#363840] underline hover:no-underline"
                href="#"
                target="_blank"
              >
                Privacy policy
              </a>
            </Label>
          </div>
          {errors.terms && (
            <p className="text-xs text-red-500">{errors.terms.message}</p>
          )}

          <Button
            type="submit"
            className="h-12 sm:h-[50px] xl:h-[57px]"
            fullWidth
            size="xl"
            disabled={isPending}
          >
            {isPending && (
              <LoaderCircle
                className="-ms-1 me-2 animate-spin"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            )}
            Register
          </Button>
        </form>
      </Form>

      <p className="text-center text-xs text-[#7F8493] xl:text-base">
        Already have an account?{" "}
        <button
          type="button"
          className="font-semibold text-[#4272DD] underline hover:no-underline"
          onClick={handleLogin}
          disabled={isPending}
        >
          Log in
        </button>
      </p>
    </DialogContent>
  );
}
