import { Link } from "@tanstack/react-router";

import ellipse from "~/assets/img/home/ellipse.png";
import rect from "~/assets/img/home/rect.png";

export function TransformationTop() {
  return (
    <section className="px-[7%] py-[10%]">
      <div className="rounded-4xl relative flex flex-col items-center justify-center gap-5 overflow-clip bg-[#FFE9BA] text-center">
        <div className="relative z-10 flex flex-col items-center gap-5 py-[5%]">
          <h2 className="text-[32px] font-bold leading-9 text-[#252529] sm:text-[56px] sm:leading-[62px] md:w-[85%] lg:w-3/5 xl:w-[75%]">
            Start Your Transformation Today
          </h2>
          <p className="w-10/12 text-[#252529] sm:w-3/5 lg:w-3/5">
            Schedule your free consultation and take the first step towards a
            healthier you.
          </p>
          <Link
            to="/get-started"
            className="bg-primary inline-block rounded-lg px-6 py-4 font-bold text-white"
          >
            GET STARTED
          </Link>
        </div>
        <img
          src={ellipse}
          alt="ellipse design"
          className="absolute -left-[85%] top-[35%] sm:-left-[40%] md:-left-[30%] lg:-left-[15%]"
        />
        <img
          src={rect}
          alt="rectangle design"
          className="absolute -top-[20%] right-0 sm:-top-[10%] lg:top-0"
        />
      </div>
    </section>
  );
}
