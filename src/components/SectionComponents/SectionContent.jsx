import { Children } from "react";

export default function SectionContent({ children }) {
  const childrenArray = Children.toArray(children);
  return (
    <div className="flex flex-wrap items-start justify-around w-full h-auto tablet1:justify-between">
      {childrenArray}
    </div>
  );
}
