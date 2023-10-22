import React, { useState, useEffect } from "react";
import { BsX } from "react-icons/bs";
import { BookmarkComponent } from "./bookmark";
import { BsMap, BsBookmark, BsBookmarkFill } from "react-icons/bs";
import ButtonComponent from "./button";
import ReadMore from "./readmore";
import { useAppSelector } from "../store/hooks";
import { CategoryType, JobProto, JobType } from "../helpers/dumps";
import DateDifference from "./date";

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
  setData: any;
  filterCompany: any;
  result: any;
};

export const InfoModal = ({
  data,
  handleClick,
  setData,
  filterCompany,
  result,
}: CardType) => {
  const currentDate = new Date();
  useEffect(() => {
    filterCompany(data.company.name);
  }, []);
  return (
    <section className="fixed z-10 backdrop-blur-sm inset-0 sm:flex bg-black bg-opacity-20 items-center h-screen justify-center p-3">
      <div
        onClick={handleClick}
        className=" absolute z-4 cursor-pointer inset-0 "
      ></div>
      <div className="z-20">
        <div className="border-gray-100 border-[1px] bg-white cursor-pointer rounded-t-lg fixed w-full left-0  bottom-0 sm:relative sm:rounded-lg   sm:w-[570px]  lg:w-[640px] h-[400px] overflow-y-auto tbl sm:overflow-hidden sm:h-fit">
          <div>
            <div className="w-full h-12 flex justify-between items-center border-gray-100 px-3 border-b-[1px]">
              <div>
                <div className="text-[12px] text-gray-400 italic font-medium">
                  Today / {currentDate.getDate()} /{currentDate.getFullYear()}
                </div>
              </div>
              <div onClick={handleClick} className="cursor-pointer">
                <BsX size={20} />
              </div>
            </div>
          </div>
          <div className="w-full max-h-full flex flex-col sm:flex-row">
            <div className="sm:w-2/3  p-3 max-h-full rounded-md">
              <div className="flex gap-2">
                {" "}
                <div className="bg-teal-700 text-teal-700 w-14 flex justify-center items-center h-14 rounded-full">
                  <p className="w-12 h-12 flex justify-center italic bg-teal-50 text-3xl font-bold items-center rounded-full">
                    {data.company.name.charAt(0)}..
                  </p>
                </div>
                <div className="flex flex-col my-2">
                  <p className="font-bold italic">{data.company.name}</p>
                  <div className="text-[10px] text-gray-900 italic">
                    {data.name}
                  </div>
                </div>
              </div>
              <div className="my-2">
                <div className="text-[9px] italic text-gray-900">
                  {/* {data.contents.slice(112, 514)} */}
                  <ReadMore text={data.contents} />
                  <span className="text-gray-200 text-[6px]">...</span>
                </div>
              </div>
              <div className="flex gap-4  sm:justify-start text-[12px] my-2">
                <ButtonComponent
                  className="h-8 sm:h-6 w-40 sm:w-36 text-[12px] font-bold  flex justify-center items-center hover:bg-teal-600 sm:hover:bg-teal-700 hover:text-white rounded-md sm:bg-teal-50 sm:text-teal-700 border-teal-700 border-[1px]
                   text-teal-50  bg-teal-700 p-4"
                  title="Apply"
                  icon={null}
                  onClick={null}
                />
                <ButtonComponent
                  className="h-8 sm:h-6 w-40 sm:w-36 text-[12px] font-bold flex hover:bg-gray-500 hover:text-white justify-center items-center rounded-md border-[1px] border-gray-300 text-gray-500 p-4"
                  title="Visit"
                  icon={null}
                  onClick={null}
                />
              </div>
              <div className="mt-4 mb-2">
                <div className="">
                  <h3 className="text-[14px] my-2 bg-gradient-to-r from-teal-700 to-blue-950 bg-clip-text">
                    Other Jobs from {data.company.name}...
                  </h3>
                </div>
                <div className="w-full h-48 sm:h-[300px]  overflow-y-auto tbl">
                  {result.map((data: any) => {
                    return (
                      <div className="w-full lg:h-14 h-11 sm:h-fit text-[9.5px] sm:text-[10px] my-1 p-2 rounded-md item-center flex justify-between border-gray-200 border-[1px]">
                        <div className="flex flex-col justify-center">
                          <p className="">{data.name}</p>
                          <p className="italic text-[8px] text-gray-300">
                            {data.categories.map((info: any) => info.name)}
                          </p>
                        </div>
                        <div className="flex gap-2  justify-center sm:justify-start text-[12px] my-2">
                          <ButtonComponent
                            onClick={null}
                            className="h-6 w-16 text-[10px] font-bold  flex justify-center items-center hover:bg-gray-700 hover:text-white rounded-md text-white bg-black p-2"
                            title="Apply"
                            icon={null}
                          />
                          <ButtonComponent
                            onClick={null}
                            className="h-6 w-16 text-[10px] font-bold flex hover:bg-gray-500 hover:text-white justify-center items-center rounded-md border-[1px] border-gray-300 text-gray-500 p-2"
                            title="Visit"
                            icon={null}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className="text-[12px] italic text-gray-300">@jobber-2023</p>
            </div>

            <div className="sm:w-1/3 max-h-fit sm:rounded-br-md bg-gray-100">
              <div className=" w-full p-2 px-3 h-[100px]  text-[14px] border-gray-200 border-b-[1px]">
                <div className="flex gap-1">
                  <div className="bg-black text-black w-8 flex justify-center items-center h-8 rounded-full">
                    <p className="w-6 h-6 flex justify-center italic bg-teal-50 text-[12px] font-bold items-center rounded-full">
                      {data.company.name.charAt(0)}
                    </p>
                  </div>
                  <div className="bg-black text-black w-8 flex justify-center items-center h-8 rounded-full">
                    <p className="w-6 h-6 flex justify-center italic bg-teal-50 text-[13px] font-bold items-center rounded-full">
                      {data.company.name.charAt(0)}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] mt-2 mb-1 font-bold">People :-</p>
                  <div className="flex gap-2">
                    <p className="text-[10px] italic text-gray-400">
                      @you-name
                    </p>
                    <p className="text-[10px]  italic text-gray-400">
                      @company-{data.company.name}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-full p-2 px-3 h-[75px] text-[14px] border-gray-200 border-b-[1px]">
                <div>
                  <p className="text-[12px] my-2 font-bold">Location :-</p>
                  <div className="flex gap-2">
                    <p className="text-[10px] italic text-gray-400">
                      {data.locations.map((loc) => loc.name)}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-full p-2 h-28 text-[14px] px-3 border-gray-200 border-b-[1px]">
                <div>
                  <p className="text-[12px] my-2 font-bold"> About :-</p>
                  <div className="flex gap-2 my-1">
                    <li className="text-[10px]  ">
                      Category -{" "}
                      <span className="text-[10px] italic text-gray-500 ">
                        {data.categories.map((loc) => loc.name)}
                      </span>
                    </li>
                  </div>
                  <div className="flex gap-2 my-1">
                    <li className="text-[10px]  ">
                      Level -{" "}
                      <span className="text-[10px] italic text-gray-500 ">
                        {data.levels.map((loc) => loc.name)}
                      </span>
                    </li>
                  </div>
                  <div className="flex gap-2 my-1">
                    <li className="text-[10px]   ">
                      Type -{" "}
                      <span className="text-[10px] italic text-gray-500 ">
                        {data.type}
                      </span>
                    </li>
                  </div>
                </div>
              </div>
              <div className=" w-full p-2 h-[75px] px-3 text-[14px] border-gray-200 border-b-[1px]">
                <div>
                  <p className="text-[12px] my-2 font-bold">Posted On:-</p>
                  <div className="flex gap-2">
                    <p className="text-[10px] italic text-gray-400">
                      {data.publication_date.slice(0, 10)}
                    </p>
                    <div className="text-[10px] italic text-gray-400">
                      <DateDifference
                        givenDate={data.publication_date.slice(0, 10)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full h-full px-3 p-2 text-[14px] ">
                <div>
                  <p className="text-[12px] my-2 font-bold">Bookmarks:-</p>
                  <div>{/* <BookmarkComponent data={}/> */}</div>
                </div>
              </div>
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
        </div>
      </div>
    </section>
  );
};
