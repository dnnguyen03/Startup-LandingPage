import React, { useRef } from "react";
import { dataSlider } from "../../../utils/data";
import { ReactComponent as Star } from "../../../asset/image/star.svg";
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
export default function Slider() {
  const listSlide = useRef();
  var tablet = window.matchMedia("(min-width:625px)");
  var pc = window.matchMedia("(min-width:1026px)");
  const next = () => {
    if (pc.matches) {
      let list = document.querySelectorAll(".slider .slide");
      listSlide.current.appendChild(list[0]);
      listSlide.current.appendChild(list[1]);
      listSlide.current.appendChild(list[2]);
    } else if (tablet.matches) {
      let list = document.querySelectorAll(".slider .slide");
      listSlide.current.appendChild(list[0]);
      listSlide.current.appendChild(list[1]);
    } else {
      let list = document.querySelectorAll(".slider .slide");
      listSlide.current.appendChild(list[0]);
    }
  };
  const prev = () => {
    if (pc.matches) {
      let list = document.querySelectorAll(".slider .slide");
      listSlide.current.prepend(list[list.length - 1]);
      listSlide.current.prepend(list[list.length - 2]);
      listSlide.current.prepend(list[list.length - 3]);
    } else if (tablet.matches) {
      let list = document.querySelectorAll(".slider .slide");
      listSlide.current.prepend(list[list.length - 1]);
      listSlide.current.prepend(list[list.length - 2]);
    } else {
      let list = document.querySelectorAll(".slider .slide");
      listSlide.current.prepend(list[list.length - 1]);
    }
  };
  return (
    <div className="testimonial" id="testimonial">
      <div className="title">
        <p className="textUpCase">quality features</p>
        <h2>Meet Client Satisfaction</h2>
      </div>
      <div className="container">
        <div className="slider" ref={listSlide}>
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
