"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

import { LogoWhite } from "../logo";

export function Footer() {
  return (
    <footer className="relative border-t bg-[#121315] text-[white] transition-colors duration-300">
      <div className="container mx-auto px-4 py-6 md:px-[136px] md:py-[100px]">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative">
            <LogoWhite className="h-[64px] w-[200px]" />
            <p className="mb-6 mt-4 text-[#F0F5F4]">
              Schedule your free consultation and take the first step towards a
              healthier you.
            </p>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Info</h3>
              <nav className="space-y-2 text-sm">
                <a
                  href="#"
                  className="block transition-colors hover:text-primary"
                >
                  Blogs
                </a>
                <a
                  href="#"
                  className="block transition-colors hover:text-primary"
                >
                  Newsletter
                </a>
                <a
                  href="#"
                  className="block transition-colors hover:text-primary"
                >
                  Sitemap
                </a>
              </nav>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Services</h3>
              <div className="space-y-2 text-sm not-italic">
                <p>Sick visit</p>
                <p>STD / STI</p>
                <p>Sitemap</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Dr Essien, Inc. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a
              href="#"
              className="border-l border-muted-foreground pl-4 transition-colors hover:text-primary"
            >
              Terms & Conditions
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
