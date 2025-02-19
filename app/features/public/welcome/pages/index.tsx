import { FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";

import LogoWL from "~/assets/logo_wl.svg";
import { Button } from "~/components/ui/button";
import { LoginOnboardingModal } from "~/features/public/components/login-onboarding-modal";
import { RegisterOnboardingModal } from "~/features/public/components/register-onboarding-modal";
import { cn } from "~/lib/utils";

import { Marquee } from "../../components/marquee";
import { marqueeImages } from "../../data/marquee";
import { AppointmentStep } from "../components/appointment";
import { EighthStep } from "../components/eighth-step";
import { FifthStep } from "../components/fifth-step";
import { FirstStep } from "../components/first-step";
import { FourthStep } from "../components/fourth-step";
import { NinthStep } from "../components/ninth-step";
import { PaymentStep } from "../components/payment";
import { SecondStep } from "../components/second-step";
import { SeventhStep } from "../components/seventh-step";
import { SixthStep } from "../components/sixth-step";
import { TenthStep } from "../components/tenth-step";
import { ThirdStep } from "../components/third-step";
import { WelcomeProgress } from "../components/welcome-progress";
import { WelcomeStep } from "../components/welcome-step";
import useAuthFormStore from "../store/use-auth-form-store";
import { useAuthModal } from "../store/use-auth-modal";
import useOnboardingFormStore from "../store/use-onboarding-form-store";
import { useOnboardingModal } from "../store/use-onboarding-modal";
import { useWelcomeFormStore } from "../store/use-welcome-form-store";

export default function WelcomePage() {
  const { data, updateFields, step, nextStep, previousStep, clearFields } =
    useWelcomeFormStore();
  const { open: openLoginOnboardingModal } = useAuthModal();
  const { close: closeRegisterOnboardingModal } = useOnboardingModal();
  const { setStep: setAuthStep } = useAuthFormStore();
  const { setStep: setOnboardingStep } = useOnboardingFormStore();
  const navigate = useNavigate();

  function handleLogin() {
    setOnboardingStep(1);
    setAuthStep(1);
    closeRegisterOnboardingModal();
    openLoginOnboardingModal();
  }

  function handleCompleted() {
    clearFields()
    navigate({ to: "/" });
  }

  const isFirstStep = step === 0;
  const isLastStep = step === 12;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    nextStep();
  }

  return (
    <div className="relative h-full w-full">
      <form
        onSubmit={onSubmit}
        className="relative flex h-full w-full flex-col justify-between"
      >
        <WelcomeProgress currentStep={step} totalSteps={13} />
        <>
          <Link to="/" className="mx-auto my-4 sm:my-[40px]">
            <img
              src={LogoWL}
              alt="Proxymed logo"
              className="max-w-[200px] sm:max-w-none"
            />
          </Link>
          {step === 0 && <WelcomeStep />}
          {step === 1 && <FirstStep {...data} updateFields={updateFields} />}
          {step === 2 && <SecondStep {...data} updateFields={updateFields} />}
          {step === 3 && <ThirdStep {...data} updateFields={updateFields} />}
          {step === 4 && <FourthStep {...data} updateFields={updateFields} />}
          {step === 5 && <FifthStep {...data} updateFields={updateFields} />}
          {step === 6 && <SixthStep {...data} updateFields={updateFields} />}
          {step === 7 && <SeventhStep {...data} updateFields={updateFields} />}
          {step === 8 && <EighthStep {...data} updateFields={updateFields} />}
          {step === 9 && <NinthStep {...data} updateFields={updateFields} />}
          {step === 10 && <TenthStep {...data} updateFields={updateFields} />}
          {step === 11 && <AppointmentStep />}
          {step === 12 && <PaymentStep />}
        </>

        {isFirstStep ? (
          <>
            <div className="mx-auto w-full max-w-[624px] px-4">
              <button
                type="button"
                onClick={nextStep}
                className="mx-auto w-full cursor-pointer rounded-xl bg-[#4272DD] px-4 py-4 text-center text-lg text-white sm:text-xl"
              >
                Get started
              </button>
            </div>
            <div className="mt-4 sm:mt-[46px]">
              <Marquee images={marqueeImages} />
            </div>
          </>
        ) : isLastStep ? (
          <>
            <div className="mx-auto flex items-center justify-center mb-[40px] w-full max-w-[702px] p-[32px] rounded-b-[16px] border border-[#2222221A] border-t-0">
              <button
                type="button"
                onClick={handleCompleted}
                className="mx-auto w-full max-w-[538px] cursor-pointer rounded-xl bg-[#4272DD] px-4 py-4 text-center text-lg text-white sm:text-xl"
              >
                Okay
              </button>
            </div>
          </>
        ) : (
          <div className="absolute bottom-0 left-0 right-0 z-10 border border-t border-t-[#0000001A] bg-white shadow-[0px_-2px_10px_0px_#00000014]">
            <div className="mx-auto flex w-full max-w-[624px] items-center justify-between px-6 py-4 sm:px-8 sm:py-2 md:w-[608px]">
              <Button
                type="button"
                variant="outline"
                onClick={previousStep}
                className="h-[48px] w-[120px] cursor-pointer rounded-2xl border-[1px] border-solid border-[#DCDCDE] bg-transparent px-4 py-2 text-center text-base text-[#7F8493] shadow-[0px_1px_2px_0px_#0000001A] sm:h-[57px] sm:w-[144px] sm:px-6 sm:py-3 sm:text-lg"
              >
                Back
              </Button>
              <Button
                type="button"
                onClick={step === 10 ? handleLogin : nextStep}
                className={cn(
                  "h-[48px] w-full cursor-pointer rounded-2xl bg-[#4272DD] px-4 py-2 text-center text-base text-white shadow-[0px_1px_2px_0px_#0000001A] sm:h-[57px] sm:w-[144px] sm:px-8 sm:py-4 sm:text-lg",
                  step === 10 && "sm:w-[261px]",
                )}
              >
                {step === 10 ? "Schedule Appointment" : "Continue"}
              </Button>
            </div>
          </div>
        )}

        <RegisterOnboardingModal />
        <LoginOnboardingModal />
      </form>
    </div>
  );
}
