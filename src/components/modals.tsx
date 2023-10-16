import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import { BsMap, BsBookmark, BsBookmarkFill } from "react-icons/bs";
import ButtonComponent from "./button";
import { JobType } from "../helpers/dumps";
import { frame, useMotionValue, useTransform, useAnimation } from "framer";

export const PopupModal = () => {
  return (
    <section className="fixed z-10 inset-0 flex justify-end p-3">
      <div className=" text-black bg-white w-[224px] h-10   border-teal-700 border-r-2 border-l-2 content-center flex justify-center text-sm rounded-md p-2 items-center gap-4">
        <div className=" ">Popup works duhh</div>
        <div className="cursor-pointer">
          <BsX size={24} />
        </div>
      </div>
    </section>
  );
};

export type CardType = {
  data: JobType;
  handleClick: any;
};

export const InfoModal = ({ data, handleClick }: CardType) => {
  const [bookmarkState, setBookmarkState] = useState<boolean>(false);
  const [popup, setPopup] = useState<boolean>(false);

  return (
    <section className="fixed z-10  inset-0 sm:flex bg-black bg-opacity-20 items-center h-screen justify-center p-3">
      <div
        onClick={handleClick}
        className="fixed z-10 cursor-pointer inset-0 "
      ></div>
      <div className="z-20">
        <div className="border-gray-100 border-[1px] bg-white cursor-pointer rounded-t-lg fixed w-full left-0  bottom-0 sm:relative sm:rounded-lg   sm:w-[570px]  lg:w-[640px] h-[430px]">
          <div>
            <div className="w-full h-12 flex justify-between items-center border-gray-100 px-3 border-b-[1px]">
              <div className="text-[12px] text-gray-300 italic font-medium">
                Today / day
              </div>
              <div onClick={handleClick} className="cursor-pointer">
                <BsX size={20} />
              </div>
            </div>
          </div>
          <div className="w-full h-96  sm:h-[381px] flex flex-col sm:flex-row">
            <div className="sm:w-2/3  p-3 max-h-full rounded-md">
              <div className="bg-teal-700 text-teal-700 w-14 flex justify-center items-center h-14 rounded-full">
                <p className="w-12 h-12 flex justify-center bg-teal-50 text-3xl font-bold items-center rounded-full">
                  {data.name.charAt(0)}
                </p>
              </div>
            </div>
            <div className="sm:w-1/3 p-3 max-h-full sm:rounded-br-md bg-gray-100">
              d
            </div>
          </div>
          {/* <div className="flex gap-3 justify-between px-1 sm:px-0 "> */}{" "}
          {/* <div>
              <div
                onClick={() => {
                  setBookmarkState(!bookmarkState);
                  console.log(bookmarkState);
                }}
                className="flex justify-end"
              >
                {bookmarkState ? (
                  <div className="text-teal-700">
                    <BsBookmarkFill size={20} />
                  </div>
                ) : (
                  <div className="text-teal-700">
                    <BsBookmark size={20} />
                  </div>
                )}
              </div>
              <p className="sm:hidden lg:flex text-[14px] mt-11">
                {data.publication_date.slice(2, 10)}
              </p>
            </div> */}
          {/* </div> */}
          {/* <div className="flex gap-4 sm:mx-10 justify-center sm:justify-start text-[12px] mt-4 my-2">
            <ButtonComponent
              className="h-8 w-32 font-bold  flex justify-center items-center hover:bg-teal-700 hover:text-white rounded-md text-teal-700 bg-teal-50 p-4"
              title="Apply"
              icon={null}
            />
            <ButtonComponent
              className="h-8 w-32 font-bold flex hover:bg-gray-500 hover:text-white justify-center items-center rounded-md border-[1px] border-gray-300 text-gray-500 p-4"
              title="Visit"
              icon={null}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};
