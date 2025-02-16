import { Link } from "@tanstack/react-router";

import ellipse from "~/assets/img/home/ellipse.png";

export function TransformationBottom() {
  return (
    <section className="bg-[#F2F2F2] px-[5%] py-[10%] lg:px-[10%]">
      <div className="rounded-4xl relative gap-5 overflow-clip bg-[#428ADB] py-[5%] text-center sm:py-[3%]">
        <div className="relative z-10 flex flex-col items-center justify-center gap-5 p-4 sm:p-0">
          <h2 className="text-[32px] font-bold leading-9 text-[#F5F8F7] sm:text-[52px] sm:leading-[62px] md:w-[85%] lg:w-3/5 xl:w-1/2">
            Start Your Transformation Today
          </h2>
          <p className="w-10/12 text-[#F0F5F4] sm:w-3/5 lg:w-2/5">
            Schedule your free consultation and take the first step towards a
            healthier you.
          </p>
          <Link
            to="/get-started"
            className="inline-block rounded-[444px] bg-[#EAF2FB] px-8 py-4 font-bold text-[#428ADB]"
          >
            SCHEDULE YOUR CONSULTATION
          </Link>
        </div>
        <img
          src={ellipse}
          alt="ellipse design"
          className="absolute left-1/2 top-2/3 -translate-x-1/2"
        />
      </div>
    </section>
  );
}
