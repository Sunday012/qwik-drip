import { Link } from "@tanstack/react-router";

import { Marquee } from "../../components/marquee";
import { marqueeImages } from "../../data/marquee";

export function WhyLoseWeight() {
  return (
    <div className="py-[40px] sm:py-[60px] lg:py-[80px]">
      <div className="relative z-[2] flex flex-col items-center text-center">
        <h2 className="mb-[2%] text-[32px] font-bold leading-[1.2] text-[#363840] sm:text-[56px] sm:leading-[60px]">
          Why Lose Weight
        </h2>
        <p className="lg:w-4/10 mb-[2.5%] w-10/12 my-6 text-base text-[#7F8493] sm:text-lg">
          Evidence-based approach combining medical expertise with proven weight
          loss strategies
        </p>
        <Link
          to="/welcome"
          className="inline-block mt-6 rounded-lg bg-[#4272DD] px-6 py-3 text-center text-base font-bold text-white sm:py-4 sm:text-lg"
        >
          GET STARTED
        </Link>

        {/* Mobile layout for benefit cards */}
        <div className="mt-8 flex w-[90%] flex-col gap-4 sm:hidden">
          <div className="border-l-solid w-full rounded-xl border-[1px] border-l-4 border-[#ECECED] border-l-[#4272DD] bg-white px-4 py-3 text-base font-medium text-[#363840] shadow-[0px_2px_4px_0px_#0000000D]">
            <p>Look and feel good in anything.</p>
          </div>
          <div className="border-r-solid w-full rounded-xl border-[1px] border-r-4 border-[#ECECED] border-r-[#4272DD] bg-white px-4 py-3 text-base font-medium text-[#363840] shadow-[0px_2px_4px_0px_#0000000D]">
            <p>Be healthier and more productive</p>
          </div>
          <div className="border-l-solid w-full rounded-xl border-[1px] border-l-4 border-[#ECECED] border-l-[#4272DD] bg-white px-4 py-3 text-base font-medium text-[#363840] shadow-[0px_2px_4px_0px_#0000000D]">
            <p>Boost self esteem and confidence</p>
          </div>
          <div className="border-r-solid w-full rounded-xl border-[1px] border-r-4 border-[#ECECED] border-r-[#4272DD] bg-white px-4 py-3 text-base font-medium text-[#363840] shadow-[0px_2px_4px_0px_#0000000D]">
            <p>Sleep better and reduce stress</p>
          </div>
        </div>

        {/* Desktop layout for benefit cards */}
        <div className="hidden w-full sm:block">
          <div className="border-l-solid absolute bottom-0 left-[calc(1/8_*_100%)] rounded-br-xl rounded-tr-xl border-[1px] border-l-4 border-solid border-[#ECECED] border-l-[#4272DD] bg-white px-6 py-4 text-lg font-medium text-[#363840] shadow-[0px_2px_4px_0px_#0000000D,2px_6px_7px_0px_#0000000A,4px_14px_9px_0px_#00000008,6px_26px_11px_0px_#00000003,10px_40px_12px_0px_#00000000]">
            <p>Look and feel good in anything.</p>
          </div>
          <div className="border-r-solid absolute bottom-0 right-[calc(1/8_*_100%)] rounded-bl-xl rounded-tl-xl border-[1px] border-r-4 border-solid border-[#ECECED] border-r-[#4272DD] bg-white px-6 py-4 text-lg font-medium text-[#363840] shadow-[0px_2px_4px_0px_#0000000D,2px_6px_7px_0px_#0000000A,4px_14px_9px_0px_#00000008,6px_26px_11px_0px_#00000003,10px_40px_12px_0px_#00000000]">
            <p>Be healthier and more productive</p>
          </div>
          <div className="border-l-solid absolute -bottom-[30%] left-[calc(1/7_*_100%)] rotate-[2.62deg] rounded-br-xl rounded-tr-xl border-[1px] border-l-4 border-solid border-[#ECECED] border-l-[#4272DD] bg-white px-6 py-4 text-lg font-medium text-[#363840] shadow-[0px_2px_4px_0px_#0000000D,2px_6px_7px_0px_#0000000A,4px_14px_9px_0px_#00000008,6px_26px_11px_0px_#00000003,10px_40px_12px_0px_#00000000]">
            <p>Boost self esteem and confidence</p>
          </div>
          <div className="border-r-solid absolute -bottom-[30%] right-[calc(1/7_*_100%)] -rotate-[2.62deg] rounded-bl-xl rounded-tl-xl border-[1px] border-r-4 border-solid border-[#ECECED] border-r-[#4272DD] bg-white px-6 py-4 text-lg font-medium text-[#363840] shadow-[0px_2px_4px_0px_#0000000D,2px_6px_7px_0px_#0000000A,4px_14px_9px_0px_#00000008,6px_26px_11px_0px_#00000003,10px_40px_12px_0px_#00000000]">
            <p>Sleep better and reduce stress</p>
          </div>
        </div>
      </div>
      <div>
        <Marquee
          images={marqueeImages}
          className="mt-[40px] h-[20px] sm:h-[232px] lg:z-[1] lg:h-[400px]"
        />
      </div>
    </div>
  );
}
