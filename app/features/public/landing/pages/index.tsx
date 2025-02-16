import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle,
  Code,
  GitBranch,
  MoveRight,
  Play,
  Rocket,
  Settings,
  Shield,
} from "lucide-react";

import { Button } from "~/components/ui/button";

import Hero from "../components/hero";
import { TestimonialsSection } from "../components/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai",
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech",
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive.",
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      <section className="py-16 text-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center text-3xl font-bold text-[#363840]">
              Your path to healthy <br /> weight loss
            </h2>
            <p className="mb-[32px] mt-6 text-center text-sm text-[#7F8493]">
              Our board certified professionals are dedicated to providing the
              best medical care.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                title: "Initial Consultation",
                description:
                  "Get personalized weight loss treatment after your first consultation.",
              },
              {
                title: "Nutrition Planning",
                description:
                  "Improve your diet with our customized healthy eating plans",
              },
              {
                title: "Active Support",
                description:
                  "We'll check in regularly to monitor your progress",
              },
              {
                title: "Maintenance",
                description:
                  "We provide lasting support to help stay on track.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-sm border border-[#ECECED]">
                  <span className="tex-[#4272DD] font-bold">{`0${index + 1}.`}</span>
                </div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-[#707070]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container relative inset-0 z-0 mx-auto mt-[50px]">
          <img
            src="/images/weight-loss.png"
            alt="weight loss"
            className="h-[737px] w-full rounded-[80px] object-cover"
          />
          <div className="absolute right-8 top-6 flex flex-col gap-4 text-white">
            <div className="flex h-[146px] w-[213px] flex-col items-center justify-center rounded-[16px] border-[2px] bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(255,255,255,0.06)_100%)] shadow-[0px_1px_2px_0px_#0000000D,0px_4px_4px_0px_#0000000A,0px_8px_5px_0px_#00000008,0px_14px_6px_0px_#00000003,0px_22px_6px_0px_#00000000]">
              <h1 className="text-[40px] font-bold">94%</h1>
              <p>Success Rate</p>
            </div>

            <div className="flex h-[146px] w-[213px] flex-col items-center justify-center rounded-[16px] border-[2px] bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(255,255,255,0.06)_100%)] shadow-[0px_1px_2px_0px_#0000000D,0px_4px_4px_0px_#0000000A,0px_8px_5px_0px_#00000008,0px_14px_6px_0px_#00000003,0px_22px_6px_0px_#00000000]">
              <h1 className="text-[40px] font-bold">15k+</h1>
              <p>Patients Helped</p>
            </div>

            <div className="flex h-[146px] w-[213px] flex-col items-center justify-center rounded-[16px] border-[2px] bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(255,255,255,0.06)_100%)] shadow-[0px_1px_2px_0px_#0000000D,0px_4px_4px_0px_#0000000A,0px_8px_5px_0px_#00000008,0px_14px_6px_0px_#00000003,0px_22px_6px_0px_#00000000]">
              <h1 className="text-[40px] font-bold">87%</h1>
              <p>Maintain Weight Loss</p>
            </div>

            <div className="flex h-[146px] w-[213px] flex-col items-center justify-center rounded-[16px] border-[2px] bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(255,255,255,0.06)_100%)] shadow-[0px_1px_2px_0px_#0000000D,0px_4px_4px_0px_#0000000A,0px_8px_5px_0px_#00000008,0px_14px_6px_0px_#00000003,0px_22px_6px_0px_#00000000]">
              <h1 className="text-[40px] font-bold">12+</h1>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center text-3xl font-bold text-[#363840]">
              Why lose weight
            </h2>
            <p className="mt-6 text-center text-sm text-[#7F8493]">
              OEvidence-based approach combining medical expertise with proven
              weight loss strategies
            </p>
          </div>
        </div>

        <div className="container mx-auto flex items-center mt-4 justify-between gap-24 px-4">
          <div className="flex flex-col items-end justify-end  w-full">
            <div className="border border-l-[8px] border-l-blue-700 px-4 py-2">
              <p>Look and feel good in anything.</p>
            </div>
            <div className="border border-l-[8px] border-l-blue-700 px-4 py-2 mt-2 rotate-[3deg] ml-10">
              <p>Boost self esteem and confidence</p>
            </div>
          </div>
          <Button>Get started</Button>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="border border-r-[8px] border-r-blue-700 px-4 py-2 -mr-20">
              <p>Look and feel good in anything.</p>
            </div>
            <div className="border border-r-[8px] border-r-blue-700 px-4 py-2 mt-2 rotate-[-3deg]">
              <p>Boost self esteem and confidence</p>
            </div>
          </div>
        </div>

        <div className="relative inset-0 z-0 mx-auto mt-[50px]">
          <img
            src="/images/why-lose-weight.png"
            alt="why weight loss"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <TestimonialsSection
        title="Testimonials"
        description="Discover how our program has transformed the lives of countless individuals. Read inspiring testimonials from our clients who have achieved their weight loss goals and improved their health."
        testimonials={testimonials}
      />
    </div>
  );
};

export default LandingPage;
