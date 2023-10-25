import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./pages/home";
import JobComponent from "./pages/jobs";
import FeatureComponent from "./pages/feature";
import LoginComponent from "./pages/auth/login";
import RegisterComponent from "./pages/auth/register";
import BkMark from "./pages/bookmark";

const AppRouter = () => {
  return (
    <section>
      <Routes>
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/job" element={<JobComponent />} />
        <Route path="/feature" element={<FeatureComponent />} />
        <Route path="/" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/bookmark" element={<BkMark />} />
      </Routes>
    </section>
  );
};

export default AppRouter;
