import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/navbar";
import { InputHeader } from "../components/inputComponent";
import { CardComponent } from "../components/card";
import FooterComponent from "../components/footer";

const JobComponent = () => {
  return (
    <section className="">
      <div>
        <NavbarComponent />
      </div>
      <div className="mx-24 mt-24">
        <InputHeader />
      </div>
      <div>
        <FooterComponent />
      </div>
    </section>
  );
};

export default JobComponent;
