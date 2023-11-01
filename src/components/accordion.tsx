import React, { useState } from "react";
import { QuestionsMenu, Questions } from "../helpers/dumps";

const AccordionComponent = () => {
  const [active, setActive] = useState<any>(false);
  const [acc, setAcc] = useState(Questions);

  const toggle = (i: any) => {
    if (active === i) {
      return setActive(null);
    }
    setActive(i);
  };
  return (
    <>
      {acc.map((data, index) => {
        return (
          <section key={index} className="flex justify-center ">
            <div
              onClick={() => {
                toggle(index);
              }}
              key={index}
              className="w-[400px] sm:w-[600px] lg:w-[700px] "
            >
              <div
                className={
                  active === index
                    ? "flex justify-between p-3 cursor-pointer border-gray-100 border-[1px] h-16 items-center "
                    : " h-16 items-center flex justify-between p-3 cursor-pointer border-gray-100 border-[1px]"
                }
              >
                <div className="text-[11px] sm:text-sm">{data.question}</div>
                <div>{active === index ? "-" : "+"}</div>
              </div>
              <div
                className={
                  active === index
                    ? "text-[11px] border-gray-100 px-3 py-6 border-[1px] text-gray-400 "
                    : "hidden"
                }
              >
                {data.info}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default AccordionComponent;
