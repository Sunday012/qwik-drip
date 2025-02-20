import { achieveData } from "../../data/achieve";

export function HowItWorks() {
  return (
    <div className="py-[10%]">
      <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-6 sm:px-0">
        <h2 className="text-[28px] font-bold leading-[1.2] text-[#363840] sm:text-[32px] sm:leading-[60px] md:text-[56px]">
          How It Works
        </h2>
        <p className="w-10/12 text-base text-[#7F8493] sm:text-lg lg:w-1/2">
          Our primary goal is to empower you on your weight loss journey. We are
          dedicated to providing personalized, evidence-based solutions that
          promote sustainable health and well-being.
        </p>
      </div>

      <div className="relative mx-[5%] mt-[5%] flex flex-col flex-wrap overflow-clip rounded-[32px] bg-[#F5F5F5] pt-[4%] sm:mx-[6%] sm:rounded-[64px]">
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_100%)]"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-[url(/images/achieve.webp)] bg-cover bg-center bg-no-repeat blur-[30px]"></div>
        <div className="relative z-10 mx-auto h-[250px] w-[94%] overflow-clip rounded-2xl border-[6px] border-solid border-transparent bg-[url(/images/achieve-inner.webp)] bg-cover bg-center bg-no-repeat [border-image:linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_100%)] sm:h-[400px] sm:rounded-3xl"></div>
        <div className="relative z-10 flex flex-wrap justify-between gap-4 p-[5%]">
          {achieveData.map((data) => (
            <div
              key={data.id}
              className="w-full rounded-2xl border-[1px] border-solid bg-[rgba(0,0,0,0.24)] px-4 py-6 text-center [border-image:linear-gradient(181.77deg,rgba(255,255,255,0.02)_1.47%,rgba(255,255,255,0.15)_98.49%)] sm:w-[31%] sm:rounded-3xl sm:px-5 sm:py-4 md:px-10 md:py-8"
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
  );
}
