import React, { useState, useEffect } from "react";
import { IoMdFlame } from "react-icons/io";
import { motion } from "framer-motion";
import NavbarComponent from "../components/navbar";
import FooterComponent from "../components/footer";
import { BsCheckCircleFill } from "react-icons/bs";

const FeatureComponent = () => {
  const [nav, setNav] = useState<boolean>(false);
  useEffect(() => {
    setNav(true);
  }, []);
  return (
    <section className="">
      <div>
        <NavbarComponent />
      </div>
      <div className="sm:mx-28 mx-8 sm:flex justify-between mt-20 sm:mt-10 h-[450px] items-center">
        <div className="left sm:w-1/2">
          <div className="flex justify-center flex-col items-center sm:items-start">
            <motion.h1
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="lg:text-[48px] text-[32px] font-bold sm:text-[28px] bg-gradient-to-r from-teal-700 text-center sm:text-start text-transparent to-blue-950 bg-clip-text"
            >
              A feature &&
              <br /> Know now and allat!{" "}
            </motion.h1>
            <p className="text-[10px] sm:text-[12px] text-center sm:text-start sm:my-3 my-2 sm:mr-3 lg:mr-32">
              Lorem ipsum dolor sitadipisicing elit. Aperiam cum eveniet ab
              loribus , debitis earumdoloribus unde officiis ex debitis earu!
            </p>
            <p className="text-[11px] sm:text-[12px] mb-3 text-gray-400">
              we do what we do do, wahalurddddddd
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 my-3 sm:my-0 flex justify-center sm:justify-end mb-3">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="w-[80%] sm:w-[100%]  border-teal-700 border-2 p-3"
          >
            <img src="jobber.png" className="" alt="" />
          </motion.div>
        </div>
      </div>
      <motion.section  className="my-12 rounded-[90px] bg-teal-50">
        <h1 className="sm:text-3xl text-2xl font-bold flex justify-center pt-8 sm:font-medium bg-gradient-to-r from-teal-700 text-transparent to-blue-950 bg-clip-text">
          The features
        </h1>
        <p className="flex justify-center mt-2 mb-6 text-[11px] sm:text-[12px] text-gray-400">
          A short list of dem features, what we do do, wahalurddddddd
        </p>
        <div className="w-full grid item-center place-content-center gap-24 py-8 sm:grid-cols-2">
          <div className="lg:w-2/2 sm:w-1/2 mx-8 flex sm:justify-start justify-center flex-col items-center sm:items-start  sm:mx-28 ">
            <div className="w-12 flex justify-center items-center h-12 my-1 rounded-full bg-teal-700">
              <BsCheckCircleFill size={20} className="text-white" />
            </div>
            <p className="text-base font-bold text-teal-700">Righty</p>
            <p className="text-[10px] sm:text-start text-center text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati hic, qui nostrum impedit sequi mol qui nostrum impedit
              sequi mol enim saepe necessitatibus labore nihil ipsam earum dicta
              assumenda, qui nostrum impedit sequi mol edit sequi mol qui
              nostrum impedit sequi mol enim saepe necessitatibus labore nihil
              ipsam earum dicta assumenda, qui nostrum impedit sequi mol
            </p>
          </div>
          <div className="lg:w-2/2 sm:w-1/2 mx-8 sm:mx-28 flex justify-center">
            <img
              src="fm.png"
              className="rounded-full w-80 sm:w-[400px] h-56"
              alt="image"
            />
          </div>

          <div className="lg:w-2/2 sm:w-1/2 mx-8 sm:mx-28 flex justify-center">
            <img
              src="home.png"
              className="rounded-full w-80 sm:w-[500px] h-56"
              alt="image"
            />
          </div>
          <div className="lg:w-2/2 sm:w-1/2 mx-8 flex sm:justify-start justify-center flex-col items-center sm:items-start  sm:mx-28 ">
            <div className="w-12 flex justify-center items-center h-12 my-1 rounded-full bg-teal-700">
              <BsCheckCircleFill size={20} className="text-white" />
            </div>
            <p className="text-base font-bold text-teal-700">Righty</p>
            <p className="text-[10px] text-center sm:text-start text-gray-400">
              Lorem ipsum dolor, sit amet consectetur edit sequi mol qui nostrum
              impedit sequi mol enim saepe necessitatibus labore nihil ipsam
              earum dicta assumenda, qui nostrum impedit sequi mol adipisicing
              elit. Obcaecati hic, qui nostrum impedit sequi mol qui nostrum
              impedit sequi mol enim saepe necessitatibus labore nihil ipsam
              earum dicta assumenda, qui nostrum impedit sequi mol
            </p>
          </div>
          <div className="lg:w-2/2 sm:w-1/2 mx-8 flex sm:justify-start justify-center flex-col items-center sm:items-start  sm:mx-28 ">
            <div className="w-12 flex justify-center items-center h-12 my-1 rounded-full bg-teal-700">
              <BsCheckCircleFill size={20} className="text-white" />
            </div>
            <p className="text-base font-bold text-teal-700">Righty</p>
            <p className="text-[10px] text-center sm:text-start text-gray-400">
              Lorem ipsum dolor, sit qui nostrum impedit sequi mol qui nostrum
              impedit sequi mol amet consectetur adipisicing elit. Obcaecati
              hic, enim saepe necessitatib edit sequi mol qui nostrum impedit
              sequi mol enim saepe necessitatibus labore nihil ipsam earum dicta
              assumenda, qui nostrum impedit sequi mol us labore nihil ipsam
              earum dicta assumenda, qui nostrum impedit sequi mol
            </p>
          </div>
          <div className="lg:w-2/2 sm:w-1/2 mx-8 sm:mx-28 flex justify-center">
            <img
              src="type.png"
              className="rounded-full  w-80 sm:w-[400px] h-56"
              alt="image"
            />
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0.5, scale : 0.5}}
      whileInView={{ opacity: 1, scale : 1}}
      transition={{duration: 0.1}} className="sm:h-96 px-8 sm:px-28 ">
        <h1 className="flex justify-center text-teal-700 font-medium text-lg sm:my-6">
          More on the products
        </h1>
        <div className="sm:flex justify-between gap-3 ">
          <div className="border-gray-100 border-[1px] my-2 sm:my-0 sm:w-48 w-full h-56 flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center">
              <IoMdFlame />
            </div>
            <p className="text-base my-1">Heyyo Bia</p>
            <p className="sm:text-[10px] text-[12px] text-center text-gray-400">
              Lorem ipsum dolblanditiis similique assumenda maioretemporibus sit
              officia, esse aliquid?
            </p>
          </div>
          <div className="border-gray-100 border-[1px] my-2 sm:my-0 sm:w-48 w-full h-56 flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center">
              <IoMdFlame />
            </div>
            <p className="text-base my-1">Heyyo Bia</p>
            <p className="sm:text-[10px] text-[12px] text-center text-gray-400">
              Lorem ipsum dolblanditiis similique assumenda maioretemporibus sit
              officia, esse aliquid?
            </p>
          </div>
          <div className="border-gray-100 border-[1px] my-2 sm:my-0 sm:w-48 w-full h-56 flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center">
              <IoMdFlame />
            </div>
            <p className="text-base my-1">Heyyo Bia</p>
            <p className="sm:text-[10px] text-[12px] text-center text-gray-400">
              Lorem ipsum dolblanditiis similique assumenda maioretemporibus sit
              officia, esse aliquid?
            </p>
          </div>
          <div className="border-gray-100 border-[1px] my-2 sm:my-0 sm:w-48 w-full h-56 flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center">
              <IoMdFlame />
            </div>
            <p className="text-base my-1">Heyyo Bia</p>
            <p className="sm:text-[10px] text-[12px] text-center text-gray-400">
              Lorem ipsum dolblanditiis similique assumenda maioretemporibus sit
              officia, esse aliquid?
            </p>
          </div>
        </div>
      </motion.section>
      <div>
        <FooterComponent />
      </div>
    </section>
  );
};

export default FeatureComponent;
