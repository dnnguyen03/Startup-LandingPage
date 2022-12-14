/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { links } from "./data/links";
import "./Header.css";
import logo from "./img/logo_white.svg";
import logo1 from "./img/logo_black.svg";
import "../sideBar/SideBar";
import SideBar from "../sideBar/SideBar";
export default function Header() {
  const navRef = useRef();
  const logoRef = useRef();
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        navRef.current.classList.add("navActive");
        logoRef.current.src = logo1;
      } else {
        navRef.current.classList.remove("navActive");
        logoRef.current.src = logo;
      }
    });
  });
  const [sideBar, setSideBar] = useState(false);
  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <header className="header" ref={navRef}>
      <div className="navBar">
        <div className="logo">
          <img ref={logoRef} src={logo} alt="" />
        </div>
        <div className="links">
          {links.map((link) => {
            return (
              <li className="link" key={link.id}>
                {link.name}
              </li>
            );
          })}
        </div>
        <div className="btn-iconBar">
          <button href="#" className="btn">
            get started
          </button>
          <i className="fa-solid fa-bars" onClick={toggleSideBar}></i>
        </div>
      </div>
      <SideBar sideBar={sideBar} toggleSideBar={toggleSideBar} />
    </header>
  );
}
