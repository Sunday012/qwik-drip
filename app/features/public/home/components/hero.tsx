import { Link } from "@tanstack/react-router";
import { PiPlayFill } from "react-icons/pi";

import avatar from "~/assets/img/home/avatar.png";

export function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col flex-wrap gap-10 rounded-bl-[24px] rounded-br-[24px] px-4 py-16 text-[#E9E9E9] sm:rounded-bl-[80px] sm:rounded-br-[80px] sm:px-[5%] sm:py-[7%] lg:flex-row lg:gap-0">
      <div className="absolute left-0 top-0 z-[1] h-full w-full rounded-bl-[24px] rounded-br-[24px] bg-[url('/images/hero-bg.webp')] bg-cover bg-no-repeat sm:rounded-bl-[80px] sm:rounded-br-[80px]"></div>
      <div className="absolute left-0 top-0 z-[2] h-full w-full rounded-bl-[24px] rounded-br-[24px] bg-[linear-gradient(270deg,rgba(0,0,0,0)_12.21%,#020215_75.06%),linear-gradient(0deg,rgba(11,6,38,0.2),rgba(11,6,38,0.2))] sm:rounded-bl-[80px] sm:rounded-br-[80px]"></div>

      <div className="xs:mt-[80px] sm:-translate-x-1/1 z-20 mx-auto mt-[100px] flex h-[80px] w-[80px] items-center justify-center rounded-[50%] bg-white text-4xl text-[#3085d4] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.3),0px_8px_12px_6px_rgba(0,0,0,0.15)] sm:h-[120px] sm:w-[120px] md:absolute md:right-1/4 md:top-1/4 md:mt-0 md:-translate-x-1/4 md:-translate-y-1/4 lg:mt-[100px]">
        <PiPlayFill />
      </div>

      <div className="z-[3] my-[3%] w-full sm:mt-[20%] lg:mt-[8%] lg:w-[48%]">
        <div className="hidden items-center gap-4 sm:flex">
          <div>
            <img src={avatar} alt="avatar" />
          </div>
          <p className="text-sm">Over 1K active users</p>
        </div>
        <div className="mb-[24px] w-full sm:mb-[32px] sm:w-[90%]">
          <h2 className="xs:text-[34px] mb-[20px] mt-[14px] text-[36px] font-bold leading-tight text-white sm:w-11/12 sm:text-[40px] sm:leading-9 lg:w-auto lg:text-[48px] xl:text-[64px] xl:leading-[69px]">
            Weight loss <br /> Treatment for a <br /> Unique you
          </h2>
          <p className="xs:text-sm mb-4 text-base font-medium text-[rgba(255,255,255,0.74)] sm:mb-6 sm:w-10/12 sm:text-xl lg:w-auto">
            You're only a few steps away from reaching your goal weight. Skip
            the clinic, get personalized weight loss treatment from anywhere,
            anytime.
          </p>
        </div>
        <Link
          to="/welcome"
          className="inline-block w-full rounded-lg bg-primary px-5 py-3 text-center text-base font-semibold sm:w-[273px] sm:py-4 sm:text-lg lg:w-[349px]"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
