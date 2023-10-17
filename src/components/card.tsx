import React, { useState } from "react";
import { BsMap, BsBookmark, BsBookmarkFill } from "react-icons/bs";
import ButtonComponent from "./button";
import { frame, useMotionValue, useTransform, useAnimation } from "framer";
import { JobProto, JobType } from "../helpers/dumps";
import { useAppDispatch } from "../store/hooks";

export type CardType = {
  data: JobType;
  index: number;
  setPopup: any;
};
export const CardComponent = ({ data, index, setPopup }: CardType) => {
  const [bookmarkState, setBookmarkState] = useState<boolean>(false);
  // const [popup, setPopup] = useState<boolean>(false);

  return (
    <section>
      <div className="border-gray-100 border-[1px]  cursor-pointer rounded-lg my-2 sm:my-0 p-3">
        <div className="flex gap-3 justify-between px-1 sm:px-0 " key={index}>
          {" "}
          <div
            onClick={() => {
              setPopup(true);
            }}
            className="flex gap-3  w-2/3"
          >
            <div className="bg-teal-700  text-teal-700 w-8 flex justify-center items-center h-8 rounded-full">
              <p className="w-6 h-6 flex justify-center bg-teal-50 rounded-full">
                {data.company.name.charAt(0)}
              </p>
            </div>
            <div>
              <p className="text-sm font-bold"> {data.company.name}</p>
              <p className="text-[10px] text-gray-400">
                {" "}
                {data.name.slice(0, 18)}
                {/* {data.type} */}
              </p>
              <p className="text-[8px] font-bold text-teal-700">
                {" "}
                {data.contents.slice(23, 48)}
              </p>
              <p className="flex gap-2 items-center text-[12px] my-1">
                <BsMap />
                {data.locations.map((loc) => loc.name)}
              </p>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                setBookmarkState(!bookmarkState);
                console.log(bookmarkState);
              }}
              className="flex ml-auto w-fit h-fit justify-end"
            >
              {bookmarkState ? (
                <div className="text-teal-700">
                  <BsBookmarkFill />
                </div>
              ) : (
                <div className="text-teal-700">
                  <BsBookmark />
                </div>
              )}
            </div>
            <p
              onClick={() => {
                setPopup(true);
              }}
              className="sm:hidden  lg:flex text-[12px] mt-9"
            >
              {data.publication_date.slice(2, 10)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
