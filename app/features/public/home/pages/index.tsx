import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { FAQ } from "../components/faq";
import { Hero } from "../components/hero";
import { HowItWorks } from "../components/how-it-works";
import { Journey } from "../components/journey";
import { Program } from "../components/program";
import { Testimonials } from "../components/testimonials";
import { TransformationTop } from "../components/transformation-top";
import { WhyLoseWeight } from "../components/why-lose-weight";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Journey />
      <WhyLoseWeight />
      <Program />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <TransformationTop />
      <Footer />
    </>
  );
}
