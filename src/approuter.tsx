import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./pages/home";
import JobComponent from "./pages/jobs";
import FeatureComponent from "./pages/feature";
import LoginComponent from "./pages/auth/login";
import RegisterComponent from "./pages/auth/register";

const AppRouter = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/job" element={<JobComponent />} />
        <Route path="/feature" element={<FeatureComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
      </Routes>
    </section>
  );
};

export default AppRouter;
