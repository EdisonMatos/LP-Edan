import SectionContent from "../components/SectionComponents/SectionContent";
import imgAppScreen from "../style/assets/images/aplicativo/appScreens.png";
import imgAppUtilities from "../style/assets/images/aplicativo/appUtilities2.png";
import imgAppStore from "../style/assets/images/aplicativo/appStore.png";
import imgPlayStore from "../style/assets/images/aplicativo/playStore.png";
import MotionDivLeftToRight from "./SectionComponents/MotionDivLeftToRight";
import MotionDivRightToLeft from "./SectionComponents/MotionDivRightToLeft";

export default function AppSection() {
  return (
    <div className="content">
      <div className="feature">
        <SectionContent>
          <div
            id="app"
            className="flex flex-col justify-between w-full mb-6 tablet1:mb-0 tablet1:w-72 tablet2:w-80 desktop1:w-112 desktop2:w-128"
          >
            <div className="flex flex-col items-center justify-center h-24 ">
              <h1 className="flex flex-col justify-center font-bold text-center text-title1 phone1:text-title2 tablet1:text-title1 tablet2:text-title2 font-poppins text-secondary">
                <MotionDivLeftToRight>
                  Baixe o App Edan e tenha inúmeras vantagens
                </MotionDivLeftToRight>
              </h1>
            </div>
            <div className="flex flex-col items-center justify-around flex-grow ">
              <MotionDivLeftToRight>
                <img
                  className="w-full"
                  alt="Aplicativo celular Edan Contabilidade Ilhéus"
                  src={imgAppScreen}
                />
              </MotionDivLeftToRight>
            </div>
          </div>
          <MotionDivRightToLeft>
            <div className="flex flex-col justify-start w-full rounded-xl bg-secondary tablet1:w-64 tablet2:w-80 desktop1:w-112 desktop2:w-128">
              <div className="flex items-center justify-center h-28 ">
                <h1 className="flex flex-row justify-center mx-[10%] font-bold text-center text-white  phone1:text-paragraph5 tablet1:text-paragraph3 tablet2:text-paragraph4 desktop1:text-title1 font-poppins">
                  Algumas funcionalidades do nosso aplicativo
                </h1>
              </div>
              <div className="flex flex-col items-center justify-around flex-grow ">
                <div className="flex flex-row justify-center ">
                  <img
                    className="w-4/5 "
                    alt="Utilidades do aplicativo Edan"
                    src={imgAppUtilities}
                  ></img>
                </div>
                <div className="flex flex-row justify-between w-4/5 mt-4 mb-8 desktop1:my-8">
                  <a
                    href="https://apps.apple.com/il/app/edan-contabilidade/id6473044144"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="w-32 tablet1:w-24 tablet2:w-28 desktop1:w-44"
                      alt="Edan App Store"
                      src={imgAppStore}
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=br.com.taskdo.mobile.edan&hl=ln&gl=US"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="w-32 tablet1:w-24 tablet2:w-28 desktop1:w-44"
                      alt="Edan Play Store"
                      src={imgPlayStore}
                    />
                  </a>
                </div>
              </div>
            </div>
          </MotionDivRightToLeft>
        </SectionContent>
      </div>
    </div>
  );
}
