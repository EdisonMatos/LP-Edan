import ImgAndTitleCard from "./SectionComponents/ImgAndTitleCard";
import SectionContent from "./SectionComponents/SectionContent";
import SectionHeader from "./SectionComponents/SectionHeader";
import imgInscricaoEstadual from "../style/assets/images/links-acesso-rápido/sefaz.png";
import imgPedidoViabilidade from "../style/assets/images/links-acesso-rápido/juceb.png";
import imgConsultaDbe from "../style/assets/images/links-acesso-rápido/consultaDbe.png";
import imgConsultaOptanteSimples from "../style/assets/images/links-acesso-rápido/consultaOptantes.png";
import imgDarfReceita from "../style/assets/images/links-acesso-rápido/darfReceitaFederal.png";
import imgEcac from "../style/assets/images/links-acesso-rápido/ecac.png";
import imgGovBr from "../style/assets/images/links-acesso-rápido/govBr.png";
import imgPrefeituraIlheus from "../style/assets/images/links-acesso-rápido/prefeituraIlheus.png";
import imgCartaoCnpj from "../style/assets/images/links-acesso-rápido/cartaoCnpj.png";
import imgMei from "../style/assets/images/links-acesso-rápido/mei.png";
import imgInssInformeRendimentos from "../style/assets/images/links-acesso-rápido/inssInformeDeRendimentos.png";

export default function LinksSection() {
  return (
    <div className="content" id="links">
      <SectionHeader
        sectionHeaderTitleFirst="Principais portais e tabelas"
        sectionHeaderTitleSecond="em um click"
        sectionHeaderDescription="Agilidade ao alcance de um clique, pensando na eficiência do seu negócio."
      />
      <SectionContent>
        {[
          <ImgAndTitleCard
            key={1}
            img={imgInscricaoEstadual}
            imgDescription="Edan SEFAZ Contabilidade Ilhéus"
            title="Inscrição Estadual"
            target="_blank"
            rel="noopener noreferrer"
            link="https://portal.sefaz.ba.gov.br/scripts/cadastro/cadastroBa/consultaBa.asp"
          />,
          <ImgAndTitleCard
            key={2}
            img={imgPedidoViabilidade}
            imgDescription="Edan Juceb Contabilidade Ilhéus"
            title="Pedido de Viabilidade"
            target="_blank"
            rel="noopener noreferrer"
            link="http://regin.juceb.ba.gov.br/regin.ba/CON_ViabilidadeSelecaoExternoV2.aspx?"
          />,
          <ImgAndTitleCard
            key={3}
            img={imgConsultaDbe}
            imgDescription="Edan Consulta DBE Contabilidade Ilhéus"
            title="Consultar DBE"
            target="_blank"
            rel="noopener noreferrer"
            link="https://www.gov.br/empresas-e-negocios/pt-br/redesim/protocolo-redesim"
          />,
          <ImgAndTitleCard
            key={4}
            img={imgConsultaOptanteSimples}
            imgDescription="Edan Consulta Optantes Contabilidade Ilhéus"
            title="Consulta Optantes Simples"
            target="_blank"
            rel="noopener noreferrer"
            link="http://www8.receita.fazenda.gov.br/SimplesNacional/aplicacoes.aspx?id=22"
          />,
          <ImgAndTitleCard
            key={5}
            img={imgDarfReceita}
            imgDescription="Edan Darf Receita Contabilidade Ilhéus"
            title="Pessoa Jurídica"
            target="_blank"
            rel="noopener noreferrer"
            link="http://servicos.receita.fazenda.gov.br/Servicos/sicalcweb/default.asp?TipTributo=2&FormaPagto=1"
          />,
          <ImgAndTitleCard
            key={6}
            img={imgDarfReceita}
            imgDescription="Edan Darf Receita Contabilidade Ilhéus"
            title="Pessoa Física"
            target="_blank"
            rel="noopener noreferrer"
            link="http://servicos.receita.fazenda.gov.br/Servicos/sicalcweb/default.asp?TipTributo=1&FormaPagto=1"
          />,
          <ImgAndTitleCard
            key={7}
            img={imgEcac}
            imgDescription="Edan ECAC Contabilidade Ilhéus"
            title="Acesso e-CAC"
            target="_blank"
            rel="noopener noreferrer"
            link="https://cav.receita.fazenda.gov.br/autenticacao/login"
          />,
          <ImgAndTitleCard
            key={8}
            img={imgGovBr}
            imgDescription="Edan GovBR Contabilidade Ilhéus"
            title="Acesso Gov.Br"
            target="_blank"
            rel="noopener noreferrer"
            link="https://sso.acesso.gov.br/login"
          />,
          <ImgAndTitleCard
            key={9}
            img={imgPrefeituraIlheus}
            imgDescription="Edan Prefeitura Ilhéus Contabilidade Ilhéus"
            title="NF Eletrônica"
            target="_blank"
            rel="noopener noreferrer"
            link="http://ilheus.metropolisweb.com.br:83/metropolisWEB/"
          />,
          <ImgAndTitleCard
            key={10}
            img={imgCartaoCnpj}
            imgDescription="Edan Cartão CNPJ Contabilidade Ilhéus"
            title="Cartão CNPJ"
            target="_blank"
            rel="noopener noreferrer"
            link="https://servicos.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp?cnpj=10949168000100"
          />,
          <ImgAndTitleCard
            key={11}
            img={imgMei}
            imgDescription="Edan MEI Contabilidade Ilhéus"
            title="Portal MEI"
            target="_blank"
            rel="noopener noreferrer"
            link="https://www8.receita.fazenda.gov.br/simplesnacional/aplicacoes/atspo/pgmei.app/identificacao"
          />,
          <ImgAndTitleCard
            key={12}
            img={imgInssInformeRendimentos}
            imgDescription="Edan Informe de Rendimentos Contabilidade Ilhéus"
            title="Informe de Rendimentos"
            target="_blank"
            rel="noopener noreferrer"
            link="https://extratoir.inss.gov.br/irpf01/pages/consultarExtratoIR.xhtml"
          />,
        ]}
      </SectionContent>
    </div>
  );
}
