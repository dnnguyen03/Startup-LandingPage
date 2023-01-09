import React from "react";
import { dataPricing } from "../../../utils/data";
import { ReactComponent as Dung } from "../../../asset/image/tich.svg";
import { ReactComponent as Sai } from "../../../asset/image/x.svg";
import "./Pricing.css";
import Questions from "./Questions";
const Packages = (props) => {
  const {
    backgroundColor,
    textColor,
    namePackage,
    suggest,
    object,
    price,
    benefits,
  } = props.data;
  return (
    <div
      className="packages"
      style={{ backgroundColor: `${backgroundColor}`, color: `${textColor}` }}
      // style={{
      //   backgroundColor: `${namePackage === "Premium" ? "white" : "#2F5392"}`,
      // }}
    >
      <div className={`suggest ${suggest ? "" : "hidden"}`}>Recommended</div>
      <div className="name-price">
        <div className="name-package">
          <p className="namePK">{namePackage}</p>
          <p
            className="object-use"
            style={{
              opacity: `${textColor === "white" ? "50%" : "100%"}`,
              color: textColor,
            }}
          >
            {object}
          </p>
        </div>
        {price && (
          <div className="price-month">
            <p>Starting form</p>
            <div className="price">{price}</div>
          </div>
        )}
      </div>
      <div className="benefits">
        {benefits.map((benefit, index) => {
          return (
            <div
              key={index}
              className={`benefit ${benefit.active ? "" : "noBenefit"}`}
            >
              <div
                className="activeBenefit"
                style={{ color: `${benefit.active ? "" : textColor}` }}
              >
                {benefit.active ? <Dung></Dung> : <Sai></Sai>}
              </div>
              <div className="detail">{benefit.detail}</div>
            </div>
          );
        })}
      </div>
      <button
        className="btn"
        style={
          backgroundColor === "white"
            ? { backgroundColor: "#1f3e76", color: "white" }
            : { backgroundColor: "white", color: "#0f2137" }
        }
      >
        Signup now
      </button>
    </div>
  );
};
export default function Pricing() {
  return (
    <div>
      <div className="Pricing">
        <div className="title">
          <p className="textUpCase">Whats the function</p>
          <h2>Let’s see how it works</h2>
        </div>
        <div className="container">
          {dataPricing.map((data) => (
            <Packages key={data.id} data={data} />
          ))}
        </div>
      </div>
      <Questions></Questions>
    </div>
  );
}
