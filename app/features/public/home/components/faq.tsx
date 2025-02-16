export const faqs = [
  {
    id: 1,
    question: "Who can use your weight loss services?",
    answer:
      "Our program combines medical supervision, personalized nutrition, and behavioral support in a comprehensive approach backed by clinical research.",
  },
  {
    id: 2,
    question: "How does telehealth for weight loss work?",
    answer:
      "Our program combines medical supervision, personalized nutrition, and behavioral support in a comprehensive approach backed by clinical research.",
  },
  {
    id: 3,
    question: "Can I get weight loss medication through your service?",
    answer:
      "Our program combines medical supervision, personalized nutrition, and behavioral support in a comprehensive approach backed by clinical research.",
  },
  {
    id: 4,
    question: "How soon can I expect to see results?",
    answer:
      "Our program combines medical supervision, personalized nutrition, and behavioral support in a comprehensive approach backed by clinical research.",
  },
  {
    id: 5,
    question: "How is this different from other weight loss programs?",
    answer:
      "Our program combines medical supervision, personalized nutrition, and behavioral support in a comprehensive approach backed by clinical research.",
  },
  {
    id: 6,
    question: "Are your weight loss treatments safe?",
    answer:
      "Our program combines medical supervision, personalized nutrition, and behavioral support in a comprehensive approach backed by clinical research.",
  },
];

export function FAQ() {
  return (
    <section className="px-[5%] pb-[5%] pt-[5%] lg:px-[10%]">
      <div className="relative flex flex-col items-center justify-center gap-6 py-[3%] text-center">
        <h2 className="text-[32px] font-bold leading-9 text-[#252529] sm:text-[40px] sm:leading-[56px] md:w-2/3 lg:w-1/2">
          Common Questions
        </h2>
        <p className="w-10/12 text-sm text-[#7F8493] sm:text-lg md:w-[55%]">
          Get answers to frequently asked questions about our program
        </p>
      </div>

      <div className="mt-[1%] flex flex-wrap justify-between">
        {faqs.map((data) => (
          <div
            className="proxymed_faq font-paragraph mb-[5%] w-full rounded-xl border-[1px] border-solid border-[rgba(0,0,0,0.1)] px-[2%] py-[3%] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.1),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_4px_2px_0px_rgba(0,0,0,0.05),0px_7px_3px_0px_rgba(0,0,0,0.01),0px_10px_3px_0px_rgba(0,0,0,0)] sm:mb-[2%]"
            key={data.id}
          >
            <details className="">
              <summary className="relative flex cursor-pointer items-center gap-4 after:absolute after:right-[1%] after:top-[60%] after:-translate-y-1/2 after:text-2xl after:transition-transform after:delay-0 after:duration-500 after:ease-in-out">
                <h3 className="w-9/12 font-bold text-[#4F4D55] sm:text-[28px] md:w-[80%]">
                  {data.question}
                </h3>
              </summary>
            </details>
            <div className="one">
              <p className="w-11/12 text-xs font-medium text-[#7F7D83] sm:w-10/12 sm:text-lg">
                {data.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
