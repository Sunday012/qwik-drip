import { useId, useState } from "react";
import { Link } from "@tanstack/react-router";

import LogoWL from "~/assets/logo_wl.svg";
import { Button } from "~/components/ui/button";
import {
  Dialog,
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
import { useOnboardingFormStore } from "../welcome/store/use-onboarding-form-store";
import { useOnboardingModal } from "../welcome/store/use-onboarding-modal";
import { useRegisterModal } from "../welcome/store/use-register-modal";

export function OnboardingModal() {
  const { isOpen, close } = useOnboardingModal();
  const { open: openAuthModal } = useAuthModal();
  const { open: openRegisterModal } = useRegisterModal();

  function handleLogin() {
    close();
    openAuthModal();
  }

  function handleRegister() {
    close();
    openRegisterModal();
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-sm rounded-[24px] px-4 pb-8 pt-6 sm:px-8 sm:pb-10 sm:pt-8 md:max-w-xl lg:px-[64px] lg:pb-[60px] lg:pt-[40px] xl:max-w-[700px]">
        <div
          className="flex shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <Link to="/" className="mx-auto mb-4 sm:mb-6 lg:mb-[24px]">
            <img src={LogoWL} alt="Proxymed logo" className="w-32 sm:w-auto" />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2 xl:mb-[48px]">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold sm:text-3xl lg:text-[40px] xl:mb-[16px]">
              Awesome! You're one step closer to your weight loss goals.
            </DialogTitle>
            <DialogDescription className="text-center text-base leading-[27px] sm:text-lg">
              <p>
                Your responses have been securely saved. To proceed with
                scheduling your appointment, please create an account or log in.
              </p>
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="mb-[24px]">
          <Button
            type="button"
            className="h-12 sm:h-[50px] lg:h-[57px]"
            fullWidth
            size="xl"
            onClick={handleRegister}
          >
            Create account
          </Button>
        </div>

        <p className="text-center text-xs font-medium text-[#7F8493] xl:text-base">
          Already have an account?{" "}
          <button
            type="button"
            className="font-semibold text-[#4272DD] underline hover:no-underline"
            onClick={handleLogin}
          >
            Log in
          </button>
        </p>
      </DialogContent>
    </Dialog>
  );
}
