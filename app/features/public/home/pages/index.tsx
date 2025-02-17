import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { FAQ } from "../components/faq";
import { Hero } from "../components/hero";
import { Journey } from "../components/journey";
import { Testimonials } from "../components/testimonials";
import { TransformationTop } from "../components/transformation-top";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Journey />
      <Testimonials />
      <FAQ />
      <TransformationTop />
      <Footer />
    </>
  );
}
