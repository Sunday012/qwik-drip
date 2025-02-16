import { Dialog } from "~/components/ui/dialog";

import { useOnboardingModal } from "../welcome/store/use-onboarding-modal";
import { useMultiStepForm } from "../welcome/utils/use-multi-step-form";
import { RegisterForm } from "./register-form";
import { RegisterVerifyOTP } from "./register-verify-otp";

export function RegisterOnboardingModal() {
  const { isOpen, close } = useOnboardingModal();

  const { step } = useMultiStepForm([<RegisterForm />, <RegisterVerifyOTP />]);

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      {step}
    </Dialog>
  );
}
