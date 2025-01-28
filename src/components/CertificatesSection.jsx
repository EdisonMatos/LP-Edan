import SectionContent from "./SectionComponents/SectionContent";
import SectionHeader from "./SectionComponents/SectionHeader";
import ImgAndTitleCard from "./SectionComponents/ImgAndTitleCard";
import imgReceitaFederal from "../style/assets/images/certidoes/receitaFederal.png";
import imgTrabalhista from "../style/assets/images/certidoes/certidaoTrabalhista.png";
import imgFGTS from "../style/assets/images/certidoes/fgts.png";
import imgSefaz from "../style/assets/images/certidoes/sefaz.png";
import imgPrefeituraIlheus from "../style/assets/images/certidoes/prefeituraIlheus.png";
import imgFalencia from "../style/assets/images/certidoes/certidaoFalencia.png";
import imgSefazRJ from "../style/assets/images/certidoes/sefazRJ.png";
import imgSefazSP from "../style/assets/images/certidoes/sefazSP.png";

export default function CertificatesSection() {
  return (
    <div className="content" id="certificates">
      <SectionHeader
        sectionHeaderTitleFirst="Todas as certidões que"
        sectionHeaderTitleSecond="sua empresa precisa"
        sectionHeaderDescription="A Edan Contabilidade simplifica seu dia a dia com links diretos para as principais certidões."
      />
      <SectionContent>
        {[
          <ImgAndTitleCard
            key={1}
            img={imgReceitaFederal}
            imgDescription="Receita Federal Contabilidade Ilhéus"
            title="CND Receita e Previdência Contabilidade Ilhéus"
            target="_blank"
            rel="noopener noreferrer"
            link="https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PJ/Emitir"
          />,
          <ImgAndTitleCard
            key={2}
            img={imgTrabalhista}
            imgDescription="Certidão Trabalhista Contabilidade Ilhéus"
            title="CDT Débitos Trabalhistas"
            target="_blank"
            rel="noopener noreferrer"
            link="http://www.tst.jus.br/certidao"
          />,
          <ImgAndTitleCard
            key={3}
            img={imgFGTS}
            imgDescription="FGTS Contabilidade Ilhéus"
            title="CRF Regularidade do FGTS"
            target="_blank"
            rel="noopener noreferrer"
            link="https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf"
          />,
          <ImgAndTitleCard
            key={4}
            img={imgSefaz}
            imgDescription="SEFAZ Contabilidade Ilhéus"
            title="CND Sefaz/Bahia"
            target="_blank"
            rel="noopener noreferrer"
            link="https://sistemas.sefaz.ba.gov.br/sistemas/sigat/Default.Aspx?Modulo=CREDITO&Tela=DocEmissaoCertidaoInternet"
          />,
          <ImgAndTitleCard
            key={5}
            img={imgPrefeituraIlheus}
            imgDescription="Prefeitura de Ilhéus Contabilidade Ilhéus"
            title="CND Prefeitura Ilhéus/BA"
            target="_blank"
            rel="noopener noreferrer"
            link="http://ilheus.metropolisweb.com.br:83/metropolisWEB/tributario/emitirCertidaoDebitoPublico.do?metodo=executarListar"
          />,
          <ImgAndTitleCard
            key={6}
            img={imgFalencia}
            imgDescription="Falência e Concordata Contabilidade Ilhéus"
            title="CND Falência e Concordata"
            target="_blank"
            rel="noopener noreferrer"
            link="http://esaj.tjba.jus.br/esaj/portal.do?servico=810000"
          />,
          <ImgAndTitleCard
            key={7}
            img={imgSefazSP}
            imgDescription="Sefaz SP Contabilidade Ilhéus"
            title="CND Sefaz/São Paulo"
            target="_blank"
            rel="noopener noreferrer"
            link="https://www10.fazenda.sp.gov.br/CertidaoNegativaDeb/Pages/EmissaoCertidaoNegativa.aspx"
          />,
          <ImgAndTitleCard
            key={8}
            img={imgSefazRJ}
            imgDescription="Sefaz RJ Contabilidade Ilhéus"
            title="CND Sefaz/Rio de Janeiro"
            target="_blank"
            rel="noopener noreferrer"
            link="https://www4.fazenda.rj.gov.br/certidao-fiscal-web/emitirCertidao.jsf"
          />,
        ]}
      </SectionContent>
    </div>
  );
}
