import { useEffect, useRef, useState } from "react";
import { OTPInput, SlotProps } from "input-otp";

import { Button } from "~/components/ui/button";
import { toast } from "~/hooks/use-toast";
import { cn } from "~/lib/utils";

import { useSendOTPMutation, useVerifyOTPMutation } from "../api/mutations";

export default function OTPForm({ nextStep }: { nextStep: () => void }) {
  const [value, setValue] = useState("");
  const [hasGuessed, setHasGuessed] = useState<undefined | boolean>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [resendCountdown, setResendCountdown] = useState(30);

  const { mutate: sendOTPMutation, isPending } = useSendOTPMutation();
  const { mutate: verifyOTPMutation, isPending: verifyOTPMutationPending } =
    useVerifyOTPMutation();

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
        email: "",
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

  async function onSubmit(e?: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault?.();

    inputRef.current?.select();
    await new Promise((r) => setTimeout(r, 1_00));

    setValue("");
    setTimeout(() => {
      inputRef.current?.blur();
    }, 20);
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
                <Slot key={idx} {...slot} />
              ))}
            </div>
          )}
          onComplete={onSubmit}
        />
      </div>
      <div className="mx-auto mb-[24px] mt-[40px] flex w-[559px] items-center justify-center">
        <Button size="xl" fullWidth>
          Confirm
        </Button>
      </div>
      {hasGuessed === false && (
        <p
          className="text-center text-xs text-muted-foreground"
          role="alert"
          aria-live="polite"
        >
          Invalid code. Please try again.
        </p>
      )}
      <p className="text-center text-sm">
        <button
          className={`text-sm font-medium underline hover:no-underline ${
            resendCountdown > 0 || isPending
              ? "cursor-not-allowed text-gray-400"
              : "text-[#FF6F61]"
          }`}
          disabled={
            resendCountdown > 0 || isPending || verifyOTPMutationPending
          }
          onClick={handleResend}
        >
          {resendCountdown > 0 || isPending
            ? `${resendCountdown}s Resend code`
            : "Resend code"}
        </button>
      </p>
    </div>
  );
}

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        "flex h-[55px] w-[80px] items-center justify-center rounded-2xl border border-input bg-background font-medium text-foreground shadow-sm shadow-black/5 transition-shadow",
        { "z-10 border border-ring ring-[3px] ring-ring/20": props.isActive },
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
    </div>
  );
}
