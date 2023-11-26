import React, { useState, useEffect, ChangeEvent } from "react";
import { BsSearch, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Link, useNavigate } from "react-router-dom";
import { getData } from "../store/jobSlice";
import { FAQs, FAQ, JobType } from "../helpers/dumps";
import { motion } from "framer-motion";
import ButtonComponent from "./button";

export const CategoriesComponent = () => {
  const [data, setData] = useState(FAQs);
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const job = useAppSelector((state) => state.job.data);
  const navigate = useNavigate();
  const filterContents = (category: string) => {
    const filteredData = job.filter((item: JobType) =>
      item.categories.some((cat) => cat.name === category)
    );

    return dispatch(getData(filteredData));
  };
  return (
    <>
      <div className="mx-6 sm:mx-24 more my-2 mt-12 sm:mt-0  flex justify-center">
        <div>
          <div className="clip  justify-center flex  my-2">
            <p className="bg-gray-300 w-36  text-center rounded-full  text-[10px] text-gray-500">
              Discover more jobs
            </p>
          </div>
          <div className="">
            <h3 className="text-center font-1000 my-4 sm:my-0 font-bold  bg-gradient-to-r from-teal-700 bg-clip-text text-transparent to-blue-950  sm:text-[32px]">
              Explore and learn all at once time <br />
              Leave us to serve.
            </h3>
            <div className="flex w-[300px]  sm:w-full gap-2 h-8 items-center text-gray-400 text-sm font-medium border-[1px] border-gray-100 px-4 rounded-full">
              <BsSearch size={12} />
              <input
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setValue(e.target.value);
                  console.log(value);
                }}
                type="text"
                className="outline-none text-[12px] "
                placeholder="search jobs here..."
              />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
      >
        {value && !data.some((item) => item.title.includes(value)) ? (
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
          <motion.div
            initial={{ opacity: 0.5, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
            className="mx-8 sm:mx-24 grid sm:grid-cols-3  mt-6"
          >
            {data
              .filter((item: FAQ) => {
                return value === " " ? item : item.title.includes(value);
              })
              .map((item: FAQ, index: number) => (
                <div
                  className="m-2 sm:w-56 lg:w-80 border-slate-50 cursor-pointer hover:border-teal-700 hover:border-[1px] border-[1px] rounded-xl p-5"
                  key={index}
                >
                  <div className="w-10 flex justify-center items-center h-10 rounded-full text-teal-700 bg-teal-50">
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <h1 className="font-medium text-sm my-2">{item.title}</h1>
                    {/* <Link to={"/job"}> */}
                    <div
                      key={item.title}
                      onClick={() => {
                        navigate("/job");
                        // filterContents(item.title);
                      }}
                    >
                      <BsArrowRight />
                    </div>
                    {/* </Link> */}
                  </div>
                  <p className="text-[10px] text-gray-400">{item.info}</p>
                </div>
              ))}
          </motion.div>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
        className="flex justify-center my-2"
      >
        <ButtonComponent
          onClick={() => {}}
          className="bg-teal-700 lg cursor-pointer flex items-center justify-center gap-2 hover:bg-teal-600 w-32  text-white h-8 p-1 text-[13px] rounded-full"
          title="Browse More"
          icon={<BsArrowRight />}
        />
      </motion.div>
    </>
  );
};
