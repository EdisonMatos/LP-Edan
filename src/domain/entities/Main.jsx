import ServicesSection from "../../components/ServicesSection";
import DifferentialSection from "../../components/DifferentialSection";
import AppSection from "../../components/AppSection";
import LinksSection from "../../components/LinksSection";
import AboutSection from "../../components/AboutSection";
import CertificatesSection from "../../components/CertificatesSection";
import WppSection from "../../components/WppSection";
import BackToTopButton from "../../components/BackToTopButton";
import FloatingWhatsappButton from "../../components/FloatingWhatsappButton";
import ResultsSection from "../../components/ResultsSection";
// import ParallaxSectionWithContent from "../../components/SectionComponents/ParallaxSectionWithContent";
import MarginBetweenSection from "../../components/SectionComponents/MarginBetweenSection";
import MarginBetweenSectionColored from "../../components/SectionComponents/MarginBetweenSectionColored";

function Main() {
  return (
    <div className="mainBody">
      <MarginBetweenSection />
      <ServicesSection />
      <MarginBetweenSection />
      <ResultsSection />
      <MarginBetweenSection />
      <DifferentialSection />
      <MarginBetweenSection />
      <AppSection />
      <MarginBetweenSection />
      <LinksSection />
      <MarginBetweenSection />
      <CertificatesSection />
      <WppSection />
      <MarginBetweenSectionColored />
      <AboutSection />
      <MarginBetweenSectionColored />
      <BackToTopButton />
      <FloatingWhatsappButton />
    </div>
  );
}

export default Main;
