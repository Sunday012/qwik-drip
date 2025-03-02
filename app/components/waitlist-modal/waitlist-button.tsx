"use client"

import { useState, ReactNode, ButtonHTMLAttributes } from "react"
import { WaitlistModal } from "./waitlist-modal"
import { cn } from "~/lib/utils"
import useWaitlistStore from "~/store/waitlist-store"

interface WaitlistButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  className?: string
}

export function WaitlistButton({ 
  children = "Join the waitlist", 
  className, 
  ...props 
}: WaitlistButtonProps) {
  const {openWaitlist} = useWaitlistStore()

  return (
    <>
      <button
        onClick={openWaitlist}
        className={cn(
          "rounded-md bg-[#6600FF] px-4 py-2 text-white font-medium hover:bg-[#6600FF]/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#6600FF]/50 transition-colors",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </>
  )
}
