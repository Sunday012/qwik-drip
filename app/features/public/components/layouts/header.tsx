import { useState } from "react";
import { Link } from "@tanstack/react-router";

import LogoDark from "~/assets/logo-dark.svg";
import Logo from "~/assets/logo.svg";
import { Button } from "~/components/ui/button";
import { WaitlistButton } from "~/components/waitlist-modal/waitlist-button";

export function Header() {
  return (
    <header className="fixed z-50 flex w-full items-center justify-center p-4">
      <div className="flex w-full md:w-[80%] items-center justify-between rounded-[38px] border border-[#FFFFFF36] bg-[#0D031D9C] p-4 shadow-lg backdrop-blur-2xl">
        <div className="flex items-center gap-2">
          <img src="/favicon-32x32.png" />
          <p className="hidden font-raleway text-[25px] font-semibold text-white sm:block">
            Qwikdrip
          </p>
        </div>
        <WaitlistButton
          className="h-10 rounded-[22px] px-[14px] py-2 text-[#0A0A0F]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url("/images/cloud.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          Join the Waitlist
        </WaitlistButton>
      </div>
    </header>
  );
}
