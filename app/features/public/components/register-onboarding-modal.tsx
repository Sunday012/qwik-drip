import { Dialog } from "~/components/ui/dialog";

import { useOnboardingFormStore } from "../welcome/store/use-onboarding-form-store";
import { useOnboardingModal } from "../welcome/store/use-onboarding-modal";
import { RegisterForm } from "./register-form";
import { RegisterVerifyOTP } from "./register-verify-otp";

export function RegisterOnboardingModal() {
  const { isOpen, close } = useOnboardingModal();

  const { step } = useOnboardingFormStore();

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      {step === 1 && <RegisterForm />}
      {step === 2 && <RegisterVerifyOTP />}
    </Dialog>
  );
}
