import React from "react";
import { links } from "../header/data/links";

export default function SideBar({ sideBar, toggleSideBar }) {
  return (
    <aside
      className={`overlay-sideBar ${sideBar ? "activeSideBar" : ""}`}
      onClick={toggleSideBar}
    >
      <div className="sideBar">
        <div className="icon-close" onClick={toggleSideBar}>
          <i className="fa-solid fa-close"></i>
        </div>
        <div className="links-mobile">
          {links.map((link) => {
            return (
              <li className="link-mobile" key={link.id}>
                {link.name}
              </li>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
