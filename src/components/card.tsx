import React, { useState, useEffect } from "react";
import {
  BsMap,
  BsBookmark,
  BsBookmarkFill,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";
import ButtonComponent from "./button";
import { frame, useMotionValue, useTransform, useAnimation } from "framer";
import { JobProto, JobType, BookmarkTemp } from "../helpers/dumps";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import {
  addBookmark,
  removeBookmark,
  selectBookmarks,
} from "../store/bookmarkSlice";

export type CardType = {
  data: JobType;
  index: number;
  setPopup: any;
  filterCompany: any;
};
export const CardComponent = ({
  data,
  index,
  setPopup,
  filterCompany,
}: CardType) => {
  const bookmarks = useAppSelector(selectBookmarks);
  const dispatch = useAppDispatch();

  const isBookmarked = bookmarks.some(
    (bookmark: any) => bookmark.id === data.id
  );
  const [bookmarkState, setBookmarkState] = useState<boolean>(false);

  const handleRemoveClick = (index: number) => {
    return dispatch(removeBookmark(index));
  };

  const handleAddBookmark = () => {
    return dispatch(addBookmark(data));
  };

  const handleBookmarkToggle = () => {
    if (isBookmarked) {
      handleRemoveClick(index);
    } else {
      handleAddBookmark();
    }
  };

  return (
    <section>
      <div className="border-gray-100 border-[1px] sm:h-[120px]  grid items-center lg:h-fit cursor-pointer rounded-lg  sm:my-0 p-4">
        <div className="flex  gap-3 justify-between px-1 sm:px-0 " key={index}>
          {" "}
          <div
            onClick={() => {
              setPopup(true);
            }}
            className="flex gap-3  w-3/3"
          >
            <div className="bg-teal-700  text-teal-700 w-8 flex justify-center items-center h-8 rounded-full">
              <p className="w-6 h-6 flex justify-center bg-teal-50 rounded-full">
                {data.company.name.charAt(0)}
              </p>
            </div>
            <div>
              <p className="text-sm lg:text- font-bold"> {data.company.name}</p>
              <p className="text-[10px] text-gray-400">
                {" "}
                {data.name.slice(0, 18)}
                {/* {data.type} */}
              </p>
              <p className="text-[8px] font-bold text-teal-700">
                {" "}
                {data.contents.slice(4, 24)}
              </p>
              <p className="flex gap-2 items-center text-[12px] sm:text-[11px] lg:text-[12px] my-1">
                <BsMap />
                {data.locations.map((loc) => loc.name.slice(0, 16))}
              </p>
            </div>
          </div>
          <div>
            <div
              onClick={handleBookmarkToggle}
              className="flex ml-auto w-fit h-fit justify-end"
            >
              {isBookmarked ? (
                <div onClick={handleAddBookmark} className="text-teal-700">
                  <BsBookmarkFill />
                </div>
              ) : (
                <div
                  onClick={() => handleRemoveClick(index)}
                  className="text-teal-700"
                >
                  <BsBookmark />
                </div>
              )}
            </div>
            <p
              onClick={() => {
                setPopup(true);
              }}
              className="sm:hidden border-gray-600 border-[1px] h-4 w-14 hover:border-teal-700 flex justify-center items-center rounded-md hover:bg-teal-700 hover:text-white   lg:flex text-[10px] mt-9"
            >
              View Job
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
