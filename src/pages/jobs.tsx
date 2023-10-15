import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/navbar";
import { InputHeader } from "../components/inputComponent";
import { CardComponent } from "../components/card";
import { JobProto } from "../helpers/dumps";
import { fetchData } from "../store/jobSlice";
import { JobType, RefType } from "../helpers/dumps";
import { PopupModal } from "../components/modals";
import { InfoModal } from "../components/modals";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import FooterComponent from "../components/footer";
import PaginationComponent from "../components/pagination";

const JobComponent = () => {
  const [data, setData] = useState(JobProto);
  const dispatch = useAppDispatch();
  const [content, setContent] = useState<any>([]);
  const [popup, setPopup] = useState<boolean>(false); // const job = useAppSelector((state) => state.job.data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const updateContent = (info: any) => {
    setContent([info]);
  };
  return (
    <section className="">
      <div>
        <NavbarComponent />
      </div>

      <div className="mx-8 sm:mx-24 mt-24">
        <div

        >
          {content.map((info: any, index: number) => {
            return <InfoModal data={info} key={index} />;
          })}
        </div>
        <div className=""> {/* <PopupModal /> */}</div>
        <InputHeader />
        <div className="grid h-[450px] sm:h-fit overflow-scroll tbl sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item, index) => {
            console.log("df", item.name);
            return (
              <div
                key={index}
                onClick={() => {
                  updateContent(item);
                  setPopup(true);
                }}
              >
                <CardComponent data={item} index={index} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-8 sm:mx-28">
        <PaginationComponent />
      </div>
      <div>
        <FooterComponent />
      </div>
    </section>
  );
};

export default JobComponent;
