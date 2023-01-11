import React from "react";
import { Link } from "react-scroll";
import { links, socialMedia } from "../../utils/data";

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
              <Link
                key={link.id}
                activeClass="active"
                smooth
                spy
                to={link.name}
                onClick={toggleSideBar}
              >
                <li className="link-mobile">{link.name}</li>
              </Link>
            );
          })}
        </div>
        <div className="social-media">
          {socialMedia.map((item) => (
            <a key={item.id} href={item.href} target="_blank" rel="noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
