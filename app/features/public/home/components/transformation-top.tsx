import { Link } from "@tanstack/react-router";

import ellipse from "~/assets/img/home/ellipse.png";
import rect from "~/assets/img/home/rect.png";

export function TransformationTop() {
  return (
    <section className="px-[5%] sm:px-[7%] py-[10%]">
      <div className="rounded-2xl sm:rounded-4xl relative flex flex-col items-center justify-center gap-4 sm:gap-5 overflow-clip bg-[#FFE9BA] text-center">
        <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-5 py-[8%] sm:py-[5%] px-4 sm:px-0">
          <h2 className="text-[28px]  font-bold leading-[1.2] text-[#252529] sm:text-[56px] sm:leading-[62px] w-full md:w-[85%] lg:w-3/5 xl:w-[75%]">
            Start Your Transformation Today
          </h2>
          <p className="w-full sm:w-10/12 text-sm sm:text-base text-[#252529]lg:w-3/5">
            Schedule your free consultation and take the first step towards a
            healthier you.
          </p>
          <Link
            to="/welcome"
            className="inline-block rounded-lg bg-primary px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-bold text-white"
          >
            GET STARTED
          </Link>
        </div>
        <img
          src={ellipse}
          alt="ellipse design"
          className="absolute -left-[120%] top-[35%] sm:-left-[40%] md:-left-[30%] lg:-left-[15%] w-[200%] sm:w-auto"
        />
        <img
          src={rect}
          alt="rectangle design"
          className="absolute -top-[20%] right-0 sm:-top-[10%] lg:top-0 w-[80%] sm:w-auto"
        />
      </div>
    </section>
  );
}
