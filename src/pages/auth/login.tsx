import React, { useState, useEffect, useRef } from "react";
import { BsArrowLeft, BsArrowRight, BsEye, BsEyeSlash } from "react-icons/bs";
import ButtonComponent from "../../components/button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  loginStart,
  setEmail,
  setPassword,
  loginFailure,
  loginSuccess,
} from "../../store/loginslice";
import { PopupModal } from "../../components/modals";
import { auth } from "../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [nav, setNav] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [eyeActive, setEyeActive] = useState<boolean>(false);
  const [popupState, setPopupState] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector(
    (state) => state.register.isAuthenticated
  );
  const popupMessage = useAppSelector((state) => state.register.popupMessage);
  const isLoading = useAppSelector((state) => state.login.loading);
  const { email, password } = useAppSelector((state) => state.login);
  const [loadOnce, setLoadOnce] = useState<boolean>(true);
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };
  const handleLogin = async (email: string, password: string) => {
    dispatch(loginStart());
    try {
      const userInfo = await signInWithEmailAndPassword(auth, email, password);
      const user = userInfo.user;
      dispatch(loginSuccess(user.providerData));
      console.log(auth.currentUser?.email);
      dispatch(setEmail(""));
      dispatch(setPassword(""));
      localStorage.setItem("is_authenticated", JSON.stringify(true));
      navigate("/");
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };

  useEffect(() => {
    setNav(false);
    // if (isAuthenticated && loadOnce) {
    //   setLoadOnce(false);
    //   setPopupState(true);
    //   setTimeout(() => {
    //     setPopupState(false);
    //   }, 3000);
    // }
  }, []);
  return (
    <section className="bg-gradient-to-t bg-opacity-70 from-teal-700 flex items-center justify-center flex-col to-blue-950 w-full h-[100vh]">
      {popupState ? (
        <PopupModal
          setCloseState={setPopupState}
          closeState={popupState}
          info={popupMessage}
        />
      ) : (
        ""
      )}
      <h3 className="text-teal-700 hidden sm:flex italic absolute top-6 left-12 font-bold text-2xl">
        Jobber.
      </h3>
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
          <form className="w-full mt-3">
            <div className="flex justify-center">
              <label htmlFor="" className="text-white">
                <p className="text-[12px] my-1">Username:</p>
                <input
                  type="text"
                  value={email}
                  onChange={handleEmail}
                  className="flex justify-center px-2 w-64 h-7 text-[12px] rounded-md sm:opacity-80 text-white bg-white bg-opacity-10 sm:bg-gray-600 border-gray-700 outline-none sm:border-[1px]"
                />
              </label>
            </div>
            <div className="flex justify-center my-2">
              <label htmlFor="" className="text-white">
                <p className="text-[12px] my-1">Password:</p>
                <div className="flex justify-between item-center px-2 w-64 h-7 text-[12px] rounded-md sm:opacity-80 bg-opacity-10 bg-white sm:bg-gray-600 border-gray-700 outline-none sm:border-[1px]">
                  <input
                    ref={inputRef}
                    value={password}
                    onChange={handlePassword}
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
              {" "}
              <Link
                onClick={() => {
                  dispatch(setEmail(""));
                  dispatch(setPassword(""));
                }}
                to={"/register"}
              >
                <p className=" italic text-[10px]">SignUp?</p>
              </Link>
            </div>
          </div>

          <div>
            <ButtonComponent
              onClick={() => {
                handleLogin(email, password);
              }}
              className="bg-teal-700 text-sm w-64 h-7 my-2 cursor-pointer hover:bg-teal-900 flex justify-center items-center text-white rounded-lg "
              title={isLoading ? "Signing In..." : "SignIn"}
              icon={null}
            />
          </div>
          <div className="flex font-bold underline cursor-pointer text-[10px] justify-center items-center text-teal-700 gap-1">
            <p onClick={() => navigate("/")}>Go Home </p>
            {/* <p ><BsArrowRight /></p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;
