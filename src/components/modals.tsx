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
};

export const InfoModal = ({ data }: CardType) => {
  const [bookmarkState, setBookmarkState] = useState<boolean>(false);
  const [popup, setPopup] = useState<boolean>(false);

  return (
    <section
      onClick={() => {
        setPopup(false);
      }}
      className="fixed z-10  backdrop-blur-sm inset-0 flex bg-black bg-opacity-20 items-center h-screen justify-center p-3"
    >
      <div>
        <div className="border-gray-100 border-[1px] bg-white cursor-pointer rounded-lg p-6 py-10 w-96 h-56">
          <div className="flex gap-3 justify-between px-1 sm:px-0 ">
            {" "}
            <div className="flex gap-3">
              <div className="bg-teal-700 text-teal-700 w-8 flex justify-center items-center h-8 rounded-full">
                <p className="w-6 h-6 flex justify-center bg-teal-50 rounded-full">
                  {data.name.charAt(0)}
                </p>
              </div>
              <div>
                <p className="text-lg font-bold"> {data.company.name}</p>
                <p className="text-[10px] text-gray-400">
                  {" "}
                  {data.name.slice(0, 18)}
                  {/* {data.type} */}
                </p>
                <p className="text-[12px] font-bold text-teal-700">
                  {" "}
                  {data.contents.slice(23, 48)}
                </p>
                <p className="flex gap-2 items-center text-[14px] my-1">
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
                className="flex justify-end"
              >
                {bookmarkState ? (
                  <div className="text-teal-700">
                    <BsBookmarkFill size={20}/>
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
            </div>
          </div>

          <div className="flex gap-4 sm:mx-10 justify-center sm:justify-start text-[12px] mt-4 my-2">
            <ButtonComponent
              className="h-8 w-32  flex justify-center items-center hover:bg-teal-700 hover:text-white rounded-md text-teal-700 bg-teal-50 p-4"
              title="Apply"
              icon={null}
            />
            <ButtonComponent
              className="h-8 w-32  flex hover:bg-gray-500 hover:text-white justify-center items-center rounded-md border-[1px] border-gray-300 text-gray-500 p-4"
              title="Visit"
              icon={null}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
