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
  const { open: openRegisterOnboardingModal } = useOnboardingModal();
  const { open: openLoginOnboardingModal } = useAuthModal();

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
    <form
      onSubmit={onSubmit}
      className="relative flex h-full w-full flex-col justify-between"
    >
      <WelcomeProgress
        currentStep={currentStepIndex}
        totalSteps={steps.length}
      />
      <>
        <Link to="/" className="mx-auto my-[40px]">
          <img src={LogoWL} alt="Proxymed logo" />
        </Link>
        {step}
      </>

      <div className="mx-auto my-6 flex gap-4">
        <Button onClick={openRegisterOnboardingModal} type="button">
          Open register onboarding modal
        </Button>
        <Button onClick={openLoginOnboardingModal} type="button">
          Open login onboarding modal
        </Button>
      </div>

      {isFirstStep ? (
        <>
          <button
            type="button"
            onClick={nextStep}
            className="mx-auto w-[624px] cursor-pointer rounded-xl bg-[#4272DD] py-4 text-center text-xl text-white"
          >
            Get started
          </button>
          <div className="mt-[46px]">
            <Marquee images={marqueeImages} />
          </div>
        </>
      ) : (
        <div className="mx-auto flex w-full items-center justify-between px-6 py-4">
          {!isFirstStep && (
            <button
              type="button"
              onClick={previousStep}
              className="inline-block h-[57px] w-[144px] cursor-pointer rounded-2xl border-[1px] border-solid border-[#DCDCDE] bg-transparent px-6 py-3 text-center text-lg text-[#7F8493] shadow-[0px_1px_2px_0px_#0000001A]"
            >
              Back
            </button>
          )}
          <button
            type="button"
            onClick={nextStep}
            className="inline-block h-[57px] w-[144px] cursor-pointer rounded-2xl bg-[#4272DD] px-6 py-3 text-center text-lg text-white shadow-[0px_1px_2px_0px_#0000001A]"
          >
            {!isFirstStep && !isLastStep ? "Continue" : "Schedule Appointment"}
          </button>
        </div>
      )}

      <RegisterOnboardingModal />
      <LoginOnboardingModal />
    </form>
  );
}
