export default function ParallaxSection(props) {
  const { img } = props;

  return (
    <div className="mt-10 full">
      <div className="full">
        <div
          className="bg-center bg-cover feature h-52"
          style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        ></div>
      </div>
    </div>
  );
}
