import React, { useState } from "react";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { scroller } from "react-scroll";
import Tilt from "react-parallax-tilt";
import pdf from './asset/Danush_Athithya_RK.pdf'

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

 

  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: -2,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="navbar-container " >
      <nav  className=" navbar-final flex items-center justify-between pt-2 pb-2 pr-2 navbar bg-black ">
        <a
          href="/"
          className="flex items-center flex-shrink-0 mr-6 justify-start"
        >
          <Tilt>
            <img
              src={logo}
              alt="Logo"
              className="logo-image mx-auto b-block col-2 col-sm-3"
              style={{}}
            />
          </Tilt>
        </a>
        <div className="flex-grow">
          <ul className="flex justify-end text-white">
            <li className="pr-8 pl-3 pt-4 pb-4">
              <a href="#" className="hov under size" onClick={() => scrollTo("Sec3")}>
                Projects
              </a>
            </li>
            <li className="pr-8 pt-4 pb-4">
              <a href="#" className="hov under size" onClick={() => scrollTo("Sec2")}>
                Skills
              </a>
            </li>
            <li className="pr-8 pt-4 pb-4">
              <a
                href="#"
                className="hov under size"
                onClick={() => scrollTo("Sec4")}
              >
                Contact
              </a>
            </li>
            <li className="pr-8 pt-4 pb-4">
              <a href={pdf} className="hov under size">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
