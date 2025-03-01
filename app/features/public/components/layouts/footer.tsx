import { Link } from "@tanstack/react-router";

import { Button } from "~/components/ui/button";
import { WaitlistButton } from "~/components/waitlist-modal/waitlist-button";

export function Footer() {
  return (
    <footer className="relative px-[5%] pt-[8%] sm:px-[6%] sm:pt-[5%] md:px-[10%] md:pt-[5%]">
      <div
        className="relative flex flex-col items-center justify-center rounded-[64px] pt-[29px] md:p-[44px]"
        style={{
          backgroundImage: `url("/images/flower.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative mx-auto flex w-[90%] flex-col items-center justify-center gap-8 rounded-[64px] bg-gradient-to-b from-[#2D2D45] to-[#00000000] px-5 py-12">
          <img
            src="/images/big-star.svg"
            alt=""
            className="absolute left-0 top-0 z-10 -ml-3 -mt-10"
          />
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <h1
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url("/images/cloud.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-center font-geist text-[36px] font-bold uppercase leading-[48px] md:text-[60px] md:leading-[72px]"
            >
              JOIN THE{" "}
              <span className="font-instrumentSerifItalic font-normal capitalize italic">
                Style
              </span>{" "}
              REVOLUTION.
            </h1>
            <p className="font-geist text-sm text-white">
              Join our exclusive waitlist today and be notified when we launch.
            </p>
          </div>
          <WaitlistButton className="mt-4 h-[60px] w-[240px] rounded-[1000px] bg-white font-geist text-xl text-[#0A0A0F] hover:bg-white">
            Join the waitlist
          </WaitlistButton>
          <div className="my-6 flex items-center justify-center">
            <img src="/images/line1.svg" alt="" />
            <img src="/images/circle.svg" alt="" className="mx-2" />
            <img src="/images/line2.svg" alt="" />
          </div>
          <div className="flex items-center justify-center gap-6">
            <div className="flex size-10 items-center justify-center rounded-full bg-[#0000002B]">
              <img src="/icons/instagram.svg" alt="" />
            </div>
            <div className="flex size-10 items-center justify-center rounded-full bg-[#0000002B]">
              <img src="/icons/telegram.svg" alt="" />
            </div>
            <div className="flex size-10 items-center justify-center rounded-full bg-[#0000002B]">
              <img src="/icons/x-icon.svg" alt="" />
            </div>
          </div>
          <p className="mt-2 font-geist text-xs text-white">
            Join our community today
          </p>
        </div>
        <div className="mt-auto flex w-full items-end justify-between">
          <img
            src="/images/coin-left.png"
            alt=""
            className="h-auto w-[20%] max-w-[180px]"
          />
          <img
            src="/images/Art.png"
            alt=""
            className="-mb-1 h-auto w-[40%] max-w-[220px]"
          />
          <img
            src="/images/coin-right.png"
            alt=""
            className="h-auto w-[20%] max-w-[180px]"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[100px] rounded-b-[64px] bg-gradient-to-t from-[#2D2D45] to-transparent"></div>
      </div>
      <div className="mt-10 flex w-full items-center justify-center">
        <div
          style={{
            backgroundImage: `url("/images/bg-btm-gradient.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="flex h-[125px] w-full items-center justify-center"
        >
          <p className="font-geist text-xl text-[#B6B6BF]">
            © 2025 Demz Labs, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
