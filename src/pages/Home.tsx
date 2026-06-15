import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Process } from "../components/Process";
import { WhatsappButton } from "../components/WhatsappButton";
import { WhyInspection } from "../components/WhyInspection";
import { About } from "../components/About";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyInspection />
      <Services />
      <Process />
      <About />
      <FinalCTA />
      <Contact />
      <Footer />
      <WhatsappButton />
    </>
  );
}