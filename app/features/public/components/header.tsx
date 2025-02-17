import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { PiX } from "react-icons/pi";

import LogoDark from "~/assets/logo-dark.svg";
import Logo from "~/assets/logo.svg";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-[5%] top-[3%] z-30 flex h-20 w-[90%] max-w-[1440px] items-center justify-between rounded-[444px] bg-[linear-gradient(0deg,rgba(255,255,255,0.17),rgba(255,255,255,0.17)),linear-gradient(0deg,rgba(0,0,0,0.61),rgba(0,0,0,0.61))] px-[1%] py-[1.5%] text-sm font-medium text-[#363840] sm:text-white">
      <div className={menuOpen ? "hidden" : "w-32"}>
        <img src={Logo} alt="logo" className="w-full" />
      </div>
      <div className={menuOpen ? "relative z-50 w-32 sm:hidden" : "hidden"}>
        <img src={LogoDark} alt="logo" className="w-full" />
      </div>
      <nav
        className={
          menuOpen
            ? "fixed left-0 top-0 z-40 flex h-screen w-full -translate-x-0 flex-col bg-white pt-24 text-center transition-transform duration-200 ease-in-out sm:static sm:h-auto sm:-translate-x-0 sm:flex-row sm:justify-between sm:bg-transparent sm:pt-0 sm:text-left"
            : "fixed left-0 top-0 z-40 flex h-screen w-full -translate-x-full flex-col bg-white pt-24 text-center transition-transform duration-200 ease-in-out sm:static sm:h-auto sm:-translate-x-0 sm:flex-row sm:justify-end sm:bg-transparent sm:pt-0 sm:text-left"
        }
      >
        <div className="mr-0 sm:mr-8 flex w-full flex-col items-center justify-end gap-8 sm:gap-6 font-medium sm:w-1/2 sm:flex-row md:gap-0 sm:space-x-6 sm:text-center">
          <Link to="/" className="text-lg sm:text-sm">FAQ</Link>
          <Link to="/" className="text-lg sm:text-sm">CONTACT US</Link>
        </div>
        <div className="mt-8 sm:mt-0">
          <Link
            to="/welcome"
            className="inline-block rounded-[444px] bg-[#4272DD] px-6 py-3 text-lg sm:text-sm font-semibold text-[#FDFDFD] sm:bg-white sm:text-[#4272DD]"
          >
            GET STARTED
          </Link>
        </div>
      </nav>
      <div
        className={
          menuOpen
            ? "hidden"
            : "relative z-40 rounded-[444px] border-[1px] border-solid border-[rgba(255,255,255,0.3)] px-4 py-3 text-right text-lg text-white sm:hidden"
        }
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <HiOutlineMenuAlt3 />
      </div>
      <div
        className={
          menuOpen
            ? "relative z-40 flex h-10 w-10 items-center justify-center rounded-[4444px] bg-[rgba(0,0,0,0.18)] text-[#7f8493] sm:hidden"
            : "hidden"
        }
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <PiX />
      </div>
    </header>
  );
}
