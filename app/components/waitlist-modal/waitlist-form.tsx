import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Info, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

import { useToast } from "~/hooks/use-toast";
import { formSchema, FormValues } from "~/schema";

import { Checkbox } from "../ui/checkbox";
import { joinUsFn } from "./actions/mutation";

interface WaitlistFormProps {
  onSuccess: () => void;
}

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (variables: FormValues) => {
      return joinUsFn({
        data: {
          firstName: variables.firstName,
          lastName: variables.lastName,
          email: variables.email,
          isBusinessOwner: variables.isBusinessOwner || false,
          isCreator: variables.isCreator || false,
          isConsumer: variables.isConsumer || false,
        },
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    mutate(
      {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        isBusinessOwner: data.isBusinessOwner,
        isConsumer: data.isConsumer,
        isCreator: data.isCreator,
      },
      {
        onSuccess: () => {
          reset();
        },
        onError: (error) => {
          setError(error.message);
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
      {error && <p className="text-sm text-[#EF4444]">{error}</p>}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div
            className={`rounded-md border ${errors.firstName ? "border-[#EF4444] bg-[#FFF4F4]" : "border-gray-200"} overflow-hidden focus-within:border-[#6600FF] focus-within:ring-1 focus-within:ring-[#6600FF]`}
          >
            <input
              {...register("firstName")}
              placeholder="First name"
              className="h-[55px] w-full bg-transparent px-3 py-2 focus:outline-none"
            />
          </div>
          {errors.firstName && (
            <p className="flex items-center font-geist text-xs text-[#EF4444]">
              <Info className="mr-1 size-4 text-[#EF4444]" />{" "}
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <div
            className={`rounded-md border ${errors.lastName ? "border-[#EF4444] bg-[#FFF4F4]" : "border-gray-200"} overflow-hidden focus-within:border-[#6600FF] focus-within:ring-1 focus-within:ring-[#6600FF]`}
          >
            <input
              {...register("lastName")}
              placeholder="Last name"
              className="h-[55px] w-full bg-transparent px-3 py-2 focus:outline-none"
            />
          </div>
          {errors.lastName && (
            <p className="flex items-center font-geist text-xs text-[#EF4444]">
              <Info className="mr-1 size-4 text-[#EF4444]" />{" "}
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <div
          className={`rounded-md border ${errors.email ? "border-[#EF4444] bg-[#FFF4F4]" : "border-gray-200"} overflow-hidden focus-within:border-[#6600FF] focus-within:ring-1 focus-within:ring-[#6600FF]`}
        >
          <input
            {...register("email")}
            type="email"
            placeholder="Email address"
            className="h-[57px] w-full bg-transparent px-3 py-2 focus:outline-none"
          />
        </div>
        {errors.email && (
          <p className="flex items-center font-geist text-xs text-[#EF4444]">
            <Info className="mr-1 size-4 text-[#EF4444]" />{" "}
            {errors.email.message}
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
            onCheckedChange={(checked) =>
              setValue("isBusinessOwner", checked as boolean)
            }
            className="data-[state=checked]:border-[#6600FF] data-[state=checked]:bg-[#6600FF]"
          />
        </div>

        <div className="flex items-center justify-between space-x-2">
          <label htmlFor="creator" className="text-sm">
            Join as a creator
          </label>
          <Checkbox
            id="creator"
            checked={watch("isCreator")}
            onCheckedChange={(checked) =>
              setValue("isCreator", checked as boolean)
            }
            className="data-[state=checked]:border-[#6600FF] data-[state=checked]:bg-[#6600FF]"
          />
        </div>

        <div className="flex items-center justify-between space-x-2">
          <label htmlFor="consumer" className="text-sm">
            Join as a consumer
          </label>
          <Checkbox
            id="consumer"
            checked={watch("isConsumer")}
            onCheckedChange={(checked) =>
              setValue("isConsumer", checked as boolean)
            }
            className="data-[state=checked]:border-[#6600FF] data-[state=checked]:bg-[#6600FF]"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-3xl bg-[#6600FF] py-3 font-medium text-white transition-colors hover:bg-[#6600FF]/90 focus:outline-none focus:ring-2 focus:ring-[#6600FF]/50 disabled:opacity-70"
      >
        {isPending ? (
          <span className="flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          </span>
        ) : (
          "Get early access"
        )}
      </button>
    </form>
  );
}
