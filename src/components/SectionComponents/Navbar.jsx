import { Children } from "react";

export default function Navbar({ children }) {
  const childrenArray = Children.toArray(children);
  return (
    <div className="flex w-full h-auto mx-auto my-8 opacity-0 tablet2:my-8 content animate-fade-in">
      <div className="relative flex justify-between w-full">
        {childrenArray}
      </div>
    </div>
  );
}
