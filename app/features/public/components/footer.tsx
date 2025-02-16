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
    <footer className="bg-[#121315] px-[5%] py-[5%] text-[#F0F5F4] sm:px-[10%]">
      <div className="flex flex-col flex-wrap justify-between gap-10 sm:flex-row sm:gap-0">
        <div className="sm:w-6/12 w-full">
          <div className="mb-4">
            <img src={Logo} alt="" />
          </div>
          <div className="mb-10">
            <p className="text-xl sm:w-[70%]">
              Schedule your free consultation and take the first step towards a
              healthier you.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-[34px]">
              <FaYoutube />
            </Link>
            <Link to="/" className="text-2xl">
              <FaSquareInstagram />
            </Link>
            <Link to="/" className="text-2xl">
              <FaXTwitter />
            </Link>
            <Link to="/" className="text-2xl">
              <FaFacebook />
            </Link>
            <Link to="/" className="text-2xl">
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div className="sm:w-4/12 flex justify-between">
          <div>
            <p className="mb-6 text-lg">INFO</p>
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-[rgba(240,245,244,0.53)]">
                Blogs
              </Link>
              <Link to="/" className="text-[rgba(240,245,244,0.53)]">
                Newsletter
              </Link>
              <Link to="/" className="text-[rgba(240,245,244,0.53)]">
                Sitemap
              </Link>
            </div>
          </div>
          <div>
            <p className="mb-6 text-lg">SERVICES</p>
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-[rgba(240,245,244,0.53)]">
                Sick visit
              </Link>
              <Link to="/" className="text-[rgba(240,245,244,0.53)]">
                STD / STI
              </Link>
              <Link to="/" className="text-[rgba(240,245,244,0.53)]">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[10%] flex flex-col justify-between gap-5 text-xl sm:flex-row sm:gap-0">
        <p>© 2024 Dr Essien, Inc. All rights reserved.</p>
        <p className="sm:text-right">
          <Link to="/">Privacy Policy</Link> |{" "}
          <Link to="/">Terms & Conditions</Link>
        </p>
      </div>
    </footer>
  );
}
