import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Metrics } from "./components/Metrics";
import { Services } from "./components/Services";
import { CaseStudies } from "./components/CaseStudies";
import { Process } from "./components/Process";
import { Expertise } from "./components/Expertise";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";
import { AboutPage } from "./pages/AboutPage";
import { ProcessPage } from "./pages/ProcessPage";
import { CaseStudiesPage } from "./pages/CaseStudiesPage";

function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <Services />
      <CaseStudies />
      <Process />
      <Expertise />
      <CtaSection />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F8F9FA] text-gray-800 antialiased flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
