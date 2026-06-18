import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Metrics } from "./components/Metrics";
import { Services } from "./components/Services";
import { CaseStudies } from "./components/CaseStudies";
import { Process } from "./components/Process";
import { Expertise } from "./components/Expertise";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-gray-800 antialiased flex flex-col">
      <Navbar />
      <Hero />
      <Metrics />
      <Services />
      <CaseStudies />
      <Process />
      <Expertise />
      <CtaSection />
      <Footer />
    </div>
  );
}
