import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomeComponent from "./pages/home";
import JobComponent from "./pages/jobs";
import FeatureComponent from "./pages/feature";
import LoginComponent from "./pages/auth/login";
import ProtectedRoutes from "./protectedRoutes";
import RegisterComponent from "./pages/auth/register";
import BkMark from "./pages/bookmark";

const AppRouter = () => {
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [location.pathname]);

  let name = "Jobber";

  window.addEventListener("blur", () => {
    document.title = "Jobber misses you.";
  });
  window.addEventListener("focus", () => {
    document.title = name;
  });
  return (
    <Routes location={location}>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/job" element={<JobComponent />} />
      <Route path="/feature" element={<FeatureComponent />} />
      <Route path="/login" element={<LoginComponent />} />
      <Route path="/register" element={<RegisterComponent />} />
      <Route path="/bookmark" element={<BkMark />} />
    </Routes>
  );
};

export default AppRouter;
