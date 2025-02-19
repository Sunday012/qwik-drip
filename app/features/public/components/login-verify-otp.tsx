import { Link, useNavigate } from "@tanstack/react-router";

import LogoWL from "~/assets/logo_wl.svg";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

import { useAuthFormStore } from "../welcome/store/use-auth-form-store";
import { useWelcomeFormStore } from "../welcome/store/use-welcome-form-store";
import { OTPForm } from "./otp-form";
import { useAuthModal } from "../welcome/store/use-auth-modal";
import { useOnboardingModal } from "../welcome/store/use-onboarding-modal";

export function LoginVerifyOTP() {
  const { setEmail, email } = useAuthFormStore();
  const { nextStep } = useWelcomeFormStore();
  const { close: closeAuthModal } = useAuthModal();
  const { close: closeRegisterOnboardingModal } = useOnboardingModal();


  function handleNextStep() {
    setEmail("");
    nextStep();
    closeAuthModal();
    closeRegisterOnboardingModal();
   
  }

  return (
    <DialogContent className="max-h-[528px] max-w-[687px] rounded-[24px]">
      <div className="flex flex-col items-center">
        <div
          className="flex h-[43px] w-[130px] items-center justify-center"
          aria-hidden="true"
        >
          <Link to="/" className="mx-auto my-[24px]">
            <img src={LogoWL} alt="Proxymed logo" />
          </Link>
        </div>
        <DialogHeader>
          <DialogTitle className="text-center text-[40px] font-bold">
            Verify your account
          </DialogTitle>
          <DialogDescription className="text-center text-[18px] font-normal">
            <p>
              We sent a 6 digit OTP to{" "}
              <span className="font-medium">{email}</span>
            </p>
            <p>Please input it below to proceed.</p>
          </DialogDescription>
        </DialogHeader>
      </div>
      <OTPForm nextStep={handleNextStep} email={email} />
    </DialogContent>
  );
}
