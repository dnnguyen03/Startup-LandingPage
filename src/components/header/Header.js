/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { links } from "./data/links";
import "./Header.css";
import logo from "./img/logo_white.svg";
import "../sideBar/SideBar";
import SideBar from "../sideBar/SideBar";
export default function Header() {
  const [sideBar, setSideBar] = useState(false);
  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <header className="header">
      <div className="navBar">
        <div className="logo">
          <img src={logo} alt="" />
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
