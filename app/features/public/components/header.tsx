import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { PiX } from "react-icons/pi";

import LogoDark from "~/assets/logo-dark.svg";
import Logo from "~/assets/logo.svg";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-[5%] top-[3%] z-30 flex h-20 w-[90%] max-w-[1440px] items-center justify-between rounded-[444px] bg-[linear-gradient(0deg,rgba(255,255,255,0.17),rgba(255,255,255,0.17)),linear-gradient(0deg,rgba(0,0,0,0.61),rgba(0,0,0,0.61))] px-4 py-[1.5%] text-sm font-medium text-[#363840] sm:text-white">
      <div className={!menuOpen ? "w-32" : "hidden"}>
        <img src={Logo} alt="Company Logo" className="w-full" />
      </div>
      <div
        className={`relative z-50 w-32 ${menuOpen ? "sm:hidden" : "hidden"}`}
      >
        <img src={LogoDark} alt="Company Logo" className="w-full" />
      </div>
      <nav
        className={`fixed left-0 top-0 z-40 flex h-screen w-full flex-col bg-white pt-24 text-center transition-transform duration-200 ease-in-out sm:static sm:h-auto sm:flex-row sm:bg-transparent sm:pt-0 sm:text-left ${
          menuOpen
            ? "-translate-x-0 sm:-translate-x-0"
            : "-translate-x-full sm:-translate-x-0"
        } ${menuOpen ? "sm:justify-between" : "sm:justify-end"}`}
        aria-label="Main navigation"
      >
        <div className="mr-0 flex w-full flex-col items-center justify-end gap-8 font-medium sm:mr-8 sm:w-1/2 sm:flex-row sm:gap-6 sm:space-x-6 sm:text-center md:gap-0">
          <Link to="/" className="text-lg sm:text-sm">
            FAQ
          </Link>
          <Link to="/" className="text-lg sm:text-sm">
            CONTACT US
          </Link>
        </div>
        <div className="mt-8 sm:mt-0">
          <Link
            to="/welcome"
            className="inline-block rounded-[444px] bg-[#4272DD] px-6 py-3 text-lg font-semibold text-[#FDFDFD] sm:bg-white sm:text-sm sm:text-[#4272DD]"
          >
            GET STARTED
          </Link>
        </div>
      </nav>
      <button
        className={`relative z-40 ${
          menuOpen
            ? "hidden"
            : "rounded-[444px] border-[1px] border-solid border-[rgba(255,255,255,0.3)] px-4 py-3 text-right text-lg text-white sm:hidden"
        }`}
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
        aria-expanded={menuOpen}
      >
        <HiOutlineMenuAlt3 />
      </button>
      <button
        className={`relative z-40 ${
          menuOpen
            ? "flex h-10 w-10 items-center justify-center rounded-[4444px] bg-[rgba(0,0,0,0.18)] text-[#7f8493] sm:hidden"
            : "hidden"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
        aria-expanded={menuOpen}
      >
        <PiX />
      </button>
    </header>
  );
}
