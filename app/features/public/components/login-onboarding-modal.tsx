import { Dialog } from "~/components/ui/dialog";

import { useAuthModal } from "../welcome/store/use-auth-modal";
import { useMultiStepForm } from "../welcome/utils/use-multi-step-form";
import { LoginForm } from "./login-form";
import { LoginVerifyOTP } from "./login-verify-otp";

export function LoginOnboardingModal() {
  const { isOpen, close } = useAuthModal();

  const { currentStepIndex, nextStep } = useMultiStepForm([
    <LoginForm />,
    <LoginVerifyOTP />,
  ]);

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      {currentStepIndex === 0 ? (
        <LoginForm nextStep={nextStep} />
      ) : (
        <LoginVerifyOTP nextStep={nextStep} />
      )}
    </Dialog>
  );
}
