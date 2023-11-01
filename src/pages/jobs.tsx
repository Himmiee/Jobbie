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
  const [currentPage, setCurrentPage] = useState<number>(2);
  const [postPerPage, setPostPerPage] = useState<number>(40);
  const [dispatchState, setDispatchState] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const [result, setResult] = useState<any>([]);
  const [page, setPage] = useState<any>([]);
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

  const setInitialJobData = (data: any) => {
    dispatch(setInitialData(data));
  };
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const filterCompany = (companyName: string) => {
    const newItems = job.filter(
      (item: JobType) => item.company.name === companyName
    );
    setResult(newItems);
  };

  const getJobs = async (pageNo: number) => {
    setIsLoading(true);
    await dispatch(fetchData(pageNo))
      .then((response) => {
        setInitialJobData(response.payload);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // const getJobs = async (clickedPage: number, pagesToFetch: number) => {
  //   setIsLoading(true);
  //   const allData = [];

  //   const startPage = clickedPage;
  //   const endPage = Math.min(clickedPage + 2, pagesToFetch);

  //   for (let page = startPage; page <= endPage; page++) {
  //     try {
  //       const response = await dispatch(fetchData(page));
  //       allData.push(...response.payload);
  //     } catch (error) {
  //       console.error("Error fetching data for page", page, ":", error);
  //     }
  //   }

  //   setInitialJobData(allData);
  //   dispatch(getData(allData));
  //   setIsLoading(false);
  // };

  useEffect(() => {
    getJobs(currentPage);
  }, [currentPage]);

  const updateContent = (info: JobType) => {
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
            {content.map((info: JobType, index: number) => {
              return (
                <InfoModal
                  data={info}
                  key={info.id}
                  index={info.id}
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
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            setSearch(e.target.value);
          }}
        />
        <div className="filters my-8 overflow-y-hidden flex gap-4 overflow-x-auto tbl">
          <div>
            {" "}
            <FilterComponent
              setSelectedCategory={setSelectedCategory}
              defaultData={defaultData}
            />
          </div>
        </div>

        <div className="h-[65vh] relative overflow-y-auto tbl">
          {search &&
          !job.some((item: JobType) => item.name.includes(search)) ? (
            <div className="h-fit my-6 justify-center item-center w-full">
              <img
                src="nothing.png"
                className="sm:w-[40%] w-[100%] justify-center m-auto"
                alt=""
              />
              <div className="flex text-[14px] sm:text-sm justify-center text-teal-700 m-auto">
                Oops, No Results Found!
              </div>
            </div>
          ) : (
            <div className="">
              {isLoading ? <LoadingComponent /> : ""}
              {search ? (
                <div className="grid xs:grid-cols-5  sm:grid-cols-3  lg:grid-cols-4 gap-4">
                  {job
                    ?.filter((item: JobType) => {
                      return search === " " ? item : item.name.includes(search);
                    })
                    ?.map((item: JobType, index: number) => {
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
                  {job?.map((item: JobType, index: number) => (
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

      <div className="fixed bg-white  bottom-0  justify-center w-full  sm:mt-2 ">
        <PGComponent
          totalPosts={job?.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default JobComponent;
