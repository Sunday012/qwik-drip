import { ReactNode } from "react";

import { cn } from "~/lib/utils";

type FormWrapperProps = {
  title: string;
  subheading?: ReactNode;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  subheadingClassName?: string;
  containerClassName?: string;

  image?: string;
};

export function FormContainer({
  title,
  subheading,
  children,
  className,
  titleClassName,
  subheadingClassName,
  containerClassName,
  image,
}: FormWrapperProps) {
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
      {image && (
        <div className="mx-auto my-3 sm:my-4 md:my-6 lg:my-[32px]">
          <img
            src={image}
            alt="Proxymed logo"
            className="max-w-[80px] sm:max-w-[90px] md:max-w-[100px]"
          />
        </div>
      )}

      <div className="mb-3 text-center sm:mb-4">
        <h2
          className={cn(
            "mb-1 font-bold text-[#363840]",
            "text-[20px] leading-7",
            "sm:text-[24px] sm:leading-8",
            "md:text-[28px] md:leading-9",
            "lg:text-[32px] lg:leading-[43.2px]",
            titleClassName,
          )}
        >
          {title}
        </h2>
        {subheading && (
          <p
            className={cn(
              "text-base text-[#7F8493] sm:text-lg",
              subheadingClassName,
            )}
          >
            {subheading}
          </p>
        )}
      </div>
      <div
        className={cn(
          "flex w-full flex-col items-center justify-center gap-4",
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
}
