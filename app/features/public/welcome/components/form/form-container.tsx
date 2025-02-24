import { ReactNode } from "react";

import { cn } from "~/lib/utils";

import { WelcomeFormSchema } from "../../schema";
import { WelcomeStepsData } from "../../types";

interface FormContainerProps {
  heading: string;
  description: string;
  children: ReactNode;
  className?: string;
  headingClassName?: string;
  descriptionClassName?: string;
  containerClassName?: string;
  image?: string;
}

export type WelcomeStepFormProps = {
  data: WelcomeStepsData;
  updateFields: (fields: Partial<WelcomeFormSchema>) => void;
};

export const FormContainer = ({
  heading,
  description,
  children,
  className,
  headingClassName,
  descriptionClassName,
  containerClassName,
  image,
}: FormContainerProps) => {
  return (
    <section
      className={cn(
        "container mx-auto flex h-full min-h-screen w-full flex-col items-center px-4 py-3",
        "sm:px-6 sm:py-4",
        "md:w-[608px] md:px-8 md:py-6",
        "lg:py-8",
        className,
      )}
    >
      <div className="mb-3 text-center sm:mb-4">
        <h2
          className={cn(
            "mb-1 font-bold text-[#363840]",
            "text-[20px] leading-7",
            "sm:text-[24px] sm:leading-8",
            "md:text-[28px] md:leading-9",
            "lg:text-[32px] lg:leading-[43.2px]",
            headingClassName,
          )}
        >
          {heading}
        </h2>
        {description && (
          <p
            className={cn(
              "text-base text-[#7F8493] sm:text-lg",
              descriptionClassName,
            )}
          >
            {description}
          </p>
        )}
      </div>

      <div
        className={cn(
          "flex w-full flex-col items-center justify-center gap-4 mb-24",
          "sm:gap-5",
          "md:gap-6",
          "text-center",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
};
