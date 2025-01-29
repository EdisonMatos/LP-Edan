import bgImage from "../style/assets/images/paralaxe/paralaxeBg1.jpg";
// import WhatsappForm from "./SectionComponents/WhatsappForm";
import MotionDivLeftToRight from "./SectionComponents/MotionDivLeftToRight";
import MotionDivRightToLeft from "./SectionComponents/MotionDivRightToLeft";
import ImageGallery from "react-image-gallery";
import heroImg2 from "../style/assets/images/hero/imgHero2.jpg";
import heroImg3 from "../style/assets/images/hero/imgHero3.jpg";
import heroImg4 from "../style/assets/images/hero/imgHero4.png";

import "react-image-gallery/styles/css/image-gallery.css";
import Button from "./interactives/Button";

export default function HeroSection() {
  const images = [
    {
      original: heroImg2,
      thumbnail: heroImg2,
    },
    {
      original: heroImg3,
      thumbnail: heroImg3,
    },
    {
      original: heroImg4,
      thumbnail: heroImg4,
    },
  ];

  return (
    <div className="content" id="home">
      <div className="h-auto full">
        <div
          className="w-full bg-center bg-cover content md:min-h-0"
          style={{ backgroundImage: "url(" + bgImage + ")" }}
        >
          <div className="flex flex-wrap items-center justify-between w-full h-full mt-12 text-white tablet1:flex-nowrap font-poppins">
            <div className="w-full tablet2:flex-1 tablet2:mr-11">
              <div className="mt-16 tablet1:h-96">
                <h1 className="mb-2 font-bold leading-7 text-title4 phone3:text-title7 phone3:leading-[60px] tablet1:leading-none tablet1:text-title6 tablet2:text-title6">
                  <MotionDivLeftToRight>Solução e</MotionDivLeftToRight>
                </h1>
                <h1 className="font-bold leading-7 mb-9 text-title4 phone3:text-title7 phone3:leading-[60px] tablet1:leading-none tablet1:text-title6 tablet2:text-title6">
                  <MotionDivLeftToRight>Resultado!</MotionDivLeftToRight>
                </h1>
                <p className="text-paragraph3 tablet2:text-paragraph4 phone3:text-title1 tablet1:text-paragraph3 tablet1:mr-4">
                  <MotionDivLeftToRight>
                    Experiência que Conta! Com mais de 40 anos no mercado
                    empresarial, oferecemos conhecimento sólido para lidar com
                    os desafios contábeis do seu negócio.
                  </MotionDivLeftToRight>
                </p>
                <MotionDivLeftToRight>
                  <Button
                    aria-label="Botão de contato"
                    label="Clique aqui"
                    buttonLink="https://wa.me/5573999612263"
                    animation
                    className="w-[100%] mt-4"
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
                </MotionDivLeftToRight>
              </div>
            </div>
            <div className="w-full tablet2:w-auto phone1:mt-0 tablet1:ml-[8%]">
              <MotionDivRightToLeft>
                {/* <WhatsappForm /> */}
                <p className="text-paragraph3 tablet2:text-paragraph4 phone3:text-title1 tablet1:text-paragraph3 tablet1:mr-4">
                  <MotionDivLeftToRight>
                    Confira novo escritório no Centro
                  </MotionDivLeftToRight>
                </p>
                <ImageGallery items={images} additionalClass="custom-gallery" />

                <style>
                  {`
    .custom-gallery .image-gallery-slide img {
      height: 230px; 
      width: 400px;
      object-fit: cover;
    }

    .custom-gallery .image-gallery-thumbnails img {
      height: 60px;  
      width: 100px;  
      object-fit: cover; 
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
