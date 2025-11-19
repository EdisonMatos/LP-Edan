export default function HonrizontalIconAndText(props) {
  const {
    img,
    icon,
    imgAlt,
    text,
    textLine2,
    textLine3,
    textLine4,
    className,
  } = props;

  return (
    <div className="flex flex-row my-[2%] tablet1:my-[3%]">
      <div className="flex flex-col justify-center w-4  ">
        {icon ? (
          <div className={`${className} w-fit`}>
            <span>{icon}</span>
          </div>
        ) : (
          <img alt={imgAlt} src={img} />
        )}
      </div>

      <div className="flex flex-col justify-center flex-1 ml-[3%] phone3:ml-[4%]">
        {text && <div>{text}</div>}
        {textLine2 && <div>{textLine2}</div>}
        {textLine3 && <div>{textLine3}</div>}
        {textLine4 && <div>{textLine4}</div>}
      </div>
    </div>
  );
}
