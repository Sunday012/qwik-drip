import { useState, useEffect } from "react"
import { WaitlistForm } from "./waitlist-form"
import { SuccessModal } from "./success-modal"
import { X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import useWaitlistStore from "~/lib/store/waitlist-store"

// interface WaitlistModalProps {
//   open: boolean
//   onOpenChange: (open: boolean) => void
// }

export function WaitlistModal() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const {isOpen, closeWaitlist} = useWaitlistStore()

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640) // Adjust breakpoint as needed
    handleResize() // Initial check
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleSuccess = () => {
    setIsSuccess(true)
  }

  const handleClose = () => {
    setIsSuccess(false)
    closeWaitlist()
  }

  if (!isOpen) return null

  return isMobile ? (
    // Full-screen div for mobile
    <div className="fixed inset-0 bg-white h-screen z-50 w-full flex flex-col p-6">
      <button
        onClick={handleClose}
        className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#6600FF] focus:ring-offset-2"
      >
        <X className="h-6 w-6" />
        <span className="sr-only">Close</span>
      </button>

      {isSuccess ? (
        <SuccessModal onClose={handleClose} />
      ) : (
        <>
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-2xl font-geist font-bold">JOIN THE WAITLIST</h1>
            <p className="text-center text-gray-500 font-geist mt-2">
              Join our exclusive waitlist today and be notified when we launch. Early members will receive special perks
              and features.
            </p>
          </div>
          <WaitlistForm onSuccess={handleSuccess} />
        </>
      )}
    </div>
  ) : (
    // Default modal for larger screens
    <Dialog open={isOpen} onOpenChange={closeWaitlist}>
      <DialogContent className="bg-white sm:rounded-[32px] w-full p-6">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#6600FF] focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        {isSuccess ? (
          <SuccessModal onClose={handleClose} />
        ) : (
          <>
            <DialogHeader className="flex flex-col gap-4">
              <DialogTitle className="text-center text-2xl font-geist font-bold">JOIN THE WAITLIST</DialogTitle>
              <p className="text-center text-gray-500 font-geist mt-2">
                Join our exclusive waitlist today and be notified when we launch. Early members will receive special
                perks and features.
              </p>
            </DialogHeader>
            <WaitlistForm onSuccess={handleSuccess} />
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
