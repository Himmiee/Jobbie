import React, { useState } from "react";

const ReadMore = ({ text }: any) => {
  const [isReadMore, setIsReadMore] = useState<boolean>(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="">
      {isReadMore ? text.slice(0, 150) : text.slice(0, 700)}

      {text.length > 150 && (
        <span className="text-gray-300 text-[9px]" onClick={toggleReadMore}>
          {isReadMore ? "...read more" : " ...show less"}
        </span>
      )}
    </p>
  );
};

export default ReadMore;
