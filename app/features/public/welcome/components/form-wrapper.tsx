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

export function FormWrapper({ title, subheading, children, className, titleClassName, subheadingClassName, containerClassName, image }: FormWrapperProps) {
  return (
    <section className={cn("container mx-auto flex h-full min-h-screen w-full flex-col items-center px-6 py-4 sm:px-8 sm:py-2 md:w-[608px]", className)}>
 
      {image && <div className="mx-auto my-4 sm:my-[32px]">
        <img
          src={image}
          alt="Proxymed logo"
          className="max-w-[100px] sm:max-w-none"
        />
      </div>}
       
      <div className="mb-4 text-center">
        <h2 className={cn("mb-1 text-[24px] font-bold leading-9 text-[#363840] sm:text-[32px] sm:leading-[43.2px]", titleClassName)}>
          {title}
        </h2>
        {subheading && <p className={cn("text-lg text-[#7F8493]", subheadingClassName)}>{subheading}</p>}
      </div>
      <div className={cn("flex w-full flex-col items-center justify-center gap-6 text-center", containerClassName)}>
        {children}
      </div>
    </section>
  );
}