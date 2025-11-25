import bgImage from "../style/assets/images/paralaxe/paralaxeBg1.jpg";
// import WhatsappForm from "./SectionComponents/WhatsappForm";
import MotionDivLeftToRight from "./SectionComponents/MotionDivLeftToRight";
import MotionDivRightToLeft from "./SectionComponents/MotionDivRightToLeft";
import ImageGallery from "react-image-gallery";
import heroImg1 from "../style/assets/images/hero/imgHero2.jpg";
import heroImg2 from "../style/assets/images/hero/imgHero3.jpg";
import heroImg3 from "../style/assets/images/hero/imgHero4.jpg";
import "react-image-gallery/styles/css/image-gallery.css";
import Button from "./interactives/Button";
import { Copy, Mail } from "lucide-react";

export default function HeroSection() {
  const images = [
    {
      original: heroImg1,
      thumbnail: heroImg1,
    },
    {
      original: heroImg2,
      thumbnail: heroImg2,
    },
    {
      original: heroImg3,
      thumbnail: heroImg3,
    },
  ];

  const handleNumber = () => {
    const number = "(73) 98240-1515";
    navigator.clipboard.writeText(number);
    alert(`Número de telefone copiado!`);
  };

  const handleEmail = () => {
    const email = "edancontabilidade@gmail.com";
    navigator.clipboard.writeText(email);
    alert(`E-mail copiado!`);
  };

  return (
    <div className="content" id="home">
      <div className="h-auto full">
        <div
          className="w-full relative bg-center bg-cover tablet1:pt-8 desktop1:pb-10 content md:min-h-full"
         
          style={{ backgroundImage: "url(" + bgImage + ")" }}
        >
          <div className="absolute inset-0 z-0 full bg-black/55"></div>

          <div className="flex flex-col z-10 tablet1:py-[76px] tablet2:py-[38px] desktop1:py-[96px] desktop1:flex-row items-center desktop1:items-center justify-between w-full h-full pt-36 phone2:pt-44 tablet1:pt-32 tablet2:pt-24 pb-14 desktop1:pb-10 desktop1:pt-32 desktop1:mt-0 text-white tablet1:flex-nowrap font-poppins">
            <div className="w-full tablet2:flex-1 desktop1:mr-11 ">
              <div className="flex flex-col items-center text-center tablet1:mt-4 tablet2:mt-16 desktop1:mt-0 desktop1:items-start ">
                <h1 className="mb-2 font-bold leading-9 text-title4 phone3:text-title6 phone3:leading-[50px] tablet1:leading-none tablet1:text-title6 tablet2:text-title6">
                  <MotionDivLeftToRight>Solução e</MotionDivLeftToRight>
                </h1>
                <h1 className="font-bold leading-7 mb-8 text-title4 phone3:text-title6 phone3:leading-[50px] tablet1:leading-none tablet1:text-title6 tablet2:text-title6">
                  <MotionDivLeftToRight>Resultado!</MotionDivLeftToRight>
                </h1>
                <MotionDivLeftToRight>
                  <p className="text-paragraph3 mb-[32px] tablet2:text-paragraph4 phone3:text-title1 tablet1:text-paragraph3 tablet1:mr-4 desktop1:text-start">
                    Experiência que Conta! Com mais de 40 anos no mercado
                    empresarial, oferecemos conhecimento sólido para lidar com
                    os desafios contábeis do seu negócio.
                  </p>
                </MotionDivLeftToRight>
                <div className="flex flex-col items-center justify-center gap-8 tablet1:flex-row desktop1:items-start">
                  <MotionDivLeftToRight>
                    <Button
                      aria-label="Botão de contato"
                      label="Falar no Whatsapp"
                      textclassName="text-paragraph2"
                      size="small"
                      buttonLink="https://wa.me/5573982401515"
                      animation
                      className="flex w-auto"
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-whatsapp"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
                      }
                    />

                    <button
                      className="flex items-center gap-2 m-auto mt-4 text-paragraph2 desktop1:m-0 desktop1:mt-4 hover:scale-105 hover:duration-300"
                      onClick={handleNumber}
                    >
                      {" "}
                      (73) 98240-1515{" "}
                      <span>
                        <Copy width={18} />
                      </span>
                    </button>
                  </MotionDivLeftToRight>
                  <MotionDivLeftToRight>
                    <Button
                      aria-label="Botão de contato por e-mail"
                      label="Envie um e-mail"
                      size="small"
                      buttonLink="mailto:edancontabilidade@gmail.com"
                      animation
                      color="bg-white"
                      className="flex w-auto m-auto desktop1:m-0 text-primary"
                      icon={<Mail />}
                    />
                    <button
                      className="flex items-center gap-2 m-auto mt-4 text-paragraph2 desktop1:m-0 desktop1:mt-4 hover:scale-105 hover:duration-300"
                      onClick={handleEmail}
                    >
                      {" "}
                      edancontabilidade@gmail.com{" "}
                      <span>
                        <Copy width={18} />
                      </span>
                    </button>
                  </MotionDivLeftToRight>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[517px] desktop1:max-w-[45%] pt-12 desktop1:w-auto desktop1:pt-0 desktop1:mb-0">
              <MotionDivRightToLeft>
                {/* <WhatsappForm /> */}{" "}
                {/* <MotionDivLeftToRight>
                  <p className="pb-6 text-center text-paragraph3 tablet2:text-paragraph4 phone3:text-title1 tablet1:text-paragraph3 tablet1:mr-4 desktop1:text-start">
                    Confira nosso novo escritório no Centro 👇
                  </p>
                </MotionDivLeftToRight> */}
                <ImageGallery
                  items={images}
                  showNav={true} // Ativando a navegação
                  showFullscreenButton={false} // Desativando botão de tela cheia
                  useBrowserFullscreen={false} // Desativando o uso de tela cheia do navegador
                  showBullets={true}
                  additionalClass="custom-gallery"
                />
                <style>
                  {`
                   .image-gallery-slide  .image-gallery-center {
                    display: flex !important;
                      justify-content: center !important;
                      align-items: center !important;
                      width: 332px; !important;
                   }

                  .custom-gallery .image-gallery-slide {
                     display: flex !important;
                      justify-content: center !important;
                      align-items: center !important;
                      
                  }

                     .image-gallery-thumbnail[aria-pressed="true"] {
                        border: 3px solid #027738;
                        border-radius: 5px;
                      }

                      @media (hover: hover) and (pointer: fine) {
                          .image-gallery-icon:hover {
                              color: #027738;
                          }
                      }

                    .custom-gallery .image-gallery-slide img {
                     
                      object-fit: cover;
                      border-radius: 5px;
                    }

                    @media (min-width: 768px) and (max-width: 1023px) {
                      .custom-gallery .image-gallery-slide img {
                        height: auto; 
                        width: 100%;
                        
                        object-fit: cover;
                        
                      }
                    }

                    .custom-gallery .image-gallery-thumbnails img {
                      height: 60px;  
                      width: 100px;  
                      object-fit: cover; 
                      border-radius: 5px;
                    }
                  `}
                </style>
              </MotionDivRightToLeft>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
