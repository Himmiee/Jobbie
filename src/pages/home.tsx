import React, { useState, useEffect } from "react";
import { BsSearch, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FAQs } from "../helpers/dumps";
import NavbarComponent from "../components/navbar";
import FooterComponent from "../components/footer";
import { QuestionsMenu, Questions } from "../helpers/dumps";
import { FAQ } from "../helpers/dumps";
import ButtonComponent from "../components/button";

import AccordionComponent from "../components/accordion";

const HomeComponent = () => {
  const [data, setData] = useState(FAQs);
  const [acc, setAcc] = useState(Questions);

  return (
    <section className="">
      <div>
        <NavbarComponent />
      </div>
      <div className="wrap mx-6 sm:mx-24 mt-14 flex justify-center">
        <div className="upper">
          <div className="clip  justify-center flex  my-2">
            <p className="bg-gray-300 w-36  text-center rounded-full  text-[10px] text-gray-500">
              Your premium job space
            </p>
          </div>
          <div className="">
            <h3 className="text-center font-1000 my-4 sm:my-0 font-bold  bg-gradient-to-r from-teal-700 bg-clip-text text-transparent to-blue-950  sm:text-[32px]">
              Come to learn , to seek , to know <br />
              Leave us to serve.
            </h3>
            <p className="text-center text-[11px] sm:text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              doloruid dignissimos <br /> explicabo ducimus eius ratione ullam,
              placeat amet assumenda!
            </p>
            <div className="card flex justify-center">
              <div className="w-72 sm:w-96 flex items-center justify-between h-20 mt-6 mb-4 border-gray-100 rounded-md border-[1px]">
                <div className="one mx-2">
                  <p className="font-bold text-base sm:text-2xl flex justify-center">
                    25*
                  </p>
                  <p className="sm:text-[12px] text-[10px] text-gray-400">
                    39 million users
                  </p>
                </div>
                <div className="two mx-2">
                  <p className="font-bold text-base sm:text-2xl flex justify-center">
                    55*
                  </p>
                  <p className="sm:text-[12px] text-[10px] text-gray-400">
                    39 million users
                  </p>
                </div>
                <div className="three mx-2">
                  <p className="font-bold text-base sm:text-2xl flex justify-center">
                    75*
                  </p>
                  <p className="sm:text-[12px] text-[10px] text-gray-400">
                    39 million users
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <ButtonComponent
                className="cursor-pointer bg-teal-700 flex items-center justify-center gap-2 hover:bg-teal-600 w-24  text-white h-8 p-1 text-[13px] rounded-full"
                title="SignIn"
                icon={<BsArrowRight />}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-6 sm:mx-24 middle mt-10 flex justify-center">
        <img src="jobber.png" className="sm:w-[90%]" alt="" />
      </div>

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
                type="text"
                className="outline-none text-[12px] "
                placeholder="search jobs here..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-8 sm:mx-24 grid sm:grid-cols-3 mt-6">
        {data.map((item: FAQ) => {
          return (
            <div className="m-2 sm:w-56 lg:w-80 rounded-xl p-3">
              <div className="w-10  flex justify-center items-center h-10 rounded-full  text-slate-600 bg-slate-200">
                {item.icon}
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <h1 className="font-medium text-sm my-2">{item.title}</h1>
                <BsArrowRight />
              </div>
              <p className="text-[11px] text-gray-200">{item.info}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-2">
        <ButtonComponent
          className="bg-teal-700 cursor-pointer flex items-center justify-center gap-2 hover:bg-teal-600 w-32  text-white h-8 p-1 text-[13px] rounded-full"
          title="Browse More"
          icon={<BsArrowRight />}
        />
      </div>
      <div className="wrap px-8 sm:px-[120px] py-5 mt-8 pb-14 sm:pb-0 bg-teal-50 sm:h-[600px]">
        {" "}
        <div className="sm:flex sm:justify-between my-4 items-center ">
          <div className="">
            <div className="clip  justify-center sm:justify-start flex  my-2">
              <p className="bg-gray-300 w-36  text-center rounded-full  text-[10px] text-gray-500">
                Discover more jobs
              </p>
            </div>
            <div className="flex justify-center sm:justify-start">
              <h3 className="text-center sm:text-start font-1000 my-4 sm:my-0 font-bold  bg-gradient-to-r from-teal-700 bg-clip-text text-transparent to-blue-950  sm:text-[32px]">
                Discover and learn all once <br />
                Leave us to serve.
              </h3>
            </div>
          </div>

          <div className="flex justify-center my-2">
            <ButtonComponent
              className="bg-teal-700 cursor-pointer flex items-center justify-center gap-2 hover:bg-teal-600 w-24  text-white h-8 p-1 text-[13px] rounded-full"
              title="Discover"
              icon={<BsArrowRight />}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-3  w-full gap-10  lg:gap-[105px]">
          <div className=" sm:w-48 lg:w-80">
            <div className="w-full h-56 rounded-xl bg-gradient-to-b from-teal-200 to-teal-50 text-teal-200">
              .
            </div>
            <div className=" bg-gradient-to-t from-white to-slate-50 w-full p-4 rounded-b-xl">
              <h1 className="text-base mt-2 mb-1">Account Detail</h1>
              <p className="text-[10px] text-gray-300 pb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam dolor voluptatem id magnam voluptatibus, voluptates
              </p>
            </div>
          </div>
          <div className="sm:w-48 lg:w-80 ml-2 ">
            <div className="w-full h-56  rounded-xl bg-gradient-to-b from-teal-200 to-teal-50 text-teal-200">
              .
            </div>
            <div className=" bg-gradient-to-t from-white to-slate-50 w-full p-4 rounded-b-xl">
              <h1 className="text-base mt-2 mb-1">Account Detail</h1>
              <p className="text-[10px] text-gray-300 pb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam dolor voluptatem id magnam voluptatibus, voluptates
              </p>
            </div>
          </div>
          <div className="sm:w-48 lg:w-80">
            <div className="w-full h-56 rounded-xl bg-gradient-to-b from-teal-200 to-teal-50 text-teal-200">
              .
            </div>
            <div className=" bg-gradient-to-t from-white to-slate-50 w-full p-4 rounded-b-xl">
              <h1 className="text-base mt-2 mb-1">Account Detail</h1>
              <p className="text-[10px] text-gray-300 pb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam dolor voluptatem id magnam voluptatibus, voluptates
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-6 sm:mx-24 my-6  h-fit">
        <h3 className="text-center font-1000 my-8  sm:my-4 font-bold  bg-gradient-to-r from-teal-700 bg-clip-text text-transparent to-blue-950  sm:text-[32px]">
          What people say about us
        </h3>

        <div className="">
          {acc.map((item: QuestionsMenu, id: number) => {
            return (
              <div>
                <AccordionComponent data={item} key={id} id={id} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <FooterComponent/>
      </div>
    </section>
  );
};

export default HomeComponent;
