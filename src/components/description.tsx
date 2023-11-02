import React, { useState } from "react";

type JobDescriptionProps = {
  description: string;
};

const JobDescription = ({ description }: JobDescriptionProps) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const displayText = isReadMore
    ? description.slice(0, 150)
    : description.slice(0, 900);

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: displayText,
        }}
      />
      {description.length > 150 && (
        <span
          className="text-gray-300 text-[9px] cursor-pointer"
          onClick={toggleReadMore}
        >
          {isReadMore ? "...read more" : " ...show less"}
        </span>
      )}
    </div>
  );
};

export default JobDescription;
