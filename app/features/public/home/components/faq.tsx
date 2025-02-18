import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "~/components/ui/accordion";

export const faqs = [
  {
    id: "1",
    title: "Who can use your weight loss services?",
    content:
      "Our program combines medical supervision, personalized nutrition, and behavioral support in a comprehensive approach backed by clinical research.",
  },
  {
    id: "2",
    title: "How does telehealth for weight loss work?",
    content:
      "Our program combines medical supervision, personalized nutrition, and behavioral support in a comprehensive approach backed by clinical research.",
  },
  {
    id: "3",
    title: "Can I get weight loss medication through your service?",
    content:
      "Our program combines medical supervision, personalized nutrition, and behavioral support in a comprehensive approach backed by clinical research.",
  },
  {
    id: "4",
    title: "How soon can I expect to see results?",
    content:
      "Our program combines medical supervision, personalized nutrition, and behavioral support in a comprehensive approach backed by clinical research.",
  },
  {
    id: "5",
    title: "How is this different from other weight loss programs?",
    content:
      "Our program combines medical supervision, personalized nutrition, and behavioral support in a comprehensive approach backed by clinical research.",
  },
  {
    id: "6",
    title: "Are your weight loss treatments safe?",
    content:
      "Our program combines medical supervision, personalized nutrition, and behavioral support in a comprehensive approach backed by clinical research.",
  },
];

export function FAQ() {
  return (
    <section className="px-[5%] pb-[8%] pt-[8%] sm:pb-[5%] sm:pt-[5%] lg:px-[10%]">
      <div className="relative flex flex-col items-center justify-center gap-4 py-[3%] text-center sm:gap-6">
        <h2 className="text-[28px] font-bold leading-[1.2] text-[#252529] sm:text-[40px] sm:leading-[56px] md:w-2/3 lg:w-1/2">
          Common Questions
        </h2>
        <p className="w-full px-4 text-sm text-[#7F8493] sm:w-10/12 sm:px-0 sm:text-lg md:w-[55%]">
          Get answers to frequently asked questions about our program
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="mb-4 w-full rounded-xl border-[1px] border-solid border-[rgba(0,0,0,0.1)] px-4 py-4 font-paragraph shadow-[0px_0px_1px_0px_rgba(0,0,0,0.1),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_4px_2px_0px_rgba(0,0,0,0.05),0px_7px_3px_0px_rgba(0,0,0,0.01),0px_10px_3px_0px_rgba(0,0,0,0)] sm:mb-[2%] sm:px-[2%] sm:py-[3%]"
          >
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] text-base font-bold leading-6 text-[#4F4D55] transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                {item.title}

                <Plus
                  size={40}
                  strokeWidth={1.5}
                  className="shrink-0 rounded-[555px] bg-[#F2F2F2] p-2 opacity-60 transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="pb-2 text-sm font-medium text-[#7F7D83] sm:text-base md:text-lg">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
