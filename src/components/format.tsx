import React from "react";
type FormatType = {
  description: string;
};
const FormatText = ({ description }: FormatType) => {
  const createMarkup = () => {
    return { __html: description };
  };

  return (
    <div>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default FormatText;
