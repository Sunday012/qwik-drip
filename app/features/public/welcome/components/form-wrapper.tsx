import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  subheading?: ReactNode;
  children: ReactNode;
};

export function FormWrapper({ title, subheading, children }: FormWrapperProps) {
  return (
    <section className="container mx-auto flex h-full min-h-screen w-full flex-col items-center px-6 py-4 sm:px-8 sm:py-1 md:w-[608px]">
      <div className="mb-4 text-center">
        <h2 className="mb-1 text-[24px] font-bold leading-9 text-[#363840] sm:text-[32px] sm:leading-[43.2px]">
          {title}
        </h2>
        {subheading && <p className="text-lg text-[#7F8493]">{subheading}</p>}
      </div>
      <div className="mb-10 flex w-full flex-col items-center justify-center gap-6 overflow-hidden overflow-y-auto text-center">
        {children}
      </div>
    </section>
  );
}
