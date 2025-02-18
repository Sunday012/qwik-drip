import { Link } from "@tanstack/react-router";

import { Marquee } from "../../components/marquee";
import { achieveData } from "../../data/achieve";
import { marqueeImages } from "../../data/marquee";
import { programData } from "../../data/program";
import { programTimelineData, timelineData } from "../../data/timeline";

export function Journey() {
  return (
    <div className="pb-[5%] pt-[10%]">
      <div className="mx-auto w-full px-[5%] text-center lg:w-1/2 lg:px-[6%]">
        <h2 className="mb-4 text-[24px] font-bold leading-[25.92px] text-[#363840] sm:text-[40px] sm:leading-[43.2px] lg:text-[56px] lg:leading-[60.48px]">
          Your Path To Healthy <br /> Weight Loss
        </h2>
        <p className="text-sm leading-[19.6px] text-[#7F8493] sm:text-base sm:leading-[25.6px] lg:text-lg lg:leading-[28.8px]">
          Our board certified professionals are dedicated to providing the best
          medical care.
        </p>
      </div>

      <div className="relative mt-[32px] flex flex-wrap justify-between px-[5%] pt-[2.5%] lg:px-[6%]">
        <div className="absolute left-[16.5%] z-0 hidden h-[4px] w-[67%] bg-gray-200 sm:top-[37%] sm:block xl:top-[37%]"></div>
        {programTimelineData.map((data) => (
          <div
            className="relative z-10 w-1/2 rounded-2xl py-[5%] text-center lg:w-1/4"
            key={data.id}
          >
            <div className="mx-auto mb-6 flex h-[100px] w-[100px] items-center justify-center rounded-2xl border-[1px] border-solid border-[#ECECED] bg-white">
              <h3 className="text-[40px] font-semibold text-[#4272DD]">
                {data.number}
              </h3>
            </div>
            <div className="flex flex-col items-center sm:block">
              <h4 className="mb-4 text-center text-[16px] font-bold leading-[30px] text-[#363840] sm:text-[28px]">
                {data.title}
              </h4>
              <p className="w-11/12 text-center text-xs text-[#7F8493] sm:text-base">
                {data.text}
              </p>
            </div>
          </div>
        ))}

        <div className="absolute left-[16.5%] hidden w-[67%] justify-between px-[8%] lg:top-[36%] lg:flex xl:top-[36%]">
          {[...Array(programTimelineData.length - 1)].map((_, index) => (
            <div
              key={index}
              className="h-3 w-3 translate-x-1/2 rounded-full bg-gray-400"
            ></div>
          ))}
        </div>
      </div>

      <div className="relative mx-[5%] mt-[80px] rounded-[56px] bg-[url(/images/success_img.webp)] bg-center bg-no-repeat sm:bg-cover lg:mx-[6%]">
        <div className="absolute left-0 top-0 h-full w-full rounded-[56px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_39.79%,rgba(0,0,0,0.52)_98.58%)]"></div>
        <div className="flex flex-col flex-wrap items-end justify-between gap-5 p-[3.5%]">
          {timelineData.map((data) => (
            <div
              className="mb-6 w-[48%] rounded-2xl border-2 border-solid border-transparent bg-[rgba(0,0,0,0.51)] py-[10%] text-center text-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_4px_4px_0px_rgba(0,0,0,0.04),0px_8px_5px_0px_rgba(0,0,0,0.03),0px_14px_6px_0px_rgba(0,0,0,0.01),0px_22px_6px_0px_rgba(0,0,0,0)] [border-image:linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(255,255,255,0.06)_100%)] sm:py-[5%] md:mb-0 md:w-[23%]"
              key={data.id}
            >
              <h3 className="text-xl font-bold sm:text-[40px]">{data.title}</h3>
              <p className="text-xs sm:text-sm lg:text-base">{data.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-[10%]">
        <div className="relative z-[2] flex flex-col items-center text-center">
          <h2 className="mb-[2%] text-[32px] font-bold leading-[1.2] text-[#363840] sm:text-[56px] sm:leading-[60px]">
            Why Lose Weight
          </h2>
          <p className="lg:w-4/10 mb-[2.5%] w-10/12 text-base text-[#7F8493] sm:text-lg">
            Evidence-based approach combining medical expertise with proven
            weight loss strategies
          </p>
          <Link
            to="/welcome"
            className="inline-block rounded-lg bg-[#4272DD] px-6 py-3 text-center text-base font-bold text-white sm:py-4 sm:text-lg"
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
        <Marquee
          images={marqueeImages}
          className="h-[120px] sm:h-[232px] lg:z-[1] lg:h-[400px]"
        />
      </div>

      {/*   What's Included In The Program */}
      <div className="pt-[30%] sm:pt-[10%]">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-6 sm:px-0">
          <h2 className="text-[24px] font-bold leading-[1.2] text-[#363840] sm:text-[40px] sm:leading-[60px] md:text-[56px]">
            What's Included In The Program
          </h2>
          <p className="lg:w-3/7 w-full text-sm text-[#7F8493] sm:w-10/12 sm:text-lg">
            Our comprehensive program combines medical expertise, nutritional
            science, and personalized support to ensure your success.
          </p>
        </div>

        <div className="mx-[5%] mt-[5%] flex flex-wrap overflow-clip rounded-[32px] sm:mx-[6%] sm:rounded-[64px]">
          <div className="flex w-full flex-col flex-wrap justify-between bg-[#f2f2f2] p-[6%] sm:w-1/2 sm:p-[5%]">
            {programData.map((data, index) => (
              <div
                key={data.id}
                className={`w-full px-[2%] py-[8%] sm:py-[10%] ${
                  index === 0 || index === 1 ? "border-b border-gray-300" : ""
                }`}
              >
                <div className="mb-4 flex items-center justify-center sm:mb-[5%] sm:items-start sm:justify-start">
                  <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[50%] bg-[rgba(0,0,0,0.05)] p-2 shadow-[0px_0px_1px_0px_rgba(0,0,0,0.1),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_4px_2px_0px_rgba(0,0,0,0.05),0px_7px_3px_0px_rgba(0,0,0,0.01),0px_10px_3px_0px_rgba(0,0,0,0)] sm:h-[60px] sm:w-[60px]">
                    <img
                      src={data.icon}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="pb-4 sm:pb-[5%] md:pb-0">
                  <h3 className="mb-2 text-xl font-bold text-[#252529] sm:mb-4 sm:text-2xl lg:text-[32px]">
                    {data.title}
                  </h3>
                  <p className="w-full text-sm text-[#7F8493] lg:text-base">
                    {data.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="h-[300px] w-full bg-[url(/images/included.webp)] bg-cover bg-center bg-no-repeat sm:h-auto sm:w-1/2"></div>
        </div>
      </div>

      {/* How It Works */}
      <div className="pt-[10%]">
        <header className="flex flex-col items-center gap-4 px-4 text-center sm:gap-6 sm:px-0">
          <h2 className="text-[28px] font-bold leading-[1.2] text-[#363840] sm:text-[32px] sm:leading-[60px] md:text-[56px]">
            How It Works
          </h2>
          <p className="w-10/12 text-base text-[#7F8493] sm:text-lg lg:w-1/2">
            Our primary goal is to empower you on your weight loss journey. We
            are dedicated to providing personalized, evidence-based solutions
            that promote sustainable health and well-being.
          </p>
        </header>

        <div className="relative mx-[5%] mt-[5%] flex flex-col flex-wrap overflow-clip rounded-[32px] bg-[#F5F5F5] pt-[4%] sm:mx-[6%] sm:rounded-[64px]">
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_100%)]"></div>
          <div className="absolute left-0 top-0 h-full w-full bg-[url(/images/achieve.webp)] bg-cover bg-center bg-no-repeat blur-[30px]"></div>
          <div className="relative z-10 mx-auto h-[250px] w-[94%] overflow-clip rounded-2xl border-[6px] border-solid border-transparent bg-[url(/images/achieve-inner.webp)] bg-cover bg-center bg-no-repeat [border-image:linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_100%)] sm:h-[400px] sm:rounded-3xl"></div>
          <div className="relative z-10 flex flex-wrap justify-between gap-4 p-[5%]">
            {achieveData.map((data) => (
              <div
                key={data.id}
                className="w-full rounded-2xl border-[1px] border-solid bg-[rgba(0,0,0,0.24)] px-4 py-6 text-center [border-image:linear-gradient(181.77deg,rgba(255,255,255,0.02)_1.47%,rgba(255,255,255,0.15)_98.49%)] sm:w-[31%] sm:rounded-3xl sm:px-10 sm:py-8"
              >
                <div className="mb-4 flex items-center justify-center sm:mb-[5%]">
                  <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[50%] border-[1.2px] border-solid bg-[rgba(0,0,0,0.22)] p-2 shadow-[0px_0px_1px_0px_rgba(0,0,0,0.1),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_4px_2px_0px_rgba(0,0,0,0.05),0px_7px_3px_0px_rgba(0,0,0,0.01),0px_10px_3px_0px_rgba(0,0,0,0)] [border-image:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.25)_100%)] sm:h-[60px] sm:w-[60px]">
                    <img
                      src={data.icon}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="pb-2 sm:pb-[5%] md:pb-0">
                  <p className="w-full text-sm font-medium text-white sm:text-base lg:text-lg">
                    {data.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
