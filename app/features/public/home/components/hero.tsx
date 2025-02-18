import { Link } from "@tanstack/react-router";
import { PiPlayFill } from "react-icons/pi";

import avatar from "~/assets/img/home/avatar.png";

export function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col flex-wrap gap-10 rounded-bl-[24px] rounded-br-[24px] px-4 py-16 text-[#E9E9E9] sm:rounded-bl-[80px] sm:rounded-br-[80px] sm:px-[5%] sm:py-[7%] lg:flex-row lg:gap-0">
      <div className="absolute left-0 top-0 z-[1] h-full w-full rounded-bl-[24px] rounded-br-[24px] bg-[url('/images/hero-bg.webp')] bg-cover bg-no-repeat sm:rounded-bl-[80px] sm:rounded-br-[80px]"></div>
      <div className="absolute left-0 top-0 z-[2] h-full w-full rounded-bl-[24px] rounded-br-[24px] bg-[linear-gradient(270deg,rgba(0,0,0,0)_12.21%,#020215_75.06%),linear-gradient(0deg,rgba(11,6,38,0.2),rgba(11,6,38,0.2))] sm:rounded-bl-[80px] sm:rounded-br-[80px]"></div>
      <div className="z-20 mx-auto mt-[160px] flex h-[120px] w-[120px] items-center justify-center rounded-[50%] bg-white text-4xl text-[#3085d4] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.3),0px_8px_12px_6px_rgba(0,0,0,0.15)] sm:absolute sm:right-1/2 sm:top-1/4 sm:-translate-x-1/4 sm:-translate-y-1/4 sm:text-5xl md:right-1/4">
        <PiPlayFill />
      </div>

      <div className="z-[3] my-[5%] w-full lg:w-[48%]">
        <div className="flex items-center gap-4">
          <div>
            <img src={avatar} alt="avatar" />
          </div>
          <p className="text-sm">Over 1K active users</p>
        </div>
        <div className="mb-[32px] w-full sm:w-[90%]">
          <h2 className="mb-[24px] mt-[16px] text-[40px] font-bold leading-tight text-white sm:w-11/12 sm:text-[32px] sm:leading-9 lg:w-auto lg:text-[48px] xl:text-[64px] xl:leading-[69px]">
            Weight loss <br /> Treatment for a <br /> Unique you
          </h2>
          <p className="mb-6 text-base font-medium text-[rgba(255,255,255,0.74)] sm:w-10/12 sm:text-xl lg:w-auto">
            You're only a few steps away from reaching your goal weight. Skip
            the clinic, get personalized weight loss treatment from anywhere,
            anytime.
          </p>
        </div>
        <Link
          to="/welcome"
          className="inline-block w-[335px] rounded-lg bg-primary px-5 py-3 text-center text-base font-semibold sm:w-[273px] sm:py-4 sm:text-lg lg:w-[349px]"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
