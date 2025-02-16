import science1 from "../../../../assets/img/home/science1.png";
import science2 from "../../../../assets/img/home/science2.png";
import science3 from "../../../../assets/img/home/science3.png";
import science4 from "../../../../assets/img/home/science4.png";

export const scienceData = [
  {
    id: 1,
    icon: science1,
    title: "Metabolic Assessment",
    text: "We analyze your unique metabolic profile to understand how your body processes nutrients and stores energy.",
  },
  {
    id: 2,
    icon: science2,
    title: "Hormonal Balance",
    text: "Our endocrinological approach ensures optimal hormone levels for effective weight management",
  },
  {
    id: 3,
    icon: science3,
    title: "Nutritional Science",
    text: "Evidence-based dietary protocols tailored to your genetic makeup and lifestyle requirements.",
  },
  {
    id: 4,
    icon: science4,
    title: "Behavioral Psychology",
    text: "Integration of cognitive behavioral therapy techniques to address emotional eating and establish healthy habits.",
  },
];

export function Success() {
  return (
    <div>
      {/* <div className='mx-[5%] lg:mx-[10%] bg-[url(/images/success_img.webp)] bg-cover bg-no-repeat rounded-[56px]'>
            <div className='absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_39.79%,rgba(0,0,0,0.52)_98.58%)]'></div>
            <div className='flex flex-col flex-wrap justify-between gap-5 items-end p-[3.5%]'>
                {
                    topData.map((data)=> (
                        <div className='w-[48%] md:w-[23%] rounded-2xl text-center py-[10%] sm:py-[5%] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_4px_4px_0px_rgba(0,0,0,0.04),0px_8px_5px_0px_rgba(0,0,0,0.03),0px_14px_6px_0px_rgba(0,0,0,0.01),0px_22px_6px_0px_rgba(0,0,0,0)] mb-6 md:mb-0 bg-[rgba(0,0,0,0.51)] text-white border-2 border-solid border-transparent [border-image:linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(255,255,255,0.06)_100%)]' key={data.id}>
                            <h3 className="text-xl sm:text-[40px]">{data.title}</h3>
                            <p className='text-xs sm:text-sm lg:text-base'>{data.text}</p>
                        </div>
                    ))
                }
            </div>
        
        </div> */}

      {/* <div className='mx-[5%] lg:mx-[10%] bg-[url(/images/success_img.webp)] bg-cover bg-no-repeat rounded-[56px]'>
            <div className='absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_39.79%,rgba(0,0,0,0.52)_98.58%)]'></div>
            <div className='flex flex-col flex-wrap justify-between gap-5 items-end p-[3.5%]'>
                {
                    topData.map((data)=> (
                        <div className='w-[48%] md:w-[23%] rounded-2xl text-center py-[10%] sm:py-[5%] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_4px_4px_0px_rgba(0,0,0,0.04),0px_8px_5px_0px_rgba(0,0,0,0.03),0px_14px_6px_0px_rgba(0,0,0,0.01),0px_22px_6px_0px_rgba(0,0,0,0)] mb-6 md:mb-0 bg-[rgba(0,0,0,0.51)] text-white border-2 border-solid border-transparent [border-image:linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(255,255,255,0.06)_100%)]' key={data.id}>
                            <h3 className="text-xl sm:text-[40px]">{data.title}</h3>
                            <p className='text-xs sm:text-sm lg:text-base'>{data.text}</p>
                        </div>
                    ))
                }
            </div>
    </div> */}
    </div>
  );
}
