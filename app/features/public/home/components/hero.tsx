import { Link } from "@tanstack/react-router";
import { PiPlayFill } from "react-icons/pi";

import avatar from "~/assets/img/home/avatar.png";

export function Hero() {
  return (
    <div className="text-[#E9E9E9] relative flex flex-col flex-wrap gap-10 rounded-bl-[80px] rounded-br-[80px] px-[5%] py-[7%] lg:flex-row lg:gap-0">
      <div className="absolute left-0 top-0 z-[1] h-full w-full rounded-bl-[80px] rounded-br-[80px] bg-[url('/images/hero-bg.webp')] bg-cover bg-no-repeat"></div>
      <div className="absolute left-0 top-0 z-[2] h-full w-full rounded-bl-[80px] rounded-br-[80px] bg-[linear-gradient(270deg,rgba(0,0,0,0)_12.21%,#020215_75.06%),linear-gradient(0deg,rgba(11,6,38,0.2),rgba(11,6,38,0.2))]"></div>
      <div className="z-[3] my-[5%] w-full lg:w-[48%]">
        <div className="flex items-center gap-4">
          <div>
            <img src={avatar} alt="avatar" />
          </div>
          <p className="text-sm">Over 1K active users</p>
        </div>
        <div className="w-[90%]">
          <h2 className="lg:leading-14 sm:leading-16 my-5 text-[32px] font-bold leading-9 text-white sm:w-11/12 sm:text-[52px] lg:w-auto lg:text-5xl xl:text-[64px] xl:leading-[69px]">
            Weight loss treatment for a unique you
          </h2>
          <p className="mb-6 text-xl font-medium text-[rgba(255,255,255,0.74)] sm:w-10/12 lg:w-auto">
            You're only a few steps away from reaching your goal weight. Skip
            the clinic, get personalized weight loss treatment from anywhere,
            anytime.
          </p>
        </div>
        <Link
          to="/welcome"
          className="bg-primary inline-block w-[80%] rounded-lg px-5 py-4 text-center text-lg font-semibold"
        >
          Get Started
        </Link>
      </div>
      <div className="absolute right-1/4 top-1/2 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[50%] bg-white text-5xl text-[#3085d4] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.3),0px_8px_12px_6px_rgba(0,0,0,0.15)]">
        <PiPlayFill />
      </div>
    </div>
  );
}
