import { Link } from "@tanstack/react-router";

import ellipse from "~/assets/img/home/ellipse.png";

export function TransformationBottom() {
  return (
    <section className="bg-[#F2F2F2] px-[5%] py-[10%] lg:px-[10%]">
      <div className="sm:rounded-4xl relative gap-5 overflow-clip rounded-2xl bg-[#428ADB] py-[8%] text-center sm:py-[5%]">
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-4 py-2 sm:gap-5 sm:p-0">
          <h2 className="w-full text-[28px] font-bold leading-[1.2] text-[#F5F8F7] sm:text-[52px] sm:leading-9 md:w-[85%] lg:w-3/5 xl:w-1/2">
            Start Your Transformation Today
          </h2>
          <p className="w-full text-sm text-[#F0F5F4] sm:w-10/12 sm:text-base lg:w-2/5">
            Schedule your free consultation and take the first step towards a
            healthier you.
          </p>
          <Link
            to="/welcome"
            className="inline-block rounded-[444px] bg-[#EAF2FB] px-6 py-3 text-sm font-bold text-[#428ADB] sm:px-8 sm:py-4 sm:text-base"
          >
            SCHEDULE YOUR CONSULTATION
          </Link>
        </div>
        <img
          src={ellipse}
          alt="ellipse design"
          className="absolute left-1/2 top-2/3 w-full -translate-x-1/2 sm:w-auto"
        />
      </div>
    </section>
  );
}
