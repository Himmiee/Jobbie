import React, { useState, useEffect } from "react";
import {
  BsMap,
  BsBookmark,
  BsBookmarkFill,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";
import FormatText from "./format";
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
  setPopup: (value: boolean) => void;
  setPopupState: (value: boolean) => void;
  setBookmarkState: (value: boolean) => void;
};
export const CardComponent = ({
  data,
  index,
  setPopup,
  setPopupState,
  setBookmarkState,
}: CardType) => {
  const bookmarks = useAppSelector(selectBookmarks);
  const dispatch = useAppDispatch();
  const [bkmPopup, setBkmPopup] = useState<boolean>(false);

  const [isBookmarked, setIsBookmarked] = useState<boolean>(
    bookmarks.some((bookmark: any) => bookmark.id === data.id)
  );

  const handleRemoveClick = (index: number) => {
    try {
      dispatch(removeBookmark(index));
      setIsBookmarked(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddBookmark = () => {
    try {
      dispatch(addBookmark(data));
      setIsBookmarked(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleBookmarkToggle = (index: number) => {
    try {
      if (isBookmarked) {
        dispatch(removeBookmark(index));
        setIsBookmarked(false);
      } else {
        dispatch(addBookmark(data));
        setIsBookmarked(true);
      }

      setPopupState(true);
    } catch (err) {
      console.error(err);
    }
  };
  const categoryNames = data.categories.map((cat) => cat.name);
  return (
    <section>
      <div className="border-gray-100 border-[1px] sm:h-[120px]  grid items-center lg:max-h-full cursor-pointer rounded-lg  sm:my-0 p-4">
        <div className="flex  gap-3 justify-between px-1 sm:px-0 " key={index}>
          {" "}
          <div
            onClick={() => {
              setPopup(true);
            }}
            className="flex gap-3   w-3/3"
          >
            <div className="bg-teal-700 mt-2  text-teal-700 w-8 flex justify-center items-center h-8 rounded-full">
              <p className="w-6 h-6 flex justify-center bg-teal-50 rounded-full">
                {data.company.name.charAt(0)}
              </p>
            </div>
            <div className="mt-2">
              <p className="text-sm lg:text- font-bold">
                {" "}
                {data.company.name.slice(0, 16)}
              </p>
              <p className="text-[10px] text-gray-400">
                {" "}
                {data.name.slice(0, 18)}
              </p>
              <p className="text-[8px] font-bold text-teal-700">
                {" "}
                {/* <FormatText
                  description={data.categories.map((cat) => cat.name)}
                /> */}
                {categoryNames.length > 0
                  ? data.categories.map((cat) => cat.name)
                  : "Unknown"}
              </p>
              <p className="flex gap-2 items-center text-[12px] sm:text-[11px] lg:text-[12px] my-1">
                <BsMap />
                {data.locations.map((loc) => loc.name.slice(0, 16))}
              </p>
            </div>
          </div>
          <div className="mt-2">
            <div
              onClick={() => handleBookmarkToggle(index)}
              className="flex ml-auto w-fit h-fit justify-end"
            >
              {isBookmarked ? (
                <div
                  onClick={() => handleRemoveClick(index)}
                  className="text-teal-700"
                >
                  <BsBookmarkFill />
                </div>
              ) : (
                <div onClick={handleAddBookmark} className="text-teal-700">
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
