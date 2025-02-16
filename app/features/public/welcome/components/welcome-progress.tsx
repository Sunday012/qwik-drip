import { Progress } from "~/components/ui/progress";

interface WelcomeProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function WelcomeProgress({ currentStep, totalSteps }: WelcomeProgressProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <Progress
        value={progress}
        className="h-[10px] w-full border border-[#ffffff3d] bg-transparent [&>*]:rounded-br-[99px] [&>*]:rounded-tr-[99px] [&>*]:bg-[#4272DD]"
      />
    </div>
  );
}
