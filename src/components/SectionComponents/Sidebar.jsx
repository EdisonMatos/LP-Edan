import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Sidebar({ showSidebar }) {
  const [showSublistServices, setShowSublistServices] = useState(false);
  const [showSublistLinks, setShowSublistLinks] = useState(false);

  const toggleSublistServices = () => {
    setShowSublistServices(!showSublistServices);
    setShowSublistLinks(false);
  };

  const toggleSublistLinks = () => {
    setShowSublistLinks(!showSublistLinks);
    setShowSublistServices(false);
  };

  return (
    <div
      className={`sidebar transition-transform transform ${
        showSidebar ? "animate-slide-down" : "animate-slide-up"
      }`}
    >
      <div className="mx-auto">
        <div
          className={`flex h-auto w-64 phone2:w-80 phone3:w-80 px-12 py-6 mx-auto bg-white font-poppins ${
            showSublistServices || showSublistLinks ? "mb-16" : ""
          }`}
        >
          <div className="overflow-y-auto">
            <ul className="text-black">
              <Link
                to="home"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <li className="mb-2">
                  <a href="home" className="hover:text-primary">
                    Início
                  </a>
                </li>
              </Link>
              <Link
                to="about"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-320}
              >
                <li className="mb-2">
                  <a href="about" className="hover:text-primary">
                    Sobre Nós
                  </a>
                </li>
              </Link>
              <Link
                to="services"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-320}
              >
                <li className="mb-2">
                  <a href="services" className="hover:text-primary">
                    Serviços
                  </a>
                </li>
              </Link>

              <li className="relative mb-2">
                <button
                  className="cursor-pointer hover:text-primary"
                  onClick={toggleSublistLinks}
                >
                  Links Úteis
                </button>
                {showSublistLinks && (
                  <ul className="relative left-0 p-4 overflow-y-auto text-sm text-black bg-white top-full max-h-48">
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://portal.sefaz.ba.gov.br/scripts/cadastro/cadastroBa/consultaBa.asp"
                        className="hover:text-primary"
                      >
                        Inscrição Estadual
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://regin.juceb.ba.gov.br/regin.ba/CON_ViabilidadeSelecaoExternoV2.aspx?"
                        className="hover:text-primary"
                      >
                        Pedido de Viabilidade
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.gov.br/empresas-e-negocios/pt-br/redesim/protocolo-redesim"
                        className="hover:text-primary"
                      >
                        Consultar DBE
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www8.receita.fazenda.gov.br/SimplesNacional/aplicacoes.aspx?id=22"
                        className="hover:text-primary"
                      >
                        Consulta Optantes Simples
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://servicos.receita.fazenda.gov.br/Servicos/sicalcweb/default.asp?TipTributo=2&FormaPagto=1"
                        className="hover:text-primary"
                      >
                        Pessoa Jurídica
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://servicos.receita.fazenda.gov.br/Servicos/sicalcweb/default.asp?TipTributo=1&FormaPagto=1"
                        className="hover:text-primary"
                      >
                        Pessoa Física
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://cav.receita.fazenda.gov.br/autenticacao/login"
                        className="hover:text-primary"
                      >
                        Acesso e-CAC
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://sso.acesso.gov.br/login"
                        className="hover:text-primary"
                      >
                        Acesso Gov.Br
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://ilheus.metropolisweb.com.br:83/metropolisWEB/"
                        className="hover:text-primary"
                      >
                        NF Eletrônica
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://servicos.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp?cnpj=10949168000100"
                        className="hover:text-primary"
                      >
                        Cartão CNPJ
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www8.receita.fazenda.gov.br/simplesnacional/aplicacoes/atspo/pgmei.app/identificacao"
                        className="hover:text-primary"
                      >
                        Portal MEI
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://extratoir.inss.gov.br/irpf01/pages/consultarExtratoIR.xhtml"
                        className="hover:text-primary"
                      >
                        Informe de Rendimentos
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li className="relative mb-2 ">
                <button
                  className="cursor-pointer hover:text-primary"
                  onClick={toggleSublistServices}
                >
                  Certidões
                </button>
                {showSublistServices && (
                  <ul className="relative left-0 p-4 overflow-y-auto text-sm text-black bg-white top-full max-h-48">
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PJ/Emitir"
                        className="hover:text-primary"
                      >
                        CND Receita e Previdência
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.tst.jus.br/certidao"
                        className="hover:text-primary"
                      >
                        CDT Débitos Trabalhistas
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf"
                        className="hover:text-primary"
                      >
                        CRF Regularidade do FGTS
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://sistemas.sefaz.ba.gov.br/sistemas/sigat/Default.Aspx?Modulo=CREDITO&Tela=DocEmissaoCertidaoInternet"
                        className="hover:text-primary"
                      >
                        CND Sefaz/Bahia
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://ilheus.metropolisweb.com.br:83/metropolisWEB/tributario/emitirCertidaoDebitoPublico.do?metodo=executarListar"
                        className="hover:text-primary"
                      >
                        CND Prefeitura de Ilhéus/BA
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://esaj.tjba.jus.br/esaj/portal.do?servico=810000"
                        className="hover:text-primary"
                      >
                        CND Falência e Concordata
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www10.fazenda.sp.gov.br/CertidaoNegativaDeb/Pages/EmissaoCertidaoNegativa.aspx"
                        className="hover:text-primary"
                      >
                        CND Sefaz/São Paulo
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www4.fazenda.rj.gov.br/certidao-fiscal-web/emitirCertidao.jsf"
                        className="hover:text-primary"
                      >
                        CND Sefaz/Rio de Janeiro
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <Link
                to="contact"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-390}
              >
                <li className="mb-2">
                  <a href="contact" className="hover:text-primary">
                    Contato
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
