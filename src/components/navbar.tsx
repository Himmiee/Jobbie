import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsX } from "react-icons/bs";
import { IoReorderThreeSharp } from "react-icons/io5";
import ButtonComponent from "./button";

const NavbarComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const actLink =
    "border-teal-700 font-bold bg-teal-700 text-white sm:bg-white flex justify-center sm:py-0 w-full sm:border-b-2 py-2 sm:h-6 sm:text-teal-700 transition-all";
  const norm =
    "z-10  flex justify-center  transition-all py-2 border-gray-200 border-b-[1px] bg-white sm:border-none sm:py-0  h-full border-gray-200 ";
  return (
    <section className="">
      <nav className="z-10 fixed  w-full sm:w-screen  top-0 sm:z-0 bg-white  sm:flex items-center justify-between sm:py-3 h-16  border-gray-100 sm:border-b-[1px] border-[1px]  sm:px-24">
        <div className="flex sm:hidden w-full px-6 mt-3 mb-2 transition-all text-teal-700  justify-between ">
          <div className="text-xl italic font-bold">Jobber</div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <BsX size={32} /> : <IoReorderThreeSharp size={32} />}
          </div>
        </div>
        <ul
          className={`${
            open ? "mt-0" : "-mt-56 sm:-mt-0"
          } flex flex-col sm:flex-row sm:gap-6 font-medium text-gray-400 text-[13px] sm:text-[15px] cursor-pointer`}
        >
          <NavLink
            to={"/home"}
            className={({ isActive }) => {
              return isActive ? actLink : norm;
            }}
          >
            {" "}
            <li>Home</li>
          </NavLink>
          <NavLink
            to={"/feature"}
            className={({ isActive }) => {
              return isActive ? actLink : norm;
            }}
          >
            {" "}
            <li>Features</li>
          </NavLink>
          <NavLink
            to={"/job"}
            className={({ isActive }) => {
              return isActive ? actLink : norm;
            }}
          >
            {" "}
            <li>Jobs</li>
          </NavLink>
        </ul>
        <div className="z-10  sm:z-0 flex flex-col  sm:flex-row  sm:gap-4 cursor-pointer">
          <Link to={"/"}>
            <ButtonComponent
              onClick={null}
              className="bg-teal-600 z-10 sm:z-0 sm:bg-white py-2 sm:py-0 text-white border-gray-300 sm:border-[1px] sm:h-8   sm:hover:bg-teal-700 sm:hover:text-white w-full sm:w-20 flex justify-center items-center sm:text-gray-400 p-1 text-[13px] sm:text-[13px] sm:rounded-full"
              title="SignIn"
              icon={null}
            />
          </Link>
          <Link to={"/register"}>
            <ButtonComponent
              onClick={null}
              className="hidden sm:bg-teal-700 hover:bg-teal-600 w-20 sm:flex justify-center sm:text-white h-8 p-1 text-[15px] sm:text-[13px] items-center text-gray-400 sm:rounded-full"
              title="Sign Up"
              icon={null}
            />
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default NavbarComponent;
