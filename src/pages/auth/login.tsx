import React, { useState, useEffect } from "react";
import ButtonComponent from "../../components/button";

const LoginComponent = () => {
  const [nav, setNav] = useState<boolean>(false);
  useEffect(() => {
    setNav(false);
  }, []);
  return (
    <section className="bg-gradient-to-t bg-opacity-70 from-teal-700 flex items-center justify-center flex-col to-blue-950 w-full h-[100vh]">
      <div className="">
        <div className="w-72  rounded-2xl h-72 sm:bg-gray-800 bg-opacity-60 ">
          <div>
            <p className="text-teal-700 italic font-sans flex justify-center font-bold pt-3">
              Jobber
            </p>
            <h3 className="flex justify-center text-sm mt-2 text-white">
              User Login.
            </h3>
          </div>
          <div className="w-full mt-3">
            <div className="flex justify-center">
              <label htmlFor="" className="text-white">
                <p className="text-[12px] my-1">Username:</p>
                <input
                  type="text"
                  className="flex justify-center px-2 w-64 h-7 text-[12px] rounded-md sm:opacity-80 opacity-10 sm:bg-gray-600 border-gray-700 outline-none border-[1px]"
                />
              </label>
            </div>
            <div className="flex justify-center my-2">
              <label htmlFor="" className="text-white">
                <p className="text-[12px] my-1">Password:</p>
                <input
                  type="text"
                  className="flex justify-center px-2 w-64 h-7 text-[12px] rounded-md sm:opacity-80 opacity-10 sm:bg-gray-600 border-gray-700 outline-none border-[1px]"
                />
              </label>
            </div>
          </div>
          <div className="flex mx-[18px] my-1 items-center justify-start gap-2">
            <select
              name="d"
              id=""
              className="rounded-full outline-none h-4 w-4"
            ></select>
            <p className="text-[12px] text-white font-thin ">Remember Me</p>
          </div>
          <div>
            <ButtonComponent
              className="bg-teal-700 text-sm w-64 h-7 my-2 cursor-pointer hover:bg-teal-900 flex justify-center items-center text-white rounded-lg "
              title="SignIn"
              icon={null}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;
