import { Link } from "@tanstack/react-router";

import { Marquee } from "../../components/marquee";
import { achieveData } from "../../data/achieve";
import { marqueeImages } from "../../data/marquee";
import { programData } from "../../data/program";
import { programTimelineData, timelineData } from "../../data/timeline";

export function Journey() {
  return (
    <div className="pb-[5%] pt-[10%]">
      <header className="mx-auto w-1/2 px-[5%] text-center lg:px-[6%]">
        <h2 className="mb-4 text-[32px] font-bold text-[#363840] sm:text-[56px] sm:leading-[60px]">
          Your Path To Healthy Weight Loss
        </h2>
        <p className="text-sm text-[#7F8493] sm:text-lg">
          Our board certified professionals are dedicated to providing the best
          medical care.
        </p>
      </header>

      <div className="relative flex flex-wrap justify-between px-[5%] pt-[2.5%] lg:px-[6%]">
        <div className="absolute left-[16.5%] z-0 hidden h-[4px] w-[67%] bg-gray-200 lg:top-[37%] lg:block xl:top-[37%]"></div>
        {programTimelineData.map((data) => (
          <div
            className="relative z-10 w-full rounded-2xl py-[5%] text-center sm:w-1/2 lg:w-1/4"
            key={data.id}
          >
            <div className="mx-auto mb-6 flex h-[100px] w-[100px] items-center justify-center rounded-2xl border-[1px] border-solid border-[#ECECED] bg-white">
              <h3 className="text-[40px] font-semibold text-[#4272DD]">
                {data.number}
              </h3>
            </div>
            <div className="flex flex-col items-center sm:block">
              <h4 className="mb-4 text-center text-[28px] font-bold leading-[30px] text-[#363840]">
                {data.title}
              </h4>
              <p className="w-11/12 text-center text-[#7F8493]">{data.text}</p>
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

      <div className="relative mx-[5%] rounded-[56px] bg-[url(/images/success_img.webp)] bg-cover bg-no-repeat lg:mx-[6%]">
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
          <h2 className="mb-[2%] text-[56px] font-bold leading-[60px] text-[#363840]">
            Why Lose Weight
          </h2>
          <p className="lg:w-4/10 mb-[2.5%] w-10/12 text-lg text-[#7F8493]">
            Evidence-based approach combining medical expertise with proven
            weight loss strategies
          </p>
          <Link
            to="/get-started"
            className="inline-block rounded-lg bg-[#4272DD] px-6 py-4 text-center text-lg font-bold text-white"
          >
            GET STARTED
          </Link>
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
        <Marquee images={marqueeImages} className="z-[1]" />
      </div>

      <div className="pt-[10%]">
        <header className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-[32px] font-bold leading-[60px] text-[#363840] sm:text-[56px]">
            What’s Included In The Program
          </h2>
          <p className="lg:w-3/7 w-10/12 text-lg text-[#7F8493]">
            Our comprehensive program combines medical expertise, nutritional
            science, and personalized support to ensure your success.
          </p>
        </header>

        <div className="mx-[6%] mt-[5%] flex flex-wrap overflow-clip rounded-[64px]">
          <div className="flex w-1/2 flex-col flex-wrap justify-between bg-[#f2f2f2] p-[5%]">
            {programData.map((data, index) => (
              <div
                key={data.id}
                className={`w-full px-[2%] py-[10%] ${
                  index === 0 || index === 1 ? "border-b border-gray-300" : ""
                }`}
              >
                <div className="mb-[5%]">
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[50%] bg-[rgba(0,0,0,0.05)] p-2 shadow-[0px_0px_1px_0px_rgba(0,0,0,0.1),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_4px_2px_0px_rgba(0,0,0,0.05),0px_7px_3px_0px_rgba(0,0,0,0.01),0px_10px_3px_0px_rgba(0,0,0,0)]">
                    <img src={data.icon} />
                  </div>
                </div>
                <div className="pb-[5%] md:pb-0">
                  <h3 className="mb-4 text-2xl font-bold text-[#252529] lg:text-[32px]">
                    {data.title}
                  </h3>
                  <p className="w-10/12 text-sm text-[#7F8493] lg:w-full lg:text-base">
                    {data.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/2 bg-[url(/images/included.webp)] bg-cover bg-center bg-no-repeat"></div>
        </div>
      </div>

      <div className="pt-[10%]">
        <header className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-[32px] font-bold leading-[60px] text-[#363840] sm:text-[56px]">
            How It Works
          </h2>
          <p className="w-10/12 text-lg text-[#7F8493] lg:w-1/2">
            Our primary goal is to empower you on your weight loss journey. We
            are dedicated to providing personalized, evidence-based solutions
            that promote sustainable health and well-being. 
          </p>
        </header>

        <div className="relative mx-[6%] mt-[5%] flex flex-col flex-wrap overflow-clip rounded-[64px] bg-[#F5F5F5] pt-[4%]">
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_100%)]"></div>
          <div className="absolute left-0 top-0 h-full w-full bg-[url(/images/achieve.webp)] bg-cover bg-center bg-no-repeat blur-[30px]"></div>
          <div className="relative z-10 mx-auto h-[400px] w-[94%] overflow-clip rounded-3xl border-[6px] border-solid border-transparent bg-[url(/images/achieve-inner.webp)] bg-cover bg-center bg-no-repeat [border-image:linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_100%)]"></div>
          <div className="relative z-10 flex flex-wrap justify-between p-[5%]">
            {achieveData.map((data) => (
              <div
                key={data.id}
                className="w-[31%] rounded-3xl border-[1px] border-solid bg-[rgba(0,0,0,0.24)] px-10 py-8 text-center [border-image:linear-gradient(181.77deg,rgba(255,255,255,0.02)_1.47%,rgba(255,255,255,0.15)_98.49%)]"
              >
                <div className="mb-[5%] flex items-center justify-center">
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[50%] border-[1.2px] border-solid bg-[rgba(0,0,0,0.22)] p-2 shadow-[0px_0px_1px_0px_rgba(0,0,0,0.1),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_4px_2px_0px_rgba(0,0,0,0.05),0px_7px_3px_0px_rgba(0,0,0,0.01),0px_10px_3px_0px_rgba(0,0,0,0)] [border-image:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.25)_100%)]">
                    <img src={data.icon} />
                  </div>
                </div>
                <div className="pb-[5%] md:pb-0">
                  <p className="w-10/12 text-sm font-medium text-white lg:w-full lg:text-lg">
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
