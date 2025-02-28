import { Check } from "lucide-react"

interface SuccessModalProps {
  onClose: () => void
}

export function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="w-20 h-20 rounded-full bg-[#D3E7C8] flex items-center justify-center mb-6">
        <img src="/icons/check.svg" alt="check" />
      </div>

      <h2 className="text-2xl font-bold mb-2 font-geist">YOU'RE ON THE LIST!</h2>

      <p className="text-center text-gray-500 mb-8 font-geist">
        Thanks for joining our waitlist. We'll reach out as soon as we're ready! Keep an eye on your inbox for updates.
      </p>

      <button
        onClick={onClose}
        className="w-full bg-[#6600FF] rounded-3xl text-white py-3 font-medium hover:bg-[#6600FF]/90 focus:outline-none focus:ring-2 focus:ring-[#6600FF]/50 transition-colors"
      >
        Okay
      </button>
    </div>
  )
}

