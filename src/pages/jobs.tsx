import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/navbar";
import { InputHeader } from "../components/inputComponent";
import { CardComponent } from "../components/card";
import { JobProto } from "../helpers/dumps";
import { fetchData } from "../store/jobSlice";
import { JobType } from "../helpers/dumps";
import PGComponent from "../components/pagination";
import { PopupModal } from "../components/modals";
import FilterComponent from "../components/filter";
import LoadingComponent from "../components/loader";
import { InfoModal } from "../components/modals";
import { getData } from "../store/jobSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setInitialData } from "../store/initialDataSlice";

const JobComponent = () => {
  const [content, setContent] = useState<any>([]);
  const [popup, setPopup] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(40);
  const [dispatchState, setDispatchState] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const [result, setResult] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [bookmarkState, setBookmarkState] = useState<boolean>(false);
  const job = useAppSelector((state: any) => state.job.data);
  const filteredData = useAppSelector((state) => state.job.filteredData);
  const defaultData = useAppSelector((state) => state.initialData.data);
  const [data, setData] = useState<JobType[]>(job);
  const currentPost = job.slice(firstPostIndex, lastPostIndex);
  const dispatch = useAppDispatch();
  const bookmarkMessage = useAppSelector(
    (state) => state.bookmarks.popupMessage
  );

  const setInitialJobData = (data: JobType) => {
    dispatch(setInitialData(data));
  };

  const filterCompany = (companyName: string) => {
    const newItems = job.filter(
      (item: JobType) => item.company.name === companyName
    );
    setResult(newItems);
  };

  const getJobs = async () => {
    setIsLoading(true);
    await dispatch(fetchData())
      .then((response) => {
        setInitialJobData(response.payload);

        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getJobs();
    // if (bookmarkState === true) {
    //   setTimeout(() => {
    //     setBookmarkState(false);
    //   }, 3000);
    // }
  }, []);

  const updateContent = (info: any) => {
    setContent([info]);
  };

  return (
    <section className="">
      <div>
        <NavbarComponent />
      </div>

      <div className="mx-8 sm:mx-24 mt-24">
        {/* {bookmarkState ? <PopupModal info={bookmarkMessage} closeState={bookmarkState} setCloseState={setBookmarkState} /> : " "} */}
        {popup && (
          <div>
            {content.map((info: any, index: number) => {
              return (
                <InfoModal
                  data={info}
                  setData={setData}
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

        <InputHeader
          data={job}
          setFilter={setFilter}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            setSearch(e.target.value);
          }}
        />
        <div className="filters my-8 overflow-y-hidden flex gap-4 overflow-x-auto tbl">
          <div>
            {" "}
            <FilterComponent
              setData={setData}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              data={filteredData}
              defaultData={defaultData}
            />
          </div>
        </div>

        <div className="h-[65vh]   overflow-y-auto tbl">
          {search && !job.some((item: any) => item.name.includes(search)) ? (
            <div className="h-fit my-6 justify-center item-center w-full">
              <img
                src="nothing.png"
                className="w-[40%] justify-center m-auto"
                alt=""
              />
              <div className="flex justify-center text-teal-700 m-auto">
                Oops, No Results Found!
              </div>
            </div>
          ) : (
            <div className="">
              {isLoading ? <LoadingComponent /> : ""}
              {search ? (
                <div className="grid xs:grid-cols-5  sm:grid-cols-3  lg:grid-cols-4 gap-4">
                  {job
                    ?.filter((item: any) => {
                      return search === " " ? item : item.name.includes(search);
                    })
                    ?.map((item: any, index: number) => {
                      return (
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
                          />
                        </div>
                      );
                    })}
                </div>
              ) : (
                <div className="grid overflow-y-scroll tbl xs:grid-cols-5  sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {currentPost?.map((item: any, index: number) => (
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
              )}
            </div>
          )}
        </div>
      </div>

      <div className="   sm:mt-3 ">
        <PGComponent
          totalPosts={job?.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default JobComponent;
