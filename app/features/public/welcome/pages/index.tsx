import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { FormProvider, useForm } from "react-hook-form";

import LogoWL from "~/assets/logo_wl.svg";

import { WelcomeForm } from "../components/form/welcome-form";
import { WelcomeProgress } from "../components/welcome-progress";
import { useWelcomeStepQuery } from "../hooks/use-welcome-step-query";
import { WelcomeFormSchema, welcomeFormSchema } from "../schema";
import { useWelcomeFormStore } from "../store/use-welcome-form-store";

export default function WelcomePage() {
  const { data, step, nextStep, previousStep } = useWelcomeFormStore();

  const methods = useForm<WelcomeFormSchema>({
    resolver: zodResolver(welcomeFormSchema),
    defaultValues: { ...data },
  });

  const { submit } = useWelcomeStepQuery();

  return (
    <div className="relative h-full w-full">
      <WelcomeProgress currentStep={step} totalSteps={13} />

      <FormProvider {...methods}>
        <div className="relative flex h-full w-full flex-col justify-between px-4">
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

          <WelcomeForm
            activeStep={step}
            nextStep={nextStep}
            previousStep={previousStep}
            submit={submit}
          />
        </div>
      </FormProvider>
    </div>
  );
}
