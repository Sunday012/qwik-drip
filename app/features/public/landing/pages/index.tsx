import { WaitlistModal } from "~/components/waitlist-modal/waitlist-modal";
import { Footer } from "../../components/layouts/footer";
import { Header } from "../../components/layouts/header";

import { Hero } from "../components/hero";
import { SlideSection } from "../components/slide-content-section";


export default function HomePage() {
  return (
    <>
      <WaitlistModal />
      <Header />
      <Hero />
      <SlideSection />
      <Footer />
    </>
  );
}
