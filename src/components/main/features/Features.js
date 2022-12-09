import React from "react";
import { section1, section2, section3, section5 } from "./data/dataFeatures";
import "./Features.css";
import { imageSection2, imageSection4 } from "./img/img";
export default function Features() {
  function Box(props) {
    return (
      <div className="box">
        <div className="img">
          <img src={props.img} alt="" />
        </div>
        <div>
          <div className="name">{props.title}</div>
          <div className="text">{props.text}</div>
        </div>
      </div>
    );
  }
  function Content(props) {
    return (
      <div className="content">
        <div className="number">0{props.number}</div>
        <div className="name">{props.name}</div>
        <div className="text">{props.text}</div>
      </div>
    );
  }
  return (
    <section id="features">
      <section className="section1">
        <div className="title">
          <p className="textUpCase">quality features</p>
          <h2>Meet exciting feature of app</h2>
        </div>
        <div className="boxs">
          {section1.map((box) => {
            return (
              <Box
                key={box.id}
                img={box.img}
                title={box.title}
                text={box.text}
              ></Box>
            );
          })}
        </div>
      </section>
      <section className="section2">
        <div className="phone-section2">
          <img src={imageSection2.phone} alt="" />
        </div>
        <div className="infor-section2">
          <p className="textUpCase">CORE FEATURES</p>
          <div className="title">
            <h2>Smart Jackpots that you may love this anytime & anywhere</h2>
          </div>
          <div className="boxs">
            {section2.map((box) => {
              return (
                <Box
                  key={box.id}
                  img={box.img}
                  title={box.title}
                  text={box.text}
                ></Box>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="title">
          <p className="textUpCase">quality features</p>
          <h2>Meet exciting feature of app</h2>
        </div>
        <div className="boxs">
          {section3.map((box) => {
            return (
              <Box
                key={box.id}
                img={box.img}
                title={box.title}
                text={box.text}
              ></Box>
            );
          })}
        </div>
      </section>
      <section className="section4">
        <div className="infor-section4">
          <p className="textUpCase">CORE FEATURES</p>
          <div className="title">
            <h2>Smart Jackpots that you may love this anytime & anywhere</h2>
          </div>
          <p className="text">
            Get your tests delivered at let home collect sample from the victory
            of the managements that supplies best design system guidelines ever.
            Get your tests delivered at let home collect sample.
          </p>{" "}
          <button className="btn">get started</button>
        </div>
        <div className="img-section4">
          <img src={imageSection4.img} alt="" />
        </div>
      </section>
      <section className="section5">
        <div className="title">
          <p className="textUpCase">WHATS THE FUNCTION</p>
          <h2>Let’s see how it works</h2>
        </div>
        <div className="container-section5">
          {section5.map((content) => {
            return (
              <Content
                key={content.id}
                number={content.id}
                name={content.name}
                text={content.text}
              ></Content>
            );
          })}
        </div>
      </section>
    </section>
  );
}
