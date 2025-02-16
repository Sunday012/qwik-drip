import { Link } from "@tanstack/react-router";

import { LogoBlack } from "~/components/logo";
import { Button } from "~/components/ui/button";

export function Header() {
  return (
    <header className="absolute left-1/2 top-4 z-10 mt-4 flex w-[90%] -translate-x-1/2 items-center justify-between rounded-[444px] bg-[#0000009C] px-8 py-4">
      <Link to="/">
        <LogoBlack className="h-12 w-32" />
      </Link>
      <nav className="flex items-center gap-4">
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          className="text-white hover:text-gray-900"
          activeOptions={{ exact: true }}
        >
          FAQ
        </Link>{" "}
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          className="text-white hover:text-gray-900"
        >
          Contact us
        </Link>{" "}
        <Button className="rounded-[333px] bg-[#FFFFFF] text-[#4272DD]">
          Get started
        </Button>
      </nav>
    </header>
  );
}
