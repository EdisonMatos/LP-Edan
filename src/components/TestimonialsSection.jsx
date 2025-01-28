import React, { useState, useEffect, useRef } from "react";
import imgOfficeGreenBackground from "../style/assets/images/BackgroundImage.png";
import avatar from "../style/assets/images/testemunhos/avatar.png";
import avatar2 from "../style/assets/images/testemunhos/avatar2.png";
import avatar3 from "../style/assets/images/testemunhos/avatar3.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const depoimentos = [
  {
    texto:
      "A Edan Contabilidade é demais! Eles cuidam da minha empresa com maestria total. Estou super satisfeito e recomendo muito!",
    nome: "Ivan Coelho",
    empresa: "Auto Posto Pontal",
    imagem: avatar,
  },
  {
    texto:
      "Estou extremamente satisfeita com os serviços da Edan Contabilidade. Profissionalismo, dedicação e competência são marcas registradas desta empresa.",
    nome: "Maria Silva",
    empresa: "Loja Express",
    imagem: avatar2,
  },
  {
    texto:
      "A equipe da Edan Contabilidade tem sido fundamental para o sucesso do meu negócio. Recomendo a todos que buscam serviços contábeis de qualidade.",
    nome: "João Santos",
    empresa: "Médico Autônomo",
    imagem: avatar3,
  },
];

export default function TestimonialSection() {
  const [currentDepoimentoIndex, setCurrentDepoimentoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentDepoimentoIndex(
          (prevIndex) => (prevIndex + 1) % depoimentos.length
        );
        setIsTransitioning(false);
      });
    }, 7000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handlePrevClick = () => {
    clearInterval(intervalRef.current);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentDepoimentoIndex(
        (prevIndex) => (prevIndex - 1 + depoimentos.length) % depoimentos.length
      );
      setIsTransitioning(false);
      intervalRef.current = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentDepoimentoIndex(
            (prevIndex) => (prevIndex + 1) % depoimentos.length
          );
          setIsTransitioning(false);
        });
      }, 7000);
    });
  };

  const handleNextClick = () => {
    clearInterval(intervalRef.current);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentDepoimentoIndex(
        (prevIndex) => (prevIndex + 1) % depoimentos.length
      );
      setIsTransitioning(false);
      intervalRef.current = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentDepoimentoIndex(
            (prevIndex) => (prevIndex + 1) % depoimentos.length
          );
          setIsTransitioning(false);
        });
      }, 7000);
    });
  };

  return (
    <div
      className="mt-6 overflow-y-hidden bg-center bg-cover tablet2:mt-8 content"
      style={{
        backgroundImage: `url(${imgOfficeGreenBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        overflowX: "hidden",
      }}
    >
      <div className="flex flex-col items-center justify-center w-full font-poppins text-paragraph3 phone3:text-paragraph4 tablet1:text-paragraph5">
        <div className="flex flex-col phone3:w-[80%] my-[10%] tablet2:my-[5%] text-center items-center text-quinary">
          <div
            className={`flex-grow ${
              isTransitioning ? "slideOutToLeft" : "slideInFromRight"
            }`}
          >
            <p>"{depoimentos[currentDepoimentoIndex].texto}"</p>
            <img
              alt="Foto de perfil"
              className="rounded-full w-[15%] mx-auto my-[5%] phone3:w-[20%] phone3:my-[7%] tablet1:w-[10%] tablet1:my-[3%]"
              src={depoimentos[currentDepoimentoIndex].imagem}
            />
            <h1 className="font-medium text-paragraph4 phone3:text-paragraph5">
              {depoimentos[currentDepoimentoIndex].nome}
            </h1>
            <p className="text-paragraph2 phone3:text-paragraph3">
              {depoimentos[currentDepoimentoIndex].empresa}
            </p>
          </div>
          <div className="flex flex-grow mt-6 transform text-quinary">
            <button className="mx-4" onClick={handlePrevClick}>
              <ChevronLeft />
            </button>
            <button className="mx-4" onClick={handleNextClick}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
