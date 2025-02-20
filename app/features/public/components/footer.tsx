import { Link } from "@tanstack/react-router";
import {
  FaFacebook,
  FaLinkedin,
  FaSquareInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import Logo from "~/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-[#121315] px-[5%] py-[8%] text-[#F0F5F4] sm:px-[6%] sm:py-[5%] md:px-[10%] md:py-[5%]">
      <div className="flex flex-col flex-wrap justify-between gap-8 sm:flex-row sm:gap-10">
        <div className="w-full sm:w-6/12">
          <div className="mb-4">
            <img src={Logo} alt="" className="w-32 sm:w-auto" />
          </div>
          <div className="mb-6 sm:mb-10">
            <p className="text-base sm:w-[70%] sm:text-xl">
              Schedule your free consultation and take the first step towards a
              healthier you.
            </p>
          </div>
          {/* <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/" className="text-2xl sm:text-[34px]">
              <FaYoutube />
            </Link>
            <Link to="/" className="text-xl sm:text-2xl">
              <FaSquareInstagram />
            </Link>
            <Link to="/" className="text-xl sm:text-2xl">
              <FaXTwitter />
            </Link>
            <Link to="/" className="text-xl sm:text-2xl">
              <FaFacebook />
            </Link>
            <Link to="/" className="text-xl sm:text-2xl">
              <FaLinkedin />
            </Link>
          </div> */}
        </div>
        <div className="flex gap-10 sm:w-4/12 sm:gap-8">
          <div className="flex w-full items-center gap-4 sm:justify-end sm:gap-6">
            <Link to="/" className="text-2xl sm:text-[34px]">
              <FaYoutube />
            </Link>
            <Link to="/" className="text-xl sm:text-2xl">
              <FaSquareInstagram />
            </Link>
            <Link to="/" className="text-xl sm:text-2xl">
              <FaXTwitter />
            </Link>
            <Link to="/" className="text-xl sm:text-2xl">
              <FaFacebook />
            </Link>
            <Link to="/" className="text-xl sm:text-2xl">
              <FaLinkedin />
            </Link>
          </div>
          {/* <div>
            <p className="mb-4 sm:mb-6 text-base sm:text-lg font-medium">INFO</p>
            <div className="flex flex-col gap-3 sm:gap-4">
              <Link to="/" className="text-sm sm:text-base text-[rgba(240,245,244,0.53)]">
                Blogs
              </Link>
              <Link to="/" className="text-sm sm:text-base text-[rgba(240,245,244,0.53)]">
                Newsletter
              </Link>
              <Link to="/" className="text-sm sm:text-base text-[rgba(240,245,244,0.53)]">
                Sitemap
              </Link>
            </div>
          </div>
          <div>
            <p className="mb-4 sm:mb-6 text-base sm:text-lg font-medium">SERVICES</p>
            <div className="flex flex-col gap-3 sm:gap-4">
              <Link to="/" className="text-sm sm:text-base text-[rgba(240,245,244,0.53)]">
                Sick visit
              </Link>
              <Link to="/" className="text-sm sm:text-base text-[rgba(240,245,244,0.53)]">
                STD / STI
              </Link>
              <Link to="/" className="text-sm sm:text-base text-[rgba(240,245,244,0.53)]">
                Sitemap
              </Link>
            </div>
          </div> */}
        </div>
      </div>
      <div className="mt-[8%] flex flex-col justify-between gap-4 text-base sm:mt-[10%] sm:flex-row sm:gap-5 sm:text-xl">
        <p className="text-center sm:text-sm sm:text-left">
          © 2024 Dr Essien, Inc. All rights reserved.
        </p>
        <p className="text-center sm:text-sm sm:text-right">
          <Link to="/">Privacy Policy</Link> |{" "}
          <Link to="/">Terms & Conditions</Link>
        </p>
      </div>
    </footer>
  );
}
