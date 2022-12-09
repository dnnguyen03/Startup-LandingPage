import React from "react";
import Image from "./img/img";
import "./Home.css";
export default function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="information">
          <div className="title">
            <h1>Experience your ultimate mobile application</h1>
          </div>
          <div className="text">
            <p>
              Get your blood tests delivered at let home collect sample from the
              victory of the managements that supplies best design system
              guidelines ever.
            </p>
          </div>
          <div className="action">
            <button className="btn">get started</button>
            <div className="video btn">
              <i className="fa-solid fa-circle-play"></i>
              <p>watch video</p>
            </div>
          </div>
          <div className="orther">
            <p>sponsored by:</p>
            <div className="sponsoreds">
              <div className="sponsored">
                <img src={Image.paypal} alt="" />
              </div>
              <div className="sponsored">
                <img src={Image.google} alt="" />
              </div>
              <div className="sponsored">
                <img src={Image.dropbox} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="imgPhone">
          <img src={Image.phone} alt="" />
        </div>
      </div>
    </section>
  );
}
