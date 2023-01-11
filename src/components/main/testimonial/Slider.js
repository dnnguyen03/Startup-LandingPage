import React, { useRef } from "react";
import { dataSlider } from "../../../utils/data";
import { ReactComponent as Star } from "../../../asset/image/star.svg";
import { ReactComponent as Next } from "../../../asset/image/next.svg";
import { ReactComponent as Prev } from "../../../asset/image/prev.svg";
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
        <p className="textUpCase">TESTIMONIAL</p>
        <h2>Meet Client Satisfaction</h2>
      </div>
      <div className="container">
        <div className="slider" ref={listSlide}>
          {dataSlider.map((slide) => {
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
            <Prev></Prev>
          </button>

          <button className="next" onClick={next}>
            <Next></Next>
          </button>
        </div>
      </div>
    </div>
  );
}
