import { FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";

import LogoWL from "~/assets/logo_wl.svg";
import { Button } from "~/components/ui/button";
import { LoginModal } from "~/features/public/components/login-modal";
import { RegisterModal } from "~/features/public/components/register-modal";
import { cn } from "~/lib/utils";

import { Marquee } from "../../components/marquee";
import { OnboardingModal } from "../../components/onboarding-modal";
import { marqueeImages } from "../../data/marquee";
import { AgeStep } from "../components/age-step";
import { AllergiesStep } from "../components/allergies-step";
import { AppointmentStep } from "../components/appointment";
import { BmiStep } from "../components/bmi-step";
import { ConditionStep } from "../components/condition-step";
import { GenderStep } from "../components/gender-step";
import { GoalStep } from "../components/goal-step";
import { MealStep } from "../components/meal-step";
import { MedicationStep } from "../components/medication-step";
import { PaymentStep } from "../components/payment";
import { ReasonStep } from "../components/reason-step";
import { WeightStep } from "../components/weight-step";
import { WelcomeProgress } from "../components/welcome-progress";
import { WelcomeStep } from "../components/welcome-step";
import { useAuthFormStore } from "../store/use-auth-form-store";
import { useOnboardingModal } from "../store/use-onboarding-modal";
import { useRegisterFormStore } from "../store/use-register-form-store";
import { useWelcomeFormStore } from "../store/use-welcome-form-store";

export default function WelcomePage() {
  const { data, updateFields, step, nextStep, previousStep, clearFields } =
    useWelcomeFormStore();
  const { open: openOnboardingModal } = useOnboardingModal();
  const { setStep: setAuthStep } = useAuthFormStore();
  const { setStep: setRegisterStep } = useRegisterFormStore();
  const navigate = useNavigate();

  function handleLogin() {
    setRegisterStep(1);
    setAuthStep(1);
    openOnboardingModal();
  }

  function handleCompleted() {
    clearFields();
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
          <Link
            to="/"
            className="mx-auto my-6 md:mt-[40px] lg:mt-[50px] xl:mt-[60px]"
          >
            <img
              src={LogoWL}
              alt="Proxymed logo"
              className="max-w-[160px] md:max-w-[180px] lg:max-w-[200px] xl:max-w-none"
            />
          </Link>
          {step === 0 && <WelcomeStep />}
          {step === 1 && (
            <GenderStep defaultValues={data} updateFields={updateFields} />
          )}
          {step === 2 && (
            <AgeStep defaultValues={data} updateFields={updateFields} />
          )}
          {step === 3 && (
            <MealStep defaultValues={data} updateFields={updateFields} />
          )}
          {step === 4 && (
            <BmiStep defaultValues={data} updateFields={updateFields} />
          )}
          {step === 5 && (
            <GoalStep defaultValues={data} updateFields={updateFields} />
          )}
          {step === 6 && (
            <WeightStep defaultValues={data} updateFields={updateFields} />
          )}
          {step === 7 && (
            <ConditionStep defaultValues={data} updateFields={updateFields} />
          )}
          {step === 8 && (
            <MedicationStep defaultValues={data} updateFields={updateFields} />
          )}
          {step === 9 && (
            <ReasonStep defaultValues={data} updateFields={updateFields} />
          )}
          {step === 10 && (
            <AllergiesStep defaultValues={data} updateFields={updateFields} />
          )}
          {step === 11 && <AppointmentStep />}
          {step === 12 && <PaymentStep />}
        </>

        {isFirstStep ? (
          <>
            <div className="mx-auto w-full px-4 sm:max-w-[524px] lg:max-w-[624px]">
              <button
                type="button"
                onClick={nextStep}
                className="mx-auto w-full cursor-pointer rounded-xl bg-[#4272DD] px-3 py-3 text-center text-base sm:px-4 sm:py-4 sm:text-lg lg:text-xl"
              >
                Get started
              </button>
            </div>
            <div className="mt-3 sm:mt-4 lg:mt-[46px]">
              <Marquee images={marqueeImages} />
            </div>
          </>
        ) : isLastStep ? (
          <>
            <div className="mx-auto mb-6 flex w-full items-center justify-center rounded-b-[16px] border border-t-0 border-[#2222221A] p-4 sm:mb-8 sm:p-6 lg:mb-[40px] lg:max-w-[702px] lg:p-[32px]">
              <button
                type="button"
                onClick={handleCompleted}
                className="mx-auto w-full cursor-pointer rounded-xl bg-[#4272DD] px-3 py-3 text-base sm:max-w-[438px] sm:px-4 sm:py-4 sm:text-lg lg:max-w-[538px] lg:text-xl"
              >
                Okay
              </button>
            </div>
          </>
        ) : (
          <div className="fixed bottom-0 left-0 right-0 z-10 border border-t border-t-[#0000001A] bg-white shadow-[0px_-2px_10px_0px_#00000014]">
            <div className="mx-auto flex w-full items-center justify-between px-4 py-3 sm:max-w-[524px] sm:px-6 sm:py-4 lg:max-w-[624px] lg:px-8 lg:py-2">
              <Button
                type="button"
                variant="outline"
                onClick={previousStep}
                className="h-[40px] w-[120px] cursor-pointer rounded-2xl border-[1px] border-solid border-[#DCDCDE] bg-transparent px-3 py-2 text-sm text-[#7F8493] shadow-[0px_1px_2px_0px_#0000001A] sm:h-[48px] sm:w-[120px] sm:px-4 sm:text-base lg:h-[57px] lg:w-[144px] lg:px-6 lg:py-3 lg:text-lg"
              >
                Back
              </Button>
              <Button
                type="button"
                onClick={step === 10 ? handleLogin : nextStep}
                className={cn(
                  "h-[40px] w-[120px] cursor-pointer rounded-2xl bg-[#4272DD] px-3 py-2 text-sm text-white shadow-[0px_1px_2px_0px_#0000001A] sm:h-[48px] sm:w-[120px] sm:px-4 sm:text-base lg:h-[57px] lg:w-[144px] lg:px-8 lg:py-4 lg:text-lg",
                  step === 10 && "w-[200px] sm:w-[220px] lg:w-[261px]",
                )}
              >
                {step === 10 ? "Schedule Appointment" : "Continue"}
              </Button>
            </div>
          </div>
        )}

        <RegisterModal />
        <LoginModal />
        <OnboardingModal />
      </form>
    </div>
  );
}
