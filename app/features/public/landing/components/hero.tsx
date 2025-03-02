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
      <div className="relative flex w-full items-center justify-center md:mt-20">
        {/* Mobile coins image */}
        <div className="absolute inset-0 z-10 flex items-center justify-center md:hidden">
          <div className="animate-slow-bounce relative h-[300px] w-full overflow-visible">
            <img
              src="/images/gold-coins.png"
              alt="Gold coins"
              className="absolute left-1/2 top-1/2 h-auto w-[200%] -translate-x-1/2 -translate-y-1/2 object-contain"
            />
          </div>
        </div>

        {/* Desktop coins image */}
        <div className="absolute hidden w-full items-center justify-center md:flex">
          <div className="animate-slow-bounce relative">
            <img src="/images/gold-coins.png" alt="Gold coins" />
          </div>
        </div>

        {/* Content */}
        <div className="z-20 flex flex-col gap-6 text-center">
          <div className="flex flex-col items-center justify-center gap-8 text-center">
            <h1
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url("/images/cloud.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="w-[80%] bg-clip-text text-center font-geist text-[40px] font-bold uppercase leading-[48px] md:w-[472px] md:text-[60px] md:leading-[72px]"
            >
              Earn from your{" "}
              <span className="font-instrumentSerifItalic font-normal capitalize italic">
                Style
              </span>{" "}
            </h1>
            <p className="w-[80%] font-geist text-[#B6B6BF] md:w-[586px]">
              Show off your looks, engage and get rewarded.
            </p>
            <WaitlistButton className="h-[52px] w-[181px] rounded-[1000px] border border-[#FFFFFF30] bg-[#6600FF] px-5 py-2 hover:bg-[#6600DF]">
              Join early access
            </WaitlistButton>
          </div>
          <p className="font-geist text-xs text-[#B6B6BF]">
            🔥 Join 10,000+ fashion enthusiasts{" "}
            <br className="flex md:hidden" /> already on the waitlist
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
