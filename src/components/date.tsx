import React, { useState, useEffect } from "react";

type DateDifferenceProps = {
  givenDate: string;
};

const DateDifference: React.FC<DateDifferenceProps> = ({ givenDate }) => {
  const [daysAgo, setDaysAgo] = useState<string | null>(null);

  useEffect(() => {
    const currentDate = new Date();
    const inputDate = new Date(givenDate);

    const differenceInMilliseconds =
      currentDate.getTime() - inputDate.getTime();

    const differenceInDays = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );

    if (differenceInDays === 1) {
      setDaysAgo("yesterday");
    } else {
      setDaysAgo(`${differenceInDays} days ago`);
    }
  }, [givenDate]);

  return (
    <div>
      <p>{daysAgo}</p>
    </div>
  );
};

export default DateDifference;
