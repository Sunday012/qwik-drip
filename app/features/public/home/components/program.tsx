import { programData } from "../../data/program";

export function Program() {
  return (
    <div className="mt-[300px] sm:mt-[0%] sm:py-[80px]">
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
  );
}
