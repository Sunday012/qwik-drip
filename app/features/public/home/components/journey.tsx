import { programTimelineData, timelineData } from "../../data/timeline";

export function Journey() {
  return (
    <div className="py-[80px]">
      <div className="mx-auto w-full px-[5%] text-center lg:w-[576px] lg:px-[1%]">
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
    </div>
  );
}
