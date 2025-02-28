import React from "react";

export const SlideContent = () => {
  return (
    <div className="flex flex-col justify-center gap-4 py-[60px] md:flex-row md:items-start">
      <div className="flex flex-col gap-4 w-full md:w-[40%]">
        <div className="flex size-10 flex-col items-center justify-center rounded-full bg-[#2E2047] transition-transform duration-300 hover:scale-110">
          <img src="/icons/star.svg" alt="" />
        </div>
        <h1 className="font-geist text-2xl font-bold text-white">
          Buy & Sell Drips Instantly
        </h1>
        <p className="font-geist text-base text-[#A1A1AA]">
          Turn your style into success. Buy trending outfits or sell your
          fashion combinations instantly on our marketplace.
        </p>
      </div>

      <div className="flex items-center justify-center w-full md:w-[50%]">
        <div className="mt-6 flex h-[430px] w-[80%] items-center justify-center rounded-[59px] border-t-[9px] border-t-[#FFFFFF05] bg-[#6600FF0D] md:mt-0">
          <img src="/images/stats.gif" alt="" className="h-[390px] w-[219px]" />
        </div>
      </div>
    </div>
  );
};
