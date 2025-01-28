import imgOfficeGreenBackground from "../style/assets/images/paralaxe/paralaxeBg1.jpg";
import imgIcon from "../style/assets/icons/footer/calendarIcon.png";
import ResultsCard from "../components/SectionComponents/ResultsCard";
import AnimatedCounter from "./SectionComponents/AnimatedCounter";

export default function ResultsSection() {
  return (
    <div
      className="bg-center bg-cover content"
      style={{
        backgroundImage: `url(${imgOfficeGreenBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full py-[5%]">
        <h1 className="flex flex-col items-center tablet1:flex-row tablet1:justify-between tablet1:flex-wrap desktop1:flex-nowrap">
          <ResultsCard
            img={imgIcon}
            number={<AnimatedCounter endValue={40} />}
            text="Anos de serviços prestados."
          />
          <ResultsCard
            img={imgIcon}
            number={<AnimatedCounter endValue={85} />}
            text="Empresas abertas anualmente."
          />
          <ResultsCard
            img={imgIcon}
            number={<AnimatedCounter endValue={650} />}
            text="Impostos de Renda feitos anualmente."
          />
          <ResultsCard
            img={imgIcon}
            number={<AnimatedCounter endValue={208} />}
            text="Empresas atendidas mensalmente."
          />
        </h1>
      </div>
    </div>
  );
}
