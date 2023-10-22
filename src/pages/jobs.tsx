import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/navbar";
import { InputHeader } from "../components/inputComponent";
import { CardComponent } from "../components/card";
import { JobProto } from "../helpers/dumps";
import { fetchData } from "../store/jobSlice";
import { JobType, RefType } from "../helpers/dumps";
import PGComponent from "../components/pagination";
import { PopupModal } from "../components/modals";
import FilterComponent from "../components/filter";
import { InfoModal } from "../components/modals";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import FooterComponent from "../components/footer";

const JobComponent = () => {
  const [content, setContent] = useState<any>([]);
  const [popup, setPopup] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(16);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const job = useAppSelector((state: any) => state.job.data);
  const [data, setData] = useState<JobType[]>(job);
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

  const filterItems = (cart: any) => {
    console.log(data);
    const newItems = job.filter((updated: JobType) => {
      return updated.categories.map((itm) => itm.name) === cart;
    });

    setData(newItems);
    console.log(newItems);
    console.log(cart);
  };
  const filterCompany = (companyName: string) => {
    const newItems = job.filter(
      (item: JobType) => item.company.name === companyName
    );
    setResult(newItems);
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    // setIsLoading(true);
    dispatch(fetchData()).then(() => {
      setData(job);
      setIsLoading(false);
    });
  }, [filter, dispatch]);

  const updateContent = (info: any) => {
    setContent([info]);
  };

  return (
    <section className="">
      <div>
        <NavbarComponent />
      </div>

      <div className="mx-8 sm:mx-24 mt-24">
        {popup && (
          <div>
            {content.map((info: any, index: number) => {
              return (
                <InfoModal
                  data={info}
                  setData={setData}
                  key={index}
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
        <div className=""> {/* <PopupModal /> */}</div>
        <InputHeader
          data={data}
          setFilter={setFilter}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            setSearch(e.target.value);
          }}
        />
        <div className="filters my-8 overflow-y-hidden flex gap-4 overflow-x-auto tbl">
          <FilterComponent
            setData={setData}
            filterItems={filterItems}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            data={data}
          />
        </div>

        <div className="h-[450px] sm:h-[500px] overflow-y-auto tbl">
          <div className="">
            {!data.length ? (
              <div className="h-fit item-center w-full">
                {" "}
                <img
                  src="nothing.png"
                  className="w-[40%] justify-center m-auto"
                  alt=""
                />
                <div className="flex justify-center text-teal-700 m-auto">
                  Nothing here yet...
                </div>{" "}
              </div>
            ) : (
              ""
            )}
            {search ? (
              <div className="grid sm:grid-cols-3  lg:grid-cols-4 gap-4">
                {data
                  ?.filter((item) => {
                    return search === " " ? item : item.name.includes(search);
                  })
                  ?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          updateContent(item);
                          // setPopup(true);
                        }}
                      >
                        <CardComponent
                          data={item}
                          setPopup={setPopup}
                          index={index}
                          filterCompany={filterCompany}
                        />
                      </div>
                    );
                  })}
              </div>
            ) : (
              <div className="grid overflow-scroll tbl sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
                      filterCompany={filterCompany}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mx-8 sm:mx-24">
        <PGComponent
          totalPosts={data?.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default JobComponent;
