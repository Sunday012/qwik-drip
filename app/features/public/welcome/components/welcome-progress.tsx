import { Progress } from "~/components/ui/progress";

// import { useMultiStepFormStore } from "../store/use-multi-step-form-store";

export function WelcomeProgress({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  // const currentStep = useMultiStepFormStore((state) => state.currentStepIndex);
  // const totalSteps = useMultiStepFormStore((state) => state.steps.length);

  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <Progress
      value={progress}
      className="h-[10px] w-full border border-[#ffffff3d] bg-transparent [&>*]:rounded-br-[99px] [&>*]:rounded-tr-[99px] [&>*]:bg-[#4272DD]"
    />
  );
}
