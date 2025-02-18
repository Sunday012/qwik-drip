import { Dialog } from "~/components/ui/dialog";

import useAuthFormStore from "../welcome/store/use-auth-form-store";
import { useAuthModal } from "../welcome/store/use-auth-modal";
import { useMultiStepForm } from "../welcome/utils/use-multi-step-form";
import { LoginForm } from "./login-form";
import { LoginVerifyOTP } from "./login-verify-otp";

export function LoginOnboardingModal() {
  const { isOpen, close } = useAuthModal();
  const { step } = useAuthFormStore();

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      {step === 1 && <LoginForm />}
      {step === 2 && <LoginVerifyOTP />}
    </Dialog>
  );
}
