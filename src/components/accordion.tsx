import React, { useState } from "react";
import { QuestionsMenu } from "../helpers/dumps";
import { act } from "@testing-library/react";

const AccordionComponent = ({ data }: any, id: number) => {
  const [active, setActive] = useState<number>(0);

  const toggle = (i: number) => {
    if (i === active) {
      return setActive(0);
    }
    return setActive(i);
  };
  return (
    <section className="flex justify-center">
      <div className="w-[400px] sm:w-[600px] lg:w-[700px] ">
        <div
          onClick={() => {
            toggle(id);
          }}
          className={
            active === id
              ? "flex justify-between p-3 cursor-pointer border-gray-100 border-[1px] h-16 items-center "
              : " h-16 items-center flex justify-between p-3 cursor-pointer border-gray-100 border-[1px]"
          }
        >
          <div className="text-[11px] sm:text-sm">{data.question}</div>
          <div>{active === id ? "-" : "+"}</div>
        </div>
        <div
          className={
            active === id
              ? "text-[11px] border-gray-100 px-3 py-6 border-[1px] text-gray-400 "
              : "hidden text-[11px] border-gray-100 px-3 py-4  border-[1px]"
          }
        >
          {data.info}
        </div>
      </div>
    </section>
  );
};

export default AccordionComponent;
