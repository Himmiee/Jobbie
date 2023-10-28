import React, { useState, useEffect, useRef } from "react";
import ButtonComponent from "../../components/button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import {
  setEmail,
  setPassword,
  setName,
  registrationStart,
  registrationFailure,
  registrationSuccess,
} from "../../store/registerslice";
import { auth } from "../../firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterComponent = () => {
  const [nav, setNav] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [eyeActive, setEyeActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading = useAppSelector((state) => state.register.loading);
  const { name, email, password } = useAppSelector((state) => state.register);
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };
  const handleRegister = async (
    name: string,
    email: string,
    password: string
  ) => {
    dispatch(registrationStart());
    try {
      const userInfo = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userInfo.user;
      dispatch(registrationSuccess(user.providerData));
      dispatch(setEmail(""));
      dispatch(setPassword(""));
      dispatch(setName(""));
      navigate("/login");
      // console.log(auth.currentUser?.uid);
    } catch (error: any) {
      console.log(error);
      dispatch(registrationFailure(error.message));
    }
  };

  useEffect(() => {
    setNav(false);
  }, []);
  return (
    <section className="bg-gradient-to-t bg-opacity-70 from-teal-700 flex items-center justify-center flex-col to-blue-950 w-full h-[100vh]">
      <h3 className="text-teal-700 hidden sm:flex italic absolute top-6 left-12 font-bold text-2xl">
        Jobber.
      </h3>
      <div className="">
        <div className="w-72  rounded-2xl h-[340px] sm:bg-gray-800 bg-opacity-60 ">
          <div>
            <p className="text-teal-700 italic font-sans flex justify-center font-bold pt-3">
              Jobber
            </p>
            <h3 className="flex justify-center text-sm mt-2 text-white">
              User Registration.
            </h3>
          </div>
          <form className="w-full mt-3">
            <div className="flex justify-center">
              <label htmlFor="" className="text-white">
                <p className="text-[12px] my-1">Username:</p>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  className="flex justify-center px-2 w-64 h-7 text-[12px] rounded-md sm:opacity-80 text-white bg-white bg-opacity-10 sm:bg-gray-600 border-gray-700 outline-none sm:border-[1px]"
                />
              </label>
            </div>
            <div className="flex justify-center">
              <label htmlFor="" className="text-white">
                <p className="text-[12px] mt-2 mb-1">Email Address:</p>
                <input
                  value={email}
                  onChange={handleEmail}
                  ref={inputRef}
                  type="text"
                  className="flex justify-center px-2 w-64 h-7 text-[12px] rounded-md sm:opacity-80 text-white bg-white bg-opacity-10 sm:bg-gray-600 border-gray-700 outline-none sm:border-[1px]"
                />
              </label>
            </div>
            <div className="flex justify-center my-2">
              <label htmlFor="" className="text-white">
                <p className="text-[12px] my-1">Password:</p>
                <div className="flex justify-between item-center px-2 w-64 h-7 text-[12px] rounded-md sm:opacity-80 bg-opacity-10 bg-white sm:bg-gray-600 border-gray-700 outline-none sm:border-[1px]">
                  <input
                    value={password}
                    onChange={handlePassword}
                    ref={inputRef}
                    type="password"
                    className="rounded-md  w-[230px] bg-transparent outline-none "
                  />
                  <div
                    onClick={() => {
                      inputRef.current.type === "password"
                        ? (inputRef.current.type = "text")
                        : (inputRef.current.type = "password");
                      setEyeActive(!eyeActive);
                    }}
                    className="flex text-white justify-center cursor-pointer items-center"
                  >
                    {eyeActive ? <BsEye /> : <BsEyeSlash />}
                  </div>
                </div>
              </label>
            </div>
          </form>
          <div className="flex mx-[18px] my-1 items-center justify-between  gap-2">
            <div className="flex gap-2">
              {" "}
              <input type="checkbox" className="cursor-pointer" name="" id="" />
              <p className="text-[12px] text-white font-thin ">Remember Me</p>
            </div>
            <div>
              <Link
                onClick={() => {
                  dispatch(setName(""));
                  dispatch(setEmail(""));
                  dispatch(setPassword(""));
                }}
                to={"/login"}
              >
                <p className=" italic text-[10px]">SignIn?</p>
              </Link>
            </div>
          </div>
          <div>
            <ButtonComponent
              onClick={() => handleRegister(name, email, password)}
              className="bg-teal-700 text-[12px] sm:text-sm w-64 h-7 my-2 cursor-pointer hover:bg-teal-900 flex justify-center items-center text-white rounded-lg "
              title={isLoading ? "Signing Up..." : "Sign Up"}
              icon={null}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterComponent;
