import { Link } from "@tanstack/react-router";

import LogoWL from "~/assets/logo_wl.svg";

import { Marquee } from "../../components/marquee";
import { marqueeImages } from "../../data/marquee";

export default function GetStartedPage() {
  return (
    <section className="pb-[3%]">
      <div className="flex min-h-screen flex-col items-center justify-between py-[2.5%]">
        <div className="flex w-11/12 flex-col items-center justify-center text-center sm:w-[82%] md:w-[68%] lg:w-[54%] xl:w-2/5">
          <Link to="/" className="mb-10">
            <img src={LogoWL} alt="" />
          </Link>
          <h2 className="sm:leading-11 mb-4 text-[32px] font-bold leading-9 text-[#1E293B] sm:text-[40px]">
            Explore weight loss plans.
          </h2>
          <p className="text-xl text-[#516178]">
            Learn about treatment options based on your goals, habits, and
            health history.
          </p>
        </div>
        <div className="w-11/12 lg:w-1/2">
          <p className="mb-10 text-[#516178]">
            By clicking ‘Continue’, you agree that Proxymed may use your
            responses to personalize your experience and other purposes as
            described in our Privacy Policy. Responses prior to account creation
            will not be used as part of your medical assessment.
          </p>
          <Link
            to="/welcome"
            className="inline-block w-full rounded-xl bg-[#1B3C74] py-4 text-center text-xl text-white"
          >
            Continue
          </Link>
        </div>
      </div>

      <Marquee images={marqueeImages} />
    </section>
  );
}
