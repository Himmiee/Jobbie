import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/navbar";
import { InputHeader } from "../components/inputComponent";
import { CardComponent } from "../components/card";
import { JobProto } from "../helpers/dumps";
import { fetchData } from "../store/jobSlice";
import { JobType, RefType } from "../helpers/dumps";
import PGComponent from "../components/pagination";
import { PopupModal } from "../components/modals";
import { InfoModal } from "../components/modals";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import FooterComponent from "../components/footer";

const JobComponent = () => {
  const [data, setData] = useState(JobProto);
  const [content, setContent] = useState<any>([]);
  const [popup, setPopup] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<boolean>(false);
  const job = useAppSelector((state) => state.job);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(16);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);
  const category = data.map((item) => item.categories.map((cat) => cat.name));

  const filterItems = (cart: any) => {
    console.log(data);
    const newItems = JobProto.filter((updated) => {
      return updated.categories.map((itm) => itm.name) === cart;
    });

    setData(newItems);
    console.log(newItems);
    console.log(cart);
  };
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
    // console.log(job);
  }, [filter]);

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
                  key={index}
                  handleClick={() => setPopup(false)}
                />
              );
            })}
          </div>
        )}
        <div className=""> {/* <PopupModal /> */}</div>
        <InputHeader
          filterItems={filterItems}
          data={data}
          handleJob={() => {
            filterItems("Software Engineering");
          }}
          setFilter={setFilter}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            setSearch(e.target.value);
            console.log(search);
          }}
        />

        <div className="h-[450px] sm:h-[500px] overflow-y-auto tbl sm:overflow-y-hidden">
          <div className="">
            {search ? (
              <div className="grid overflow-scroll  tbl sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {data
                  .filter((item) => {
                    return search === " " ? item : item.name.includes(search);
                  })
                  .map((item, index) => {
                    // console.log("df", item.name);
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
                        />
                      </div>
                    );
                  })}
              </div>
            ) : (
              <div className="grid overflow-scroll  tbl sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentPost.map((item, index) => {
                  // console.log("df", item.name);
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
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mx-8 sm:mx-24">
        <PGComponent
          totalPosts={data.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div>
        <FooterComponent />
      </div>
    </section>
  );
};

export default JobComponent;
