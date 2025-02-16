import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { SlotProps } from "input-otp";

import LogoWL from "~/assets/logo_wl.svg";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { toast } from "~/hooks/use-toast";
import { cn } from "~/lib/utils";

import { useSendOTPMutation, useVerifyOTPMutation } from "../api/mutations";

const CORRECT_CODE = "6548";

export default function VerifyAccount() {
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

    setHasGuessed(value === CORRECT_CODE);

    setValue("");
    setTimeout(() => {
      inputRef.current?.blur();
    }, 20);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Verify account</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[528px] max-w-[687px] rounded-[24px]">
        <div className="flex flex-col items-center">
          <div
            className="flex h-[43px] w-[130px] items-center justify-center"
            aria-hidden="true"
          >
            <Link to="/" className="mx-auto my-[24px]">
              <img src={LogoWL} alt="Proxymed logo" />
            </Link>
          </div>
          <DialogHeader>
            <DialogTitle className="text-center text-[40px] font-bold">
              Verify your account
            </DialogTitle>
            <DialogDescription className="text-center text-[18px] font-normal">
              <p>
                We sent a 6 digit OTP to{" "}
                <span className="font-medium">Maurice48@gmail.com</span>
              </p>
              <p>Please input it below to proceed.</p>
            </DialogDescription>
          </DialogHeader>
        </div>

       {/* <OTPForm /> */}
      </DialogContent>
    </Dialog>
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
