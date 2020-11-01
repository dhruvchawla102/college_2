import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarDataBsn } from "./SidebarDataBsn";
import "./Nav.css";
import { IconContext } from "react-icons";
import { MdFingerprint } from "react-icons/md";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

function NavBsn({ subsection }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{}}>
        <div className="navbar">
          <div className="company__details">
            <MdFingerprint className="company__logo" />
            {/* <h1 className="company__name">ConnectMe </h1> */}
            <a className="company__name" href=''>ConnectMe </a>
            <h1 className="section__name__b">| {subsection}</h1>
          </div>
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars-cross">
                <CloseRoundedIcon className="cross" />
              </Link>
            </li>
            {SidebarDataBsn.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBsn;
