import { useId } from "react";
import { Link } from "@tanstack/react-router";

import LogoWL from "~/assets/logo_wl.svg";
import { Button } from "~/components/ui/button";
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

import { cities, genders, states } from "../data/countries";
import SelectWithSearch from "./select-with-search";
import { useOnboardingFormStore } from "../welcome/store/use-onboarding-form";

export function RegisterForm() {
  const id = useId();
  const { nextStep } = useOnboardingFormStore();

  return (
    <DialogContent>
      <div className="flex flex-col items-center gap-2">
        <div
          className="flex size-20 shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <Link to="/" className="mx-auto my-[40px]">
            <img src={LogoWL} alt="Proxymed logo" />
          </Link>
        </div>
        <DialogHeader>
          <DialogTitle className="sm:text-center">Register Now</DialogTitle>
          <DialogDescription className="sm:text-center">
            Let's create an account for you, before you continue.
          </DialogDescription>
        </DialogHeader>
      </div>

      <form className="space-y-5">
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="group relative">
              <Label
                htmlFor={`${id}-first-name`}
                className="absolute top-1/4 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-3 group-focus-within:translate-y-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-3 has-[+input:not(:placeholder-shown)]:translate-y-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
              >
                <span className="inline-flex bg-transparent px-2">
                  First name
                </span>
              </Label>
              <Input
                id={`${id}-first-name`}
                type="text"
                placeholder=""
                className="h-[55px] transition-all duration-200 group-focus-within:h-[57px] group-focus-within:pt-2 has-[input:not(:placeholder-shown)]:h-[57px] has-[input:not(:placeholder-shown)]:pt-2"
              />
            </div>

            <div className="group relative">
              <Label
                htmlFor={`${id}-last-name`}
                className="absolute top-1/4 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-3 group-focus-within:translate-y-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-3 has-[+input:not(:placeholder-shown)]:translate-y-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
              >
                <span className="inline-flex bg-transparent px-2">
                  Last name
                </span>
              </Label>
              <Input
                id={`${id}-last-name`}
                type="text"
                placeholder=""
                className="h-[55px] transition-all duration-200 group-focus-within:h-[57px] group-focus-within:pt-2 has-[input:not(:placeholder-shown)]:h-[57px] has-[input:not(:placeholder-shown)]:pt-2"
              />
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
              id={`${id}-email`}
              type="email"
              placeholder=""
              className="h-[55px] transition-all duration-200 group-focus-within:h-[57px] group-focus-within:pt-2 has-[input:not(:placeholder-shown)]:h-[57px] has-[input:not(:placeholder-shown)]:pt-2"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-full space-y-2">
              <SelectWithSearch label="State" items={states} />
            </div>

            <div className="w-full space-y-2">
              <Select>
                <SelectTrigger id={`${id}-city`}>
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
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-full space-y-2">
              <Input
                id={`${id}-name`}
                placeholder="Date of Birth"
                type="text"
                required
              />
            </div>
            <div className="w-full space-y-2">
              <Select>
                <SelectTrigger id={`${id}-gender`}>
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
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground">
          I agree with Proxymed{" "}
          <a className="underline hover:no-underline" href="#">
            Terms of service
          </a>{" "}
          and{" "}
          <a className="underline hover:no-underline" href="#">
            Privacy policy
          </a>
        </p>
        <Button type="button" className="w-full" onClick={nextStep}>
          Sign up
        </Button>
      </form>

      <p className="text-center text-xs text-muted-foreground">
        Already have an account?{" "}
        <a className="underline hover:no-underline" href="#">
          Log in
        </a>
      </p>
    </DialogContent>
  );
}
