import { FormEvent, useState } from "react";
import { Link } from "@tanstack/react-router";

import LogoWL from "~/assets/logo_wl.svg";
import { Button } from "~/components/ui/button";
import { LoginOnboardingModal } from "~/features/public/components/login-onboarding-modal";
import { RegisterOnboardingModal } from "~/features/public/components/register-onboarding-modal";

import { Marquee } from "../../components/marquee";
import { marqueeImages } from "../../data/marquee";
import { EighthStep } from "../components/eighth-step";
import { FifthStep } from "../components/fifth-step";
import { FirstStep } from "../components/first-step";
import { FourthStep } from "../components/fourth-step";
import { NinthStep } from "../components/ninth-step";
import { SecondStep } from "../components/second-step";
import { SeventhStep } from "../components/seventh-step";
import { SixthStep } from "../components/sixth-step";
import { TenthStep } from "../components/tenth-step";
import { ThirdStep } from "../components/third-step";
import { WelcomeProgress } from "../components/welcome-progress";
import { WelcomeStep } from "../components/welcome-step";
import { useAuthModal } from "../store/use-auth-modal";
import { useOnboardingModal } from "../store/use-onboarding-modal";
import { useWelcomeFormStore } from "../store/use-welcome-form-store";
import { useMultiStepForm } from "../utils/use-multi-step-form";

export default function WelcomePage() {
  const { data, updateFields } = useWelcomeFormStore();
  const { open: openLoginOnboardingModal, close: closeLoginOnboardingModal } =
    useAuthModal();
  const {
    open: openRegisterOnboardingModal,
    close: closeRegisterOnboardingModal,
  } = useOnboardingModal();

  function handleLogin() {
    closeRegisterOnboardingModal();
    openLoginOnboardingModal();
  }

  function handleRegister() {
    closeLoginOnboardingModal();
    openRegisterOnboardingModal();
  }

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    nextStep,
    previousStep,
  } = useMultiStepForm([
    <WelcomeStep />,
    <FirstStep {...data} updateFields={updateFields} />,
    <SecondStep {...data} updateFields={updateFields} />,
    <ThirdStep {...data} updateFields={updateFields} />,
    <FourthStep {...data} updateFields={updateFields} />,
    <FifthStep {...data} updateFields={updateFields} />,
    <SixthStep {...data} updateFields={updateFields} />,
    <SeventhStep {...data} updateFields={updateFields} />,
    <EighthStep {...data} updateFields={updateFields} />,
    <NinthStep {...data} updateFields={updateFields} />,
    <TenthStep {...data} updateFields={updateFields} />,
  ]);

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
        <WelcomeProgress
          currentStep={currentStepIndex}
          totalSteps={steps.length}
        />
        <>
          <Link to="/" className="mx-auto my-4 sm:my-[40px]">
            <img
              src={LogoWL}
              alt="Proxymed logo"
              className="max-w-[200px] sm:max-w-none"
            />
          </Link>
          {step}
        </>

        {/* <div className="flex flex-col items-center gap-2">
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleRegister}>Register</Button>
      </div> */}

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
        ) : (
          <div className="absolute bottom-0 left-0 right-0">
            <div className="mx-auto mt-8 flex w-full max-w-[700px] items-center justify-between px-4 py-4 sm:px-6">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={previousStep}
                  className="h-[48px] w-[120px] cursor-pointer rounded-2xl border-[1px] border-solid border-[#DCDCDE] bg-transparent px-4 py-2 text-center text-base text-[#7F8493] shadow-[0px_1px_2px_0px_#0000001A] sm:h-[57px] sm:w-[144px] sm:px-6 sm:py-3 sm:text-lg"
                >
                  Back
                </button>
              )}
              {!isFirstStep && !isLastStep ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="h-[48px] w-full cursor-pointer rounded-2xl bg-[#4272DD] px-4 py-2 text-center text-base text-white shadow-[0px_1px_2px_0px_#0000001A] sm:h-[57px] sm:w-[144px] sm:px-8 sm:py-4 sm:text-lg"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="button"
                  onClick={openLoginOnboardingModal}
                  className="h-[48px] w-full cursor-pointer rounded-2xl bg-[#4272DD] px-4 py-2 text-center text-base text-white shadow-[0px_1px_2px_0px_#0000001A] sm:h-[57px] sm:w-[261px] sm:px-8 sm:py-4 sm:text-lg"
                >
                  Schedule Appointment
                </button>
              )}
            </div>
          </div>
        )}

        <RegisterOnboardingModal />
        <LoginOnboardingModal />
      </form>
    </div>
  );
}
