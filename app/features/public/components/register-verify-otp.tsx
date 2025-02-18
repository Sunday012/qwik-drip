import { Link, useNavigate } from "@tanstack/react-router";

import LogoWL from "~/assets/logo_wl.svg";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

import { useOnboardingFormStore } from "../welcome/store/use-onboarding-form-store";
import { OTPForm } from "./otp-form";

export function RegisterVerifyOTP() {
  const { setEmail, email } = useOnboardingFormStore();
  const navigate = useNavigate();

  function nextStep() {
    setEmail("");
    navigate({ to: "/appointment" });
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
      <OTPForm nextStep={nextStep} email={email} />
    </DialogContent>
  );
}
