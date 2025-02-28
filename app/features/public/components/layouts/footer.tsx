import { Link } from "@tanstack/react-router";
import {
  FaFacebook,
  FaLinkedin,
  FaSquareInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import Logo from "~/assets/logo.png";
import { Button } from "~/components/ui/button";
import { WaitlistButton } from "~/components/waitlist-modal/waitlist-button";

export function Footer() {
  return (
    <footer className="relative px-[5%] pt-[8%] sm:px-[6%] sm:pt-[5%] md:px-[10%] md:pt-[5%]">
      <div
        className="relative flex h-[668px] flex-col items-center justify-center overflow-hidden rounded-[32px]"
        style={{
          backgroundImage: `url("/images/flower.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative mx-4 mt-11 flex w-[90%] flex-col items-center justify-center gap-6 rounded-3xl border-x-[3px] border-t-[3px] border-[#FFFFFF21] bg-gradient-to-b from-[#2D2D45] to-[#00000000] px-5 py-5 sm:py-10 sm:w-[60%]">
          <img
            src="/images/big-star.svg"
            alt=""
            className="absolute left-0 top-0 z-10 -mt-10"
          />
          <div className="flex w-[80%] flex-col items-center justify-center gap-4 text-center">
            <h1 className="font-geist text-[28px] font-bold uppercase text-white">
              Be Among the First to Experience{" "}
              <span className="font-geist font-light">QwikDrip</span>
            </h1>
            <p className="font-geist text-sm text-white">
              Join our exclusive waitlist today and be notified when we launch.
              Early members will receive special perks and features.
            </p>
          </div>
          <WaitlistButton className="mt-6 h-[60px] rounded-3xl w-[80%] bg-white font-geist text-xl text-[#0A0A0F] hover:bg-white">
            Join the Waitlist
          </WaitlistButton>
          <div className="flex items-center justify-center">
            <img src="/images/line1.svg" alt="" />
            <img src="/images/circle.svg" alt="" />
            <img src="/images/line2.svg" alt="" />
          </div>
          <div className="flex items-center justify-center gap-4">
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
          <p className="font-geist text-xs text-white">
            Join our community today
          </p>
        </div>
        <div className="-mt-10 flex items-end justify-between gap-4 md:justify-center">
          <img
            src="/images/coin-left.png"
            alt=""
            className="h-[108px] w-[83px]"
          />
          <img src="/images/Art.png" alt="" className="h-[200px] w-[228px]" />
          <img
            src="/images/coin-right.png"
            alt=""
            className="h-[108px] w-[83px]"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#2D2D45] to-transparent"></div>
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
