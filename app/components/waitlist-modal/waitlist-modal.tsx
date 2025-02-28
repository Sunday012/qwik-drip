import { useState } from "react"
import { WaitlistForm } from "./waitlist-form"
import { SuccessModal } from "./success-modal"
import { X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"

interface WaitlistModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WaitlistModal({ open, onOpenChange }: WaitlistModalProps) {
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSuccess = () => {
    setIsSuccess(true)
  }

  const handleClose = () => {
    setIsSuccess(false)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white sm:rounded-[32px] w-full p-6">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#6600FF] focus:ring-offset-2"
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

