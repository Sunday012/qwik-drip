import { Link } from "@tanstack/react-router";

import LogoWL from "~/assets/logo_wl.svg";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

import { useAuthFormStore } from "../welcome/store/use-auth-form-store";
import { useAuthModal } from "../welcome/store/use-auth-modal";
import { useRegisterModal } from "../welcome/store/use-register-modal";
import { useWelcomeFormStore } from "../welcome/store/use-welcome-form-store";
import { OTPForm } from "./otp-form";

export function LoginVerifyOTP() {
  const { setEmail, email } = useAuthFormStore();
  const { nextStep } = useWelcomeFormStore();
  const { close: closeAuthModal } = useAuthModal();
  const { close: closeRegisterModal } = useRegisterModal();

  function handleNextStep() {
    setEmail("");
    nextStep();
    closeAuthModal();
    closeRegisterModal();
  }

  return (
    <DialogContent className="max-w-xs rounded-[24px] px-4 pb-8 pt-6 sm:max-w-sm sm:px-8 sm:pb-10 sm:pt-8 md:max-w-xl lg:px-[64px] lg:pb-[60px] lg:pt-[40px] xl:max-w-[700px]">
      <div className="flex flex-col items-center">
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
            Verify your account
          </DialogTitle>
          <DialogDescription className="text-center text-base lg:text-lg">
            <p>
              We sent a 6 digit OTP to{" "}
              <span className="font-medium">{email}</span>
            </p>
            <p>Please input it below to proceed.</p>
          </DialogDescription>
        </DialogHeader>
        <OTPForm nextStep={handleNextStep} email={email} />
      </div>
    </DialogContent>
  );
}
