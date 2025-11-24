import HonrizontalIconAndText from "./SectionComponents/HorizontalIconAndText";
import FooterCardContent from "./SectionComponents/FooterCardContent";
import SectionContent from "./SectionComponents/SectionContent";
import imgLogo from "../style/assets/images/Logo.png";
import imgInstagram from "../style/assets/icons/footer/instagramIcon.png";
import imgFacebook from "../style/assets/icons/footer/facebookIcon.png";
import { Link } from "react-scroll";
import { Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <div className="h-auto pt-8 bg-secondary content">
      <SectionContent>
        <FooterCardContent>
          <div className="flex flex-col items-start h-12 mb-6">
            <img alt="Logo Edan" className="h-12" src={imgLogo} />
          </div>
          <div className="flex flex-col justify-between">
            <HonrizontalIconAndText
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-house-icon lucide-house"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
              }
              imgAlt="Edan Home Contabilidade Ilhéus"
              text={
                <>
                  Zona Sul: <br />
                  Av. Lótus, 23 - Nelson Costa, <br />
                  Ilhéus - BA, CEP 45656-000.
                </>
              }
            />
            <HonrizontalIconAndText
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-house-icon lucide-house"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
              }
              imgAlt="Edan Home Contabilidade Ilhéus"
              text={
                <>
                  Centro: <br /> R. Alm. Barroso (Calçadão), <br /> nº 137 -
                  Sala 102 - Edifício Paranaguá Ilhéus - BA, CEP 45653-135.
                </>
              }
            />
            <HonrizontalIconAndText
              icon={<Mail width="18" height="18" />}
              text="E-mail: edancontabilidade@gmail.com"
            />

            <HonrizontalIconAndText
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                </svg>
              }
              imgAlt="Edan Whatsapp Contabilidade Ilhéus"
              text="(73) 98240-1515"
            />

            <HonrizontalIconAndText
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-calendar-days-icon lucide-calendar-days"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
              }
              imgAlt="Edan Calendário Contabilidade Ilhéus"
              text="Seg. a Quinta, das 08h às 18h."
              textLine2="Sexta-feira, das 08 às 17h."
              textLine3="Sábado, fechado."
              textLine4="Domingo, fechado."
            />
          </div>
        </FooterCardContent>
        <FooterCardContent>
          <div className="flex flex-col justify-center h-12 mb-6 text-2xl font-bold">
            SOBRE
          </div>
          <div className="mb-4 font-light">
            Agradecemos sua visita! Esperamos que em breve você se torne nosso
            cliente e desfrute de todos os benefícios que oferecemos.
            <br></br>
            Para saber mais sobre nós, confira nossas redes sociais:
          </div>
          <div className="flex flex-col justify-between">
            <a
              target="_blank"
              href="https://www.instagram.com/edancontabilidade/#"
              rel="noreferrer"
            >
              <HonrizontalIconAndText
                img={imgInstagram}
                alt="Edan Instagram  Contabilidade Ilhéus"
                text="Siga-nos no instagram!"
              />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/EdanContabilidade/?locale=pt_BR"
              rel="noreferrer"
            >
              <HonrizontalIconAndText
                img={imgFacebook}
                alt="Edan Facebook Contabilidade Ilhéus"
                text="Curta a Edan no Facebook!"
              />
            </a>
          </div>
        </FooterCardContent>
        <FooterCardContent>
          <div className="flex flex-col justify-center h-12 mb-6 text-2xl font-bold">
            NAVEGAÇÃO
          </div>
          <div className="flex flex-row justify-between font-bold">
            <div>
              <Link
                to="home"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <div className="mb-4">
                  <span className="cursor-pointer">INÍCIO</span>
                </div>
              </Link>
              <Link
                to="services"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <div className="mb-4">
                  <span className="cursor-pointer">SERVIÇOS</span>
                </div>
              </Link>
              <Link
                to="app"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <div className="mb-4">
                  <span className="cursor-pointer">APLICATIVO EDAN</span>
                </div>
              </Link>
              <Link
                to="links"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <div className="mb-4">
                  <span className="cursor-pointer">LINKS ÚTEIS</span>
                </div>
              </Link>
            </div>
            <div>
              <Link
                to="about"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <div className="mb-4">
                  <span className="cursor-pointer">SOBRE NÓS</span>
                </div>
              </Link>
              <Link
                to="certificates"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <div className="mb-4">
                  <span className="cursor-pointer">CERTIDÕES</span>
                </div>
              </Link>
              <Link
                to="contact"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-170}
              >
                <div className="mb-4">
                  <span className="cursor-pointer">CONTATO</span>
                </div>
              </Link>
            </div>
          </div>
        </FooterCardContent>
      </SectionContent>
    </div>
  );
}
