import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Info, Loader2 } from "lucide-react"
import { Checkbox } from "../ui/checkbox"

// Define the form schema with Zod
const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  isBusinessOwner: z.boolean().optional(),
  isCreator: z.boolean().optional(),
  isConsumer: z.boolean().optional(),
})

type FormValues = z.infer<typeof formSchema>

interface WaitlistFormProps {
  onSuccess: () => void
}

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      isBusinessOwner: false,
      isCreator: false,
      isConsumer: false,
    },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Handle form submission
    console.log("Form submitted:", data)
    setIsSubmitting(false)
    onSuccess()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div
            className={`rounded-md border ${errors.firstName ? "border-[#EF4444] bg-[#FFF4F4]" : "border-gray-200"} focus-within:ring-1 focus-within:ring-[#6600FF] focus-within:border-[#6600FF] overflow-hidden`}
          >
            <input
              {...register("firstName")}
              placeholder="First name"
              className="w-full px-3 py-2 h-[55px] bg-transparent focus:outline-none"
            />
          </div>
          {errors.firstName && (
            <p className="text-[#EF4444] text-xs flex font-geist items-center">
             <Info className="text-[#EF4444] size-4 mr-1" /> {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <div
            className={`rounded-md border ${errors.lastName ? "border-[#EF4444] bg-[#FFF4F4]" : "border-gray-200"} focus-within:ring-1 focus-within:ring-[#6600FF] focus-within:border-[#6600FF] overflow-hidden`}
          >
            <input
              {...register("lastName")}
              placeholder="Last name"
              className="w-full px-3 py-2 h-[55px] bg-transparent focus:outline-none"
            />
          </div>
          {errors.lastName && (
            <p className="text-[#EF4444] text-xs flex font-geist items-center">
             <Info className="text-[#EF4444] size-4 mr-1" /> {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <div
          className={`rounded-md border ${errors.email ? "border-[#EF4444] bg-[#FFF4F4]" : "border-gray-200"} focus-within:ring-1 focus-within:ring-[#6600FF] focus-within:border-[#6600FF] overflow-hidden`}
        >
          <input
            {...register("email")}
            type="email"
            placeholder="Email address"
            className="w-full px-3 py-2 h-[57px] bg-transparent focus:outline-none"
          />
        </div>
        {errors.email && (
          <p className="text-[#EF4444] text-xs font-geist flex items-center">
            <Info className="text-[#EF4444] size-4 mr-1" /> {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between space-x-2">
        <label htmlFor="business-owner" className="text-sm">
            Join as a business owner
          </label>
          <Checkbox
            id="business-owner"
            checked={watch("isBusinessOwner")}
            onCheckedChange={(checked) => setValue("isBusinessOwner", checked as boolean)}
            className="data-[state=checked]:bg-[#6600FF] data-[state=checked]:border-[#6600FF]"
          />
        </div>

        <div className="flex items-center justify-between space-x-2">
          <label htmlFor="creator" className="text-sm">
            Join as a creator
          </label>
          <Checkbox
            id="creator"
            checked={watch("isCreator")}
            onCheckedChange={(checked) => setValue("isCreator", checked as boolean)}
            className="data-[state=checked]:bg-[#6600FF] data-[state=checked]:border-[#6600FF]"
          />
        </div>

        <div className="flex items-center justify-between space-x-2">
          <label htmlFor="consumer" className="text-sm">
            Join as a consumer
          </label>
          <Checkbox
            id="consumer"
            checked={watch("isConsumer")}
            onCheckedChange={(checked) => setValue("isConsumer", checked as boolean)}
            className="data-[state=checked]:bg-[#6600FF] data-[state=checked]:border-[#6600FF]"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#6600FF] text-white py-3 font-medium hover:bg-[#6600FF]/90 focus:outline-none focus:ring-2 focus:ring-[#6600FF]/50 transition-colors disabled:opacity-70 rounded-3xl"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          </span>
        ) : (
          "Get early access"
        )}
      </button>
    </form>
  )
}

