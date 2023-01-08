import React from "react";
import Features from "./features/Features";
import Home from "./home/Home";
import Pricing from "./pricing/Pricing";
import Testimonial from "./testimonial/Testimonial";

export default function Main() {
  return (
    <div className="Main">
      <Home></Home>
      <Features></Features>
      <Testimonial></Testimonial>
      <Pricing></Pricing>
    </div>
  );
}
