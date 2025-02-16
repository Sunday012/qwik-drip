import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function Hero() {
  return (
    <div className={cn("relative flex h-[90vh] items-center")}>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Woman relaxing outdoors"
          className="h-full w-full rounded-b-[80px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B062633] to-transparent" />
      </div>

      <div className="container relative z-10 flex items-center justify-between">
        <div className="flex w-[570px] flex-col items-center gap-6 border border-red-500">
          <h1 className="text-center text-[64px] font-bold text-white">
            Weight loss <br /> treatment for a <br /> unique you
          </h1>
          <p className="w-[507px] text-center text-[16px] font-medium text-white">
            You're only a few steps away from reaching your goal weight. Skip
            the clinic, get personalized weight loss treatment from anywhere,
            anytime.
          </p>

          <div className="flex items-center gap-4">
            <Button variant="default">Get Started</Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border border-red-500">
          <img src="/icons/play-button.svg" alt="play-button" />
        </div>
      </div>
    </div>
  );
}
