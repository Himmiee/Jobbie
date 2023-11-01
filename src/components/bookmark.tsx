
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import { JobType } from "../helpers/dumps";
import { CardComponent } from "./card";
import { InfoModal } from "./modals";
import { useAppDispatch, useAppSelector } from "../store/hooks";


export const BookmarkComponent = () => {
  const [content, setContent] = useState<any>([]);
  const [popup, setPopup] = useState<boolean>(false);
  const [result, setResult] = useState<any>([]);
  const dispatch = useAppDispatch();
  const job = useAppSelector((state) => state.job.data);
  const [bookmarkState, setBookmarkState] = useState<boolean>(false);
  const bookmarkedData = useAppSelector((state) => state.bookmarks.bookmarks);


  const updateContent = (info: any) => {
    setContent([info]);
  };

  const filterCompany = (companyName: string) => {
    const newItems = job.filter(
      (item: JobType) => item.company.name === companyName
    );
    setResult(newItems);
  };

  return (
    <div>
      <div className="flex px-3 h-16 sm:px-10 item-center justify-start gap-4 border-gray-200 border-b-[1px]">
        <Link to={"/job"}>
          {" "}
          <div className="flex items-center h-full">
            <BsArrowLeftCircle size={21} className="text-gray-600" />
          </div>
        </Link>
        <h2 className="font-bold text-[17px] flex items-center h-full text-gray-600">
          Bookmarked Jobs
        </h2>
      </div>
      <div>
        {" "}
        {popup && (
          <div>
            {content.map((info: any, index: number) => {
              return (
                <InfoModal
                  data={info}
                  // setData={setData}
                  key={index}
                  index={index}
                  handleClick={() => {
                    setPopup(false);
                  }}
                  filterCompany={filterCompany}
                  result={result}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="my-8 mx-10">
        <div className="grid  sm:grid-cols-3  lg:grid-cols-4 gap-4">
          {bookmarkedData?.map((item: any, index: number) => (
            <div
              key={index}
              onClick={() => {
                updateContent(item);
              }}
            >
              <CardComponent
                data={item}
                setPopup={setPopup}
                index={index}
                setBookmarkState={setBookmarkState}
                // filterCompany={filterCompany}
              />
            </div>
          ))}
        </div>
        <div>
          {!bookmarkedData.length ? (
            <div className="h-fit my-6 justify-center item-center w-full">
              <img
                src="nothing.png"
                className="sm:w-[40%] w-[100%] justify-center m-auto"
                alt=""
              />
              <div className="flex text-[14px] sm:text-sm justify-center text-teal-700 m-auto">
                No Bookmark yet!
              </div>
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    </div>
  );
};
