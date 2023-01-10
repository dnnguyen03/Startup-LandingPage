import React from "react";
import "./Footer.css";
import { dataFooter } from "../../utils/data";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="inforFooter">
        {dataFooter.map((data, index) => (
          <div className="item" key={index}>
            <h2>{data.item}</h2>
            {data.details.map((item, index) => (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                href="https://dnnguyen03.github.io/Startup-LandingPage/"
                key={index}
              >
                {item}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="author">
        All right reserved - Design & Developed by
        <a href="https://redq.io/" target={"_blank"} rel="noreferrer">
          RedQ, Inc
        </a>
      </div>
    </footer>
  );
}
