import React from "react";
import Brasil from "../style/assets/images/sobre/MapaBrasil.png";
import Awards from "../style/assets/images/sobre/AwardsEDAN.png";
import SectionHeader from "./SectionComponents/SectionHeader";
import SectionContent from "./SectionComponents/SectionContent";
import SectionTextAndImages from "./SectionComponents/SectionTextAndImages";
import MotionDivLeftToRight from "./SectionComponents/MotionDivLeftToRight";
import MotionDivRightToLeft from "./SectionComponents/MotionDivRightToLeft";

export default function AboutSection() {
  return (
    <div className="content bg-quinary" id="about">
      <SectionHeader
        sectionHeaderTitleFirst="Sobre a"
        sectionHeaderTitleSecond="Edan Contabilidade"
        sectionHeaderDescription="Conheça um pouco da nossa história."
      />
      <div className="flex flex-wrap items-start justify-around w-full h-auto">
        <div className="grid grid-cols-1 tablet2:gap-12 md:grid-cols-2">
          <SectionContent>
            <MotionDivLeftToRight>
              <SectionTextAndImages
                sectionTextAndImagesTitleFirst="O escritório mais premiado"
                sectionTextAndImagesDescription="Nesses 40 anos de existência a Edan Contabilidade tem primado pela
            excelência no atendimento, controle e eficácia nas obrigações civis
            de pessoas físicas e jurídicas, sempre se destacando e sendo contemplada
            com várias premiações e destaques."
                sectionTextAndImagesSubscription={
                  <>
                    2024 - Destaque Empresarial - Melhor do Ano.
                    <br />
                    2019 a 2021 - Destaque Regional.
                    <br />
                    2013 a 2018 - Prêmio Empresarial.
                    <br />
                    2012 - Prêmio Empresarial Qualidade Profissional da Bahia.
                  </>
                }
              />
            </MotionDivLeftToRight>
          </SectionContent>
          <SectionContent>
            <MotionDivRightToLeft>
              <SectionTextAndImages
                sectionTextAndImagesImg={Awards}
                imgDescription="Premiações EDAN"
                applyBorder={true}
              />
            </MotionDivRightToLeft>
          </SectionContent>

          <MotionDivLeftToRight>
            <div className="flex flex-wrap justify-between w-full h-auto">
              <h1 className="my-4 mt-12 text-xl font-semibold tablet2:mt-0 font-poppins text-secondary">
                A Edan atende em todo brasil?
              </h1>
              <div className="flex flex-col tablet2:grid tablet2:grid-cols-2">
                <p className="text-sm font-poppins text-quaternary">
                  A Edan atende todas as cidades do Brasil, funcionando também
                  de forma totalmente digital para atender as necessidades de
                  clientes distantes.
                </p>
                <img
                  src={Brasil}
                  alt="Mapa do Brasil"
                  className="my-auto phone1:w-[50%] phone1:mx-auto tablet2:w-full phone1:mt-6"
                />
              </div>
            </div>
          </MotionDivLeftToRight>
          <MotionDivRightToLeft>
            <div className="flex flex-wrap justify-between w-full h-auto">
              <h1 className="my-4 mt-12 text-xl font-semibold tablet2:mt-0 font-poppins text-secondary">
                Onde nos encontrar?
              </h1>
              <div className="w-full border-b-8 border-primary">
                <iframe
                  className="w-full"
                  title="GoogleMaps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.0757758120135!2d-39.03699242413275!3d-14.821004699742826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7390a5df4a80977%3A0x283de9a3dd4420ba!2sEdan%20Contabilidade!5e0!3m2!1spt-BR!2sbr!4v1706652415211!5m2!1spt-BR!2sbr"
                  height="300"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </MotionDivRightToLeft>
        </div>
      </div>
    </div>
  );
}
