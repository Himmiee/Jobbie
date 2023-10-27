import React, { useState } from "react";

export const HoverTool = ({ text, children }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div className="absolute text-[7px] text-center w-24 flex justify-center bg-black text-white text-sm py-2 px-4 rounded-lg -left-1/2 transform -translate-x-1/2 bottom-full">
          {text}
        </div>
      )}
    </div>
  );
};
