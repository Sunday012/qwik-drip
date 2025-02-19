import { Dialog } from "~/components/ui/dialog";

import { useRegisterFormStore } from "../welcome/store/use-register-form-store";
import { useRegisterModal } from "../welcome/store/use-register-modal";
import { RegisterForm } from "./register-form";
import { RegisterVerifyOTP } from "./register-verify-otp";

export function RegisterModal() {
  const { isOpen, close } = useRegisterModal();

  const { step } = useRegisterFormStore();

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      {step === 1 && <RegisterForm />}
      {step === 2 && <RegisterVerifyOTP />}
    </Dialog>
  );
}
