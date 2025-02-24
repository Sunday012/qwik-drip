import { useNavigate } from "@tanstack/react-router";
import { SubmitHandler, useFormContext } from "react-hook-form";

import { Button } from "~/components/ui/button";
import { LoginModal } from "~/features/public/components/login-modal";
import { Marquee } from "~/features/public/components/marquee";
import { OnboardingModal } from "~/features/public/components/onboarding-modal";
import { RegisterModal } from "~/features/public/components/register-modal";
import { marqueeImages } from "~/features/public/data/marquee";
import { cn } from "~/lib/utils";
import { Route } from "~/routes/(public)/_public/welcome";

import { welcomeStepsData } from "../../data";
import { WelcomeFormFieldName, WelcomeFormSchema } from "../../schema";
import useAuthFormStore from "../../store/use-auth-form-store";
import { useOnboardingModal } from "../../store/use-onboarding-modal";
import useRegisterFormStore from "../../store/use-register-form-store";
import { useWelcomeFormStore } from "../../store/use-welcome-form-store";
import { AgeStep } from "../age-step";
import { AllergiesStep } from "../allergies-step";
import { AppointmentStep } from "../appointment";
import { BmiStep } from "../bmi-step";
import { ConditionStep } from "../condition-step";
import { GenderStep } from "../gender-step";
import { GoalStep } from "../goal-step";
import { MealStep } from "../meal-step";
import { MedicationStep } from "../medication-step";
import { PaymentStep } from "../payment";
import { ReasonStep } from "../reason-step";
import { WeightStep } from "../weight-step";
import { WelcomeStep } from "../welcome-step";

interface FormHandlerProps {
  submit: boolean;
  activeStep: number;
  nextStep: () => void;
  previousStep: () => void;
}

export const WelcomeForm = ({
  activeStep,
  nextStep,
  previousStep,
}: FormHandlerProps) => {
  const {
    trigger,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormContext<WelcomeFormSchema>();
  const { step, updateFields, clearFields } = useWelcomeFormStore();
  const { open: openOnboardingModal } = useOnboardingModal();
  const { setStep: setAuthStep } = useAuthFormStore();
  const { setStep: setRegisterStep } = useRegisterFormStore();

  const navigate = useNavigate({
    from: Route.fullPath,
  });

  const isFirstStep = step === 1;
  const isLastStep = step === 13;

  const submitForm: SubmitHandler<WelcomeFormSchema> = () => {
    navigate({
      search: (prev) => {
        prev.submit = true;
        return prev;
      },
    });
    reset();
    clearFields();
    navigate({ to: "/" });
  };

  const handleNext = async () => {
    const fields = welcomeStepsData[activeStep - 2].form?.map((fm) => fm.name);
    const output = await trigger(fields as WelcomeFormFieldName[], {
      shouldFocus: true,
    });
    if (!output) return;

    nextStep();
  };

  const handleOnboarding = async () => {
    const fields = welcomeStepsData[activeStep - 2].form?.map((fm) => fm.name);
    const output = await trigger(fields as WelcomeFormFieldName[], {
      shouldFocus: true,
    });

    if (!output) return;

    setRegisterStep(1);
    setAuthStep(1);
    openOnboardingModal();
  };

  function handleCompleted() {
    clearFields();
    navigate({ to: "/" });
  }

  console.log("Step Form", { errors, activeStep });

  return (
    <form className="" onSubmit={handleSubmit(submitForm)}>
      {activeStep === 1 && <WelcomeStep />}

      {activeStep === 2 && (
        <GenderStep data={welcomeStepsData[0]} updateFields={updateFields} />
      )}

      {activeStep === 3 && (
        <AgeStep data={welcomeStepsData[1]} updateFields={updateFields} />
      )}

      {activeStep === 4 && (
        <MealStep data={welcomeStepsData[2]} updateFields={updateFields} />
      )}
      {step === 5 && (
        <BmiStep data={welcomeStepsData[3]} updateFields={updateFields} />
      )}
      {step === 6 && (
        <GoalStep data={welcomeStepsData[4]} updateFields={updateFields} />
      )}
      {step === 7 && (
        <WeightStep data={welcomeStepsData[5]} updateFields={updateFields} />
      )}
      {step === 8 && (
        <ConditionStep data={welcomeStepsData[6]} updateFields={updateFields} />
      )}
      {step === 9 && (
        <MedicationStep
          data={welcomeStepsData[7]}
          updateFields={updateFields}
        />
      )}
      {step === 10 && (
        <ReasonStep data={welcomeStepsData[8]} updateFields={updateFields} />
      )}
      {step === 11 && (
        <AllergiesStep data={welcomeStepsData[9]} updateFields={updateFields} />
      )}
      {step === 12 && <AppointmentStep />}
      {step === 13 && <PaymentStep />}

      {isFirstStep ? (
        <>
          <div className="mx-auto w-full px-4 sm:max-w-[524px] lg:max-w-[624px]">
            <Button
              type="button"
              onClick={nextStep}
              size={"xl"}
              className="mx-auto w-full cursor-pointer rounded-xl bg-[#4272DD] px-3 py-3 text-center text-base sm:px-4 sm:py-4 sm:text-lg lg:text-xl"
            >
              Get started
            </Button>
          </div>
          <div className="mt-3 sm:mt-4 lg:mt-[46px]">
            <Marquee images={marqueeImages} />
          </div>
        </>
      ) : isLastStep ? (
        <>
          <div className="mx-auto mb-6 flex w-full items-center justify-center rounded-b-[16px] border border-t-0 border-[#2222221A] p-4 sm:mb-8 sm:p-6 lg:mb-[40px] lg:max-w-[702px] lg:p-[32px]">
            <Button
              type="button"
              size={"xl"}
              onClick={handleCompleted}
              className="mx-auto w-full cursor-pointer rounded-xl bg-[#4272DD] px-3 py-3 text-center text-base text-[#FFFFFF] sm:max-w-[438px] sm:px-4 sm:py-4 sm:text-lg lg:max-w-[538px] lg:text-xl"
            >
              Okay
            </Button>
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
              onClick={step === 11 ? handleOnboarding : handleNext}
              className={cn(
                "h-[40px] w-[120px] cursor-pointer rounded-2xl bg-[#4272DD] px-3 py-2 text-sm text-white shadow-[0px_1px_2px_0px_#0000001A] sm:h-[48px] sm:w-[120px] sm:px-4 sm:text-base lg:h-[57px] lg:w-[144px] lg:px-8 lg:py-4 lg:text-lg",
                step === 11 && "w-[200px] sm:w-[220px] lg:w-[261px]",
              )}
            >
              {step === 11 ? "Schedule Appointment" : "Continue"}
            </Button>
          </div>
        </div>
      )}
      <OnboardingModal />
      <RegisterModal />
      <LoginModal />
    </form>
  );
};
