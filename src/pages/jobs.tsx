import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/navbar";
import { CardComponent } from "../components/card";
import FooterComponent from "../components/footer";

const JobComponent = () => {
  return (
    <section className="">
      <div>
        <NavbarComponent />
      </div>
      <div className="mx-24">
        <CardComponent />
      </div>
      <div>
        <FooterComponent />
      </div>
    </section>
  );
};

export default JobComponent;
