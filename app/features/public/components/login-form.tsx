import { useId, useState } from "react";
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

import { useSendLoginOTPMutation } from "../api/mutations";
import { useAuthFormStore } from "../welcome/store/use-auth-form-store";
import { useAuthModal } from "../welcome/store/use-auth-modal";
import { useOnboardingModal } from "../welcome/store/use-onboarding-modal";

export function LoginForm({ nextStep }: { nextStep?: () => void }) {
  const id = useId();
  // const { nextStep } = useAuthFormStore();
  const { open: openRegisterOnboardingModal } = useOnboardingModal();
  const { close } = useAuthModal();
  const { mutate: sendLoginOTP, isPending } = useSendLoginOTPMutation();
  const [email, setEmail] = useState("");

  function handleRegister() {
    close();
    openRegisterOnboardingModal();
  }

  function handleLogin() {
    sendLoginOTP(
      { email: email ?? "amaitariphilip@gmail.com" },
      {
        onSuccess: () => {
          console.log("Success");
          nextStep?.();
        },
        onError: () => {
          console.log("Error");
        },
      },
    );
  }
  return (
    <DialogContent className="max-w-[700px] rounded-[24px] px-[64px] pb-[60px] pt-[40px]">
      <div className="flex flex-col items-center gap-2">
        <div
          className="flex shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <Link to="/" className="mx-auto mb-[24px]">
            <img src={LogoWL} alt="Proxymed logo" />
          </Link>
        </div>
        <DialogHeader>
          <DialogTitle className="text-center text-[40px] font-bold">
            Welcome back
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id={`${id}-email`}
              type="email"
              placeholder=""
              className="h-[55px] transition-all duration-200 group-focus-within:h-[57px] group-focus-within:pt-2 has-[input:not(:placeholder-shown)]:h-[57px] has-[input:not(:placeholder-shown)]:pt-2"
            />
          </div>
        </div>

        <Button
          type="button"
          className="h-[57px]"
          fullWidth
          size="xl"
          onClick={handleLogin}
          disabled={isPending}
        >
          Continue
        </Button>
      </form>

      <p className="text-center text-base text-[#7F8493]">
        Don’t have an account?{" "}
        <button
          type="button"
          className="font-bold text-[#4272DD] underline hover:text-[#4272DD] hover:no-underline"
          onClick={handleRegister}
        >
          Sign up
        </button>
      </p>
    </DialogContent>
  );
}
