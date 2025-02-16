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

import { useAuthFormStore } from "../welcome/store/use-auth-form-store";

export function LoginForm() {
  const id = useId();
  const { nextStep } = useAuthFormStore();

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
          <DialogTitle className="sm:text-center">Welcome back</DialogTitle>
          <DialogDescription className="sm:text-center">
            <p>
              Enter the email you registered with and we will send you a <br />{" "}
              6 digit code to login with
            </p>
          </DialogDescription>
        </DialogHeader>
      </div>

      <form className="space-y-5">
        <div className="space-y-4">
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
        </div>

        <Button type="button" className="w-full" onClick={nextStep}>
          Continue
        </Button>
      </form>

      <p className="text-center text-xs text-muted-foreground">
        Don’t have an account?{" "}
        <a className="underline hover:no-underline" href="#">
          Sign up
        </a>
      </p>
    </DialogContent>
  );
}
