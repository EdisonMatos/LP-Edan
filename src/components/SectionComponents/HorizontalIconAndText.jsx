export default function HonrizontalIconAndText(props) {
  const { img, imgAlt, text, textLine2, textLine3, textLine4 } = props;

  return (
    <div className="flex flex-row my-[2%] tablet1:my-[3%]">
      <div className="flex flex-col justify-center w-[7%] tablet1:w-[3%] tablet2:w-[7%] ">
        <img alt={imgAlt} src={img} />
      </div>
      <div className="flex flex-col justify-center flex-1 ml-[3%] phone3:ml-[4%]">
        <div>{text}</div>
        <div>{textLine2}</div>
        <div>{textLine3}</div>
        <div>{textLine4}</div>
      </div>
    </div>
  );
}
