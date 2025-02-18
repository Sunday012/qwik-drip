import { useId } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import LogoWL from "~/assets/logo_wl.svg";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import {
  useCreatePatientMutation,
  useSendRegisterOTPMutation,
} from "../api/mutations";
import { cities, genders, states } from "../data/countries";
import { useAuthModal } from "../welcome/store/use-auth-modal";
import { useOnboardingFormStore } from "../welcome/store/use-onboarding-form-store";
import { useOnboardingModal } from "../welcome/store/use-onboarding-modal";
import SelectWithSearch from "./select-with-search";

const registerSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  date_of_birth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required"),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const id = useId();
  const { setStep, setEmail } = useOnboardingFormStore();
  const { open: openAuthModal } = useAuthModal();
  const { close } = useOnboardingModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
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
    <DialogContent className="max-w-[700px] rounded-[24px] px-[64px] py-[20px]">
      <div className="flex flex-col items-center gap-2">
        <div
          className="flex shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <Link to="/" className="mx-auto mb-[24px]">
            <img src={LogoWL} alt="Proxymed logo" className="" />
          </Link>
        </div>
        <DialogHeader>
          <DialogTitle className="text-center text-[40px] font-bold">
            Register Now
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            Let's create an account for you, before you continue.
          </DialogDescription>
        </DialogHeader>
      </div>

      <form className="space-y-5" onSubmit={onSubmit}>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="group relative w-full">
              <Label
                htmlFor={`${id}-first-name`}
                className="absolute top-1/4 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-3 group-focus-within:translate-y-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-3 has-[+input:not(:placeholder-shown)]:translate-y-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
              >
                <span className="inline-flex bg-transparent px-2">
                  First name
                </span>
              </Label>
              <Input
                {...register("first_name")}
                id={`${id}-first-name`}
                type="text"
                placeholder=""
                className="h-[55px] transition-all duration-200 group-focus-within:h-[57px] group-focus-within:pt-2 has-[input:not(:placeholder-shown)]:h-[57px] has-[input:not(:placeholder-shown)]:pt-2"
              />
              {errors.first_name && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.first_name.message}
                </p>
              )}
            </div>

            <div className="group relative w-full">
              <Label
                htmlFor={`${id}-last-name`}
                className="absolute top-1/4 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-3 group-focus-within:translate-y-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-3 has-[+input:not(:placeholder-shown)]:translate-y-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
              >
                <span className="inline-flex bg-transparent px-2">
                  Last name
                </span>
              </Label>
              <Input
                {...register("last_name")}
                id={`${id}-last-name`}
                type="text"
                placeholder=""
                className="h-[55px] transition-all duration-200 group-focus-within:h-[57px] group-focus-within:pt-2 has-[input:not(:placeholder-shown)]:h-[57px] has-[input:not(:placeholder-shown)]:pt-2"
              />
              {errors.last_name && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.last_name.message}
                </p>
              )}
            </div>
          </div>

          <div className="group relative rounded-lg border border-input bg-background shadow-sm shadow-black/5 transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 [&:has(input:is(:disabled))_*]:pointer-events-none">
            <Label
              htmlFor={`${id}-email`}
              className="absolute top-1/4 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-3 group-focus-within:translate-y-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-3 has-[+input:not(:placeholder-shown)]:translate-y-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
            >
              <span className="inline-flex bg-transparent px-2">Email</span>
            </Label>
            <Input
              {...register("email")}
              id={`${id}-email`}
              type="email"
              placeholder=""
              className="h-[55px] transition-all duration-200 group-focus-within:h-[57px] group-focus-within:pt-2 has-[input:not(:placeholder-shown)]:h-[57px] has-[input:not(:placeholder-shown)]:pt-2"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex gap-4">
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
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id={`${id}-city`} className="rounded-[16px]">
                      <SelectValue placeholder="City" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city.value} value={city.value}>
                          {city.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.city && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.city.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-full">
              <div className="group relative">
                <Label
                  htmlFor={`${id}-date-of-birth`}
                  className="absolute top-1/4 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-3 group-focus-within:translate-y-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-3 has-[+input:not(:placeholder-shown)]:translate-y-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
                >
                  <span className="inline-flex bg-transparent px-2">
                    Date of Birth
                  </span>
                </Label>
                <Input
                  {...register("date_of_birth")}
                  id={`${id}-date-of-birth`}
                  type="date"
                  className="h-[55px] rounded-[16px] transition-all duration-200 group-focus-within:h-[57px] group-focus-within:pt-2 has-[input:not(:placeholder-shown)]:h-[57px] has-[input:not(:placeholder-shown)]:pt-2"
                />
                {errors.date_of_birth && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.date_of_birth.message}
                  </p>
                )}
              </div>
            </div>

            <div className="w-full">
              <Controller
                control={control}
                name="gender"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      id={`${id}-gender`}
                      className="rounded-[16px]"
                    >
                      <SelectValue placeholder="Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      {genders.map((gender) => (
                        <SelectItem key={gender.value} value={gender.value}>
                          {gender.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
          className="h-[57px]"
          fullWidth
          size="xl"
          disabled={isPending}
        >
          Register
        </Button>
      </form>

      <p className="text-center text-xs text-[#7F8493]">
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
