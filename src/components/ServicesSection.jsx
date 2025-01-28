import SectionHeader from "../components/SectionComponents/SectionHeader";
import SectionContent from "./SectionComponents/SectionContent";
import StandardServiceCard from "./SectionComponents/StandardServiceCard";

import imgAbertura from "../style/assets/icons/servicos/abertura.png";
import imgBaixa from "../style/assets/icons/servicos/baixaDeEmpresa.png";
import imgDecore from "../style/assets/icons/servicos/decore.png";
import imgImpostoRenda from "../style/assets/icons/servicos/impostoDeRenda.png";
import imgITR from "../style/assets/icons/servicos/itr.png";

export default function ServicesSection() {
  return (
    <div className="content" id="services">
      <SectionHeader
        sectionHeaderTitleFirst="Nossos Serviços"
        sectionHeaderDescription="Explore o potencial do seu negócio com nossos serviços contábeis especializados."
      />
      <SectionContent>
        {[
          <StandardServiceCard
            key={1}
            icon={imgAbertura}
            iconAlt="Edan Abertura de Empresas Contabilidade Ilhéus"
            title="Abertura de Empresas"
            description="Descomplique o processo de abertura da sua empresa!"
          />,
          <StandardServiceCard
            key={2}
            icon={imgBaixa}
            iconAlt="Edan Baixa de Empresas Contabilidade Ilhéus"
            title="Baixa de Empresas"
            description="Conte conosco para fechar seu negócio com excelência!"
          />,
          <StandardServiceCard
            key={3}
            icon={imgDecore}
            iconAlt="Edan DECORE Contabilidade Ilhéus"
            title="DECORE"
            description="Emitimos comprovação de renda para autônomos e empresários"
          />,
          <StandardServiceCard
            key={4}
            icon={imgImpostoRenda}
            iconAlt="Edan Imposto de Renda Contabilidade Ilhéus"
            title="Imposto de Renda"
            description="Faça sua declaração de Imposto de Renda conosco."
          />,
          <StandardServiceCard
            key={5}
            icon={imgITR}
            iconAlt="Edan Declaração de ITR Contabilidade Ilhéus"
            title="Declaração de ITR"
            description="Sua declaração de ITR de forma simplificada."
          />,
        ]}
      </SectionContent>
    </div>
  );
}
