import React, { useRef } from "react";
import { dataSlider } from "../../../utils/data";
export default function Slider() {
  const slide = useRef();
  const slidePresent = useRef(0);
  const container = useRef();
  var mobile = window.matchMedia("(max-width:624px)");
  var tablet = window.matchMedia("(min-width:625px)");
  var pc = window.matchMedia("(min-width:1026px)");
  function Star() {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        viewBox="0 0 576 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
      </svg>
    );
  }
  function Slide(props) {
    return (
      <div className="slide">
        <div className="listStar">
          <li className={`star ${props.star >= 1 ? "yellow" : ""}`}>
            <Star></Star>
          </li>
          <li className={`star ${props.star >= 2 ? "yellow" : ""}`}>
            <Star></Star>
          </li>
          <li className={`star ${props.star >= 3 ? "yellow" : ""}`}>
            <Star></Star>
          </li>
          <li className={`star ${props.star >= 4 ? "yellow" : ""}`}>
            <Star></Star>
          </li>
          <li className={`star ${props.star === 5 ? "yellow" : ""}`}>
            <Star></Star>
          </li>
        </div>
        <div className="job">
          <p>{props.job}</p>
        </div>

        <div className="text">
          <p>{props.text}</p>
        </div>

        <div className="inforPerson">
          <div className="avatar">
            <img src={props.avatar} alt="" />
          </div>
          <div className="name_twitter">
            <div className="name">{props.name}</div>
            <div className="twitter">{props.twitter}</div>
          </div>
        </div>
      </div>
    );
  }
  function BtnSlider() {
    console.log(slidePresent.current, dataSlider.length);
    if (pc.matches) {
      if (slidePresent.current >= dataSlider.length / 3) {
        slidePresent.current = slidePresent.current - 1;
      }
    }
    if (mobile.matches) {
      if (slidePresent.current >= dataSlider.length) {
        slidePresent.current = slidePresent.current - 1;
      }
    }
    if (tablet.matches) {
      if (slidePresent.current >= dataSlider.length / 2) {
        slidePresent.current = slidePresent.current - 1;
      }
    }

    if (slidePresent.current < 0) {
      slidePresent.current = 0;
    } else {
      slide.current.style.marginLeft = -slidePresent.current * 100 + "%";
    }
  }
  const next = () => {
    slidePresent.current++;
    BtnSlider();
  };
  const prev = () => {
    slidePresent.current--;
    BtnSlider();
  };
  return (
    <div className="testimonial">
      <div className="title">
        <p className="textUpCase">quality features</p>
        <h2>Meet exciting feature of app</h2>
      </div>
      <div className="container" ref={container}>
        <div className="slider" ref={slide}>
          {dataSlider.map((slide, index) => {
            return (
              <Slide
                key={slide.id}
                star={slide.star}
                job={slide.job}
                text={slide.text}
                avatar={slide.avatar}
                name={slide.name}
                twitter={slide.twitter}
              ></Slide>
            );
          })}
        </div>
        <div className="control_slide">
          <button className="prev" onClick={prev}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M216.4 163.7c5.1 5 5.1 13.3.1 18.4L155.8 243h231.3c7.1 0 12.9 5.8 12.9 13s-5.8 13-12.9 13H155.8l60.8 60.9c5 5.1 4.9 13.3-.1 18.4-5.1 5-13.2 5-18.3-.1l-82.4-83c-1.1-1.2-2-2.5-2.7-4.1-.7-1.6-1-3.3-1-5 0-3.4 1.3-6.6 3.7-9.1l82.4-83c4.9-5.2 13.1-5.3 18.2-.3z"></path>
            </svg>
          </button>

          <button className="next" onClick={next}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
