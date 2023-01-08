import React from "react";
import payment from "../../../asset/image/payment-section7.png";
export default function Payment() {
  return (
    <div className="Payment">
      <div className="container">
        <div className="background"></div>
        <div className="imgPayment">
          <img src={payment} alt="" />
        </div>
        <div className="infor-payment">
          <p className="textUpCase">PAYMENT SECURITY</p>
          <h2 className="title">
            Secure Payment Transaction System with #1 Ranking
          </h2>
          <p className="text">
            Get your tests delivered at let home collect sample from the victory
            of the managements that supplies best design system guidelines ever.
            Get your tests delivered at let home collect sample.
          </p>
          <button className="btn">Learn more</button>
        </div>
      </div>
    </div>
  );
}
