import { Children } from "react";
import MotionDivLeftToRight from "./MotionDivLeftToRight";

export default function FooterCardContent({ children }) {
  const childrenArray = Children.toArray(children);
  return (
    <div className="w-full mb-10 font-light text-white text-paragraph4 font-poppins desktop1:w-64 tablet2:w-48 tablet2:text-xxs desktop1:text-xs">
      <MotionDivLeftToRight>{childrenArray}</MotionDivLeftToRight>
    </div>
  );
}
