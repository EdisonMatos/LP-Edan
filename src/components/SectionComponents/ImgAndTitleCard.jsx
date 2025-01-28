import MotionDivLeftToRight from "./MotionDivLeftToRight";

export default function ImgAndTitleCard(props) {
  const img = props.img;
  const imgDescription = props.imgDescription;
  const title = props.title;
  const link = props.link;

  return (
    <a
      href={link}
      target="_blank"
      className=" flex flex-col items-center justify-between w-32 mt-2 mb-2 h-28 phone3:w-[50%] tablet1:w-[25%]"
      rel="noreferrer"
    >
      <div className="flex flex-row px-[10%] py-[5%] items-end justify-center w-full h-full ">
        <MotionDivLeftToRight>
          <img src={img} alt={imgDescription} className="w-auto h-12"></img>
        </MotionDivLeftToRight>
      </div>
      <div className="flex flex-col justify-center w-full h-full ">
        <div className="font-medium text-center transition duration-300 px-[10%]  text-paragraph1 phone3:text-paragraph2 desktop1:text-paragraph3 font-poppins text-secondary hover:text-primary">
          <MotionDivLeftToRight>{title}</MotionDivLeftToRight>
        </div>
      </div>
    </a>
  );
}
