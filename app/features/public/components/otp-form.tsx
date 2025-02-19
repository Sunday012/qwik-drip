import { useEffect, useRef, useState } from "react";
import { OTPInput, SlotProps } from "input-otp";
import { CircleAlert, LoaderCircle } from "lucide-react";

import { Button } from "~/components/ui/button";
import { toast } from "~/hooks/use-toast";
import { cn } from "~/lib/utils";

import {
  useSendLoginOTPMutation,
  useVerifyOTPMutation,
} from "../api/mutations";

export function OTPForm({
  nextStep,
  email,
}: {
  nextStep?: () => void;
  email: string;
}) {
  const [value, setValue] = useState("");
  const [hasGuessed, setHasGuessed] = useState<undefined | boolean>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [resendCountdown, setResendCountdown] = useState(30);

  const { mutate: sendOTPMutation, isPending } = useSendLoginOTPMutation();
  const {
    mutate: verifyOTPMutation,
    isPending: verifyOTPMutationPending,
    error,
    isError,
  } = useVerifyOTPMutation();

  useEffect(() => {
    if (resendCountdown > 0 && !isPending) {
      const timer = setTimeout(() => {
        setResendCountdown((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCountdown, isPending]);

  useEffect(() => {
    if (hasGuessed) {
      closeButtonRef.current?.focus();
    }
  }, [hasGuessed]);

  const handleResend = () => {
    setResendCountdown(30);
    sendOTPMutation(
      {
        email,
      },
      {
        onSuccess() {
          toast({
            description: "Email verification sent",
          });
          const countdownInterval = setInterval(() => {
            setResendCountdown((prev) => {
              if (prev <= 1) {
                clearInterval(countdownInterval);
                return 0;
              }
              return prev - 1;
            });
          }, 1000);
        },
        onError() {
          toast({
            description: "Failed to resend OTP",
          });
          setResendCountdown(0);
        },
      },
    );
  };

  function handleSubmit() {
    verifyOTPMutation(
      {
        email: email,
        otp_code: value,
      },
      {
        onSuccess() {
          setValue("");
          nextStep?.();
        },
        onError() {
          setHasGuessed(false);
        },
      },
    );
  }

  return (
    <div>
      <div className="flex justify-center px-[64px] pb-[16px] pt-[24px]">
        <OTPInput
          id="confirmation-code"
          ref={inputRef}
          value={value}
          onChange={setValue}
          containerClassName="flex items-center gap-3 has-[:disabled]:opacity-50"
          maxLength={6}
          onFocus={() => setHasGuessed(undefined)}
          render={({ slots }) => (
            <div className="flex gap-2">
              {slots.map((slot, idx) => (
                <Slot key={idx} {...slot} isError={isError} />
              ))}
            </div>
          )}
          onComplete={handleSubmit}
        />
      </div>
      <div>
        {isError && (
          <div className="flex items-center justify-center rounded-lg px-4 py-3 text-red-600">
            <p className="text-sm">
              <CircleAlert
                className="-mt-0.5 me-3 inline-flex opacity-60"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
              The OTP you entered is invalid
            </p>
          </div>
        )}
      </div>
      <div className="mx-auto mb-[24px] mt-[40px] flex w-[559px] items-center justify-center">
        <Button
          size="xl"
          fullWidth
          disabled={verifyOTPMutationPending || isPending || !value}
          onClick={handleSubmit}
        >
          {verifyOTPMutationPending && (
            <LoaderCircle
              className="-ms-1 me-2 animate-spin"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          )}
          Confirm
        </Button>
      </div>

      <p className="text-center text-sm">
        <button
          className={`text-sm font-medium underline hover:no-underline ${
            resendCountdown > 0 || isPending
              ? "cursor-not-allowed text-gray-400"
              : "text-[#4272DD]"
          }`}
          disabled={
            resendCountdown > 0 || isPending || verifyOTPMutationPending
          }
          onClick={handleResend}
        >
          {resendCountdown > 0 || isPending
            ? `00:${resendCountdown} Resend code`
            : "Resend code"}
        </button>
      </p>
    </div>
  );
}

function Slot(
  props: SlotProps & {
    isError?: boolean;
  },
) {
  return (
    <div
      className={cn(
        "flex h-[55px] w-[80px] items-center justify-center rounded-2xl border border-input bg-background font-medium text-foreground shadow-sm shadow-black/5 transition-shadow",
        { "z-10 border border-ring ring-[3px] ring-ring/20": props.isActive },
        {
          "z-10 border-[1.4px] border-[#E12121] bg-[#FEEBEB] ring-[1.4px] ring-[#E12121]":
            props.isError,
        },
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
    </div>
  );
}
