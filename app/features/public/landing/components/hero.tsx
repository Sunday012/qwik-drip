import { Link } from "@tanstack/react-router";

import { Button } from "~/components/ui/button";
import { WaitlistButton } from "~/components/waitlist-modal/waitlist-button";

export function Hero() {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center justify-center"
      style={{
        backgroundImage: `url("/images/bg-gradient.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="inset-0 z-0 flex px-4 md:hidden">
        <img src="/images/gold-coins.png" alt="" />
      </div>
      <div className="relative flex w-full items-center mt-0 md:mt-20 justify-center">
        <div className="absolute inset-0 px-4 z-0 hidden md:flex items-center justify-center w-full">
          <img src="/images/gold-coins.png" alt="" />
        </div>
        <div className="z-10 flex w-[680px] flex-col gap-6 text-center">
          <div className="flex flex-col items-center justify-center text-center">
            <h1
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url("/images/cloud.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className=" w-[80%] md:w-[472px] bg-clip-text text-center font-instrumentSans text-[40px] font-medium uppercase leading-[48px] md:text-[60px] md:leading-[72px]"
            >
              Earn from your{" "}
              <span className="font-instrumentSerifItalic font-normal capitalize italic">
                Style,
              </span>{" "}
              Own your drip
            </h1>
            <p className="w-[80%] font-geist text-[#B6B6BF] md:w-[586px]">
              Qwikdrip is an AI-powered fashion platform with the added benefit
              of earning tokens through style post engagement.
            </p>
          <WaitlistButton className="h-[52px] my-6 w-[310px] rounded-[22px] border border-[#FFFFFF30] bg-[#6600FF] px-5 py-2 hover:bg-[#6600DF]">
            Join early access
          </WaitlistButton>
          </div>
          <p className="font-geist text-xs text-[#B6B6BF]">
            🔥 Join 10,000+ fashion enthusiasts already on the waitlist
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url("/images/bg-btm-gradient.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "200px",
        }}
      ></div>
    </div>
  );
}
