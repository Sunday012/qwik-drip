import { Link } from "@tanstack/react-router";

import stars from "~/assets/img/home/stars.png";

import { testimonialData } from "../../data/testimonial";
import { Testimonial } from "../../types";

export function Testimonials() {
  return (
    <section className="px-[5%] lg:px-[7%]">
      <div className="relative flex flex-col items-center justify-center gap-6 py-[3%] text-center">
        <h2 className="sm:leading-11 w-1/2 text-[32px] font-bold leading-9 text-[#252529] sm:text-[56px]">
          Testimonials
        </h2>
        <p className="text-[#7F8493] md:w-11/12 lg:w-[55%]">
          Discover how our program has transformed the lives of countless
          individuals. Read inspiring testimonials from our clients who have
          achieved their weight loss goals and improved their health.
        </p>
        <Link
          to="/"
          className="border-blue inline-block rounded-[444px] border-[1px] border-solid px-8 py-4 font-bold text-[#1E6BB6]"
        >
          WRITE A REVIEW
        </Link>
      </div>

      <div className="overflow-hidden">
        <div className="marquee-wrapper relative before:pointer-events-none before:absolute before:-left-[3px] before:bottom-0 before:top-0 before:z-[1] before:inline-block before:w-1/5 before:bg-[linear-gradient(89.03deg,#FFFFFF_10.48%,rgba(255,255,255,0)_77.67%)] after:pointer-events-none after:absolute after:-right-[3px] after:bottom-0 after:top-0 after:z-[1] after:inline-block after:w-1/5 after:scale-[-1] after:bg-[linear-gradient(89.03deg,#FFFFFF_10.48%,rgba(255,255,255,0)_77.67%)]">
          <div className="marquee flex">
            <div className="marquee-group flex">
              {testimonialData.map((data) => (
                <TestimonialCard key={data.id} data={data} />
              ))}
            </div>
            <div className="aria-hidden marquee-group flex">
              {testimonialData.map((data) => (
                <TestimonialCard key={data.id} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ data }: { data: Testimonial }) {
  return (
    <div
      className="mb-5 w-[280px] overflow-clip rounded-2xl border-[1px] border-solid border-[#C9C9CC] p-4 sm:w-full sm:p-6 md:w-[320px]"
      key={data.id}
    >
      <div className="mb-4 flex items-start justify-between sm:mb-6">
        <div>
          <img
            src={stars}
            alt="rating"
            className="mb-2 inline-block h-4 sm:h-5"
          />
          <p className="text-sm sm:text-base">By John Doe</p>
        </div>
        <p className="text-right text-xs text-[#7F7D83] sm:text-sm">
          4 hours ago
        </p>
      </div>
      <h3 className="mb-3 text-lg font-medium sm:mb-4 sm:text-xl">Excellent</h3>
      <p className="line-clamp-4 text-xs text-[#7F8493] sm:text-sm">
        {data.text}
      </p>
    </div>
  );
}
