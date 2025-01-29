import bgImage from "../style/assets/images/paralaxe/paralaxeBg1.jpg";
import WhatsappForm from "./SectionComponents/WhatsappForm";
import MotionDivLeftToRight from "./SectionComponents/MotionDivLeftToRight";
import MotionDivRightToLeft from "./SectionComponents/MotionDivRightToLeft";
import ImageGallery from "react-image-gallery";
import heroImg from "../style/assets/images/hero/hero1.jpeg";
import heroImg2 from "../style/assets/images/hero/hero2.jpeg";
import heroImg3 from "../style/assets/images/hero/hero3.jpeg";
import "react-image-gallery/styles/css/image-gallery.css";
import WhatsAppIcon from "../style/assets/icons/WhatsAppIcon.png";


export default function HeroSection() {
  const images = [
    {
      original: heroImg,
      thumbnail: heroImg,
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
              </div>
            </div>
            <div className="w-full mb-16 tablet2:w-auto phone1:mt-0 tablet1:ml-[8%]">
              <MotionDivRightToLeft>
                {/* Aqui está o WhatsAppForm comentado */}
                {/* <WhatsappForm /> */}
                {/* Agora passamos o array de imagens para o ImageGallery */}
                <ImageGallery items={images} />
                <MotionDivLeftToRight>
                  <div className="w-full flex justify-center">
                    <a
                      href="https://wa.me/5573999612263"
                      className="flex flex-row items-center justify-around w-[90%] h-8 phone1:h-10 px-1 transition rounded-lg max-w-32 tablet1:h-18 phone3:max-w-48 tablet1:max-w-60 phone3:w-[90%] bg-primary hover:bg-secondary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={WhatsAppIcon}
                        className="h-5 tablet1:h-10"
                        alt="WhatsApp Icon"
                      ></img>
                      <p className="text-white text-paragraph1 phone1:text-paragraph3 phone3:text-paragraph5 tablet1:pr-[3%] tablet1:font-bold tablet1:text-title2">
                        Clique aqui
                      </p>
                    </a>
                  </div>
                </MotionDivLeftToRight>
              </MotionDivRightToLeft>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
