import { useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import { LoaderCircle } from "lucide-react";

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
import { cn } from "~/lib/utils";

import { useSendLoginOTPMutation } from "../api/mutations";
import { useAuthFormStore } from "../welcome/store/use-auth-form-store";
import { useAuthModal } from "../welcome/store/use-auth-modal";
import { useOnboardingModal } from "../welcome/store/use-onboarding-modal";
import { useRegisterModal } from "../welcome/store/use-register-modal";

export function LoginForm() {
  const id = useId();
  const { setStep, email, setEmail } = useAuthFormStore();
  const { open: openRegisterModal } = useRegisterModal();
  const { close } = useAuthModal();
  const { mutate: sendLoginOTP, isPending } = useSendLoginOTPMutation();

  function handleRegister() {
    close();
    openRegisterModal();
  }

  function handleLogin() {
    sendLoginOTP(
      { email: email },
      {
        onSuccess: () => {
          setStep(2);
        },
        onError: () => {
          console.log("Error");
        },
      },
    );
  }
  return (
    <DialogContent className="max-w-xs rounded-[24px] px-4 pb-8 pt-6 sm:max-w-sm sm:px-8 sm:pb-10 sm:pt-8 md:max-w-xl lg:px-[64px] lg:pb-[60px] lg:pt-[40px] xl:max-w-[700px]">
      <div className="flex flex-col items-center gap-2">
        <div
          className="flex shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <Link to="/" className="mx-auto mb-4 sm:mb-6 lg:mb-[24px]">
            <img src={LogoWL} alt="Proxymed logo" className="w-32 sm:w-auto" />
          </Link>
        </div>
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold sm:text-3xl lg:text-[40px]">
            Welcome back
          </DialogTitle>
          <DialogDescription className="text-center text-base sm:text-lg">
            <p>
              Enter the email you registered with and we will send you a 6 digit
              code to login with
            </p>
          </DialogDescription>
        </DialogHeader>
      </div>

      <form className="space-y-4 sm:space-y-5">
        <div className={cn("relative w-full rounded-lg bg-background")}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id={`${id}-email`}
            type="email"
            placeholder="Email"
            className="h-12 sm:h-[50px] xl:h-[55px]"
          />
        </div>

        <Button
          type="button"
          className="h-12 sm:h-[50px] lg:h-[57px]"
          fullWidth
          size="xl"
          onClick={handleLogin}
          disabled={isPending || !email}
        >
          {isPending && (
            <LoaderCircle
              className="-ms-1 me-2 animate-spin"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          )}
          Continue
        </Button>
      </form>

      <p className="text-center text-sm text-[#7F8493] sm:text-base">
        Don't have an account?{" "}
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
