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
      {/* <div className="animate-slow-bounce inset-0 z-0 flex px-4 md:hidden">
        <img src="/images/gold-coins.png" alt="" />
      </div> */}
      <div 
      // style={{
      //   backgroundImage: `url("/images/gold-coins.png")`,
      //   backgroundSize: "contain",
      //   backgroundPosition: "top",
      //   backgroundRepeat: "no-repeat",
      // }}
      className="relative mt-0 flex w-full items-center justify-center md:mt-20">
        <div className="animate-slow-bounce absolute inset-0 z-0  w-full items-center justify-center px-4 ">
          <img src="/images/gold-coins.png" alt="" />
        </div>
        <div className="z-10 flex flex-col gap-6 text-center">
          <div className="flex flex-col items-center gap-8 justify-center text-center">
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
                Style,
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
            🔥 Join 10,000+ fashion enthusiasts <br className="flex md:hidden" /> already on the waitlist
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
