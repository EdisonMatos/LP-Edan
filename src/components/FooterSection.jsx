import HonrizontalIconAndText from "./SectionComponents/HorizontalIconAndText";
import FooterCardContent from "./SectionComponents/FooterCardContent";
import SectionContent from "./SectionComponents/SectionContent";
import imgHome from "../style/assets/icons/footer/homeIcon.png";
import imgWhatsapp from "../style/assets/icons/footer/whatsappIcon.png";
import imgCalendar from "../style/assets/icons/footer/calendarIcon.png";
import imgLogo from "../style/assets/images/Logo.png";
import imgInstagram from "../style/assets/icons/footer/instagramIcon.png";
import imgFacebook from "../style/assets/icons/footer/facebookIcon.png";
import { Link } from "react-scroll";

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
              img={imgHome}
              imgAlt="Edan Home Contabilidade Ilhéus"
              text="Av. Lótus, 23 - Nelson Costa, Ilhéus - BA, CEP 45656-000."
            />
            <HonrizontalIconAndText
              img={imgWhatsapp}
              imgAlt="Edan Whatsapp Contabilidade Ilhéus"
              text="(73) 9.9961-2263"
            />
            <HonrizontalIconAndText
              img={imgCalendar}
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
