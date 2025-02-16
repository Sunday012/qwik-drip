import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  subheading?: ReactNode;
  children: ReactNode;
};

export default function FormWrapper({
  title,
  subheading,
  children,
}: FormWrapperProps) {
  return (
    <section className="container mx-auto flex h-full w-full flex-col items-center justify-between px-6 py-4 md:w-[608px]">
      <div className="mb-10 text-center">
        <h2 className="mb-1 text-[34px] font-bold leading-9 text-[#363840] sm:text-[40px] sm:leading-[43.2px]">
          {title}
        </h2>
        {subheading && <p className="text-lg text-[#7F8493]">{subheading}</p>}
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-6 text-center">
        {children}
      </div>
    </section>
  );
}
