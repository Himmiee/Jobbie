import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/navbar";
import CardComponent from "../components/card";
import FooterComponent from "../components/footer";

const JobComponent = () => {
  return (
    <section className="mx-24">
      <div>
        <NavbarComponent />
      </div>
      <div>
        <CardComponent />
      </div>
      <div>
        <FooterComponent />
      </div>
    </section>
  );
};

export default JobComponent;
