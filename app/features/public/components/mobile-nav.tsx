"use client";

import * as React from "react";
import { Link, useRouter } from "@tanstack/react-router";
import { LinkProps } from "node_modules/@tanstack/react-router/dist/esm/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "~/components/ui/drawer";
import { cn } from "~/lib/utils";
import { MainNavItem, SidebarNavItem } from "~/types";

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

const docsConfig: DocsConfig = {
  mainNav: [
    { title: "FAQ", to: "/" },
    { title: "Contact Us", to: "/" },
  ],
  sidebarNav: [
    { title: "FAQ", to: "/", items: [] },
    { title: "Contact Us", to: "/", items: [] },
    { title: "Get Started", to: "/welcome", items: [] },
  ],
};

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  const onOpenChange = React.useCallback((open: boolean) => {
    setOpen(open);
  }, []);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="-ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <HiOutlineMenuAlt3 />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="!size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg> */}
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[60svh] p-0">
        <div className="overflow-auto p-6">
          <div className="flex flex-col space-y-3">
            {docsConfig.mainNav?.map(
              (item) =>
                item.to && (
                  <MobileLink key={item.to} to={item.to} onOpenChange={setOpen}>
                    {item.title}
                  </MobileLink>
                ),
            )}
          </div>
          <div className="flex flex-col space-y-2">
            {docsConfig.sidebarNav.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">{item.title}</h4>
                {item?.items?.length &&
                  item.items.map((item) => (
                    <React.Fragment key={item.to}>
                      {!item.disabled &&
                        (item.to ? (
                          <MobileLink
                            href={item.to}
                            onOpenChange={setOpen}
                            className="text-muted-foreground"
                          >
                            {item.title}
                            {item.label && (
                              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                {item.label}
                              </span>
                            )}
                          </MobileLink>
                        ) : (
                          item.title
                        ))}
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  to,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      to={to}
      onClick={() => {
        router.navigate({ to });
        onOpenChange?.(false);
      }}
      className={cn("text-base", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
