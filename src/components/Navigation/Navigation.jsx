import React, { useRef } from "react";
import {
  pestData,
  fertlizerData,
  FungicidesData,
} from "./../../reusable/data.const";

const Navigation = () => {
  const navRef = useRef(null);
  const popUpRef = useRef(null);
  const handleNav = () => {
    console.log("handling the navigation");
    navRef.current.classList.toggle("nav__flipper");
  };

  const handleHoverOut = () => {
    setTimeout(() => {
      console.log("handled hover out");
    }, 1000);
  };
  return (
    <div className="nav">
      <div className="nav_brand">
        <a href="/">
          <img
            src={process.env.PUBLIC_URL + "/logo/Clima.svg"}
            alt="Clima "
            className="nav__image"
          />
        </a>
      </div>

      <nav className="nav__navigation nav__flipper" ref={navRef}>
        <ol className="nav__list">
          <li className="nav__item" onmouseout={handleHoverOut}>
            <a href="/" className="nav__item--link">
              fertilizers
            </a>
            <div className="nav__popover">
              {fertlizerData.map((fertlizer) => (
                <a href="/fertilizers" className="nav__popover--link">
                  {fertlizer.fertilizer}
                </a>
              ))}
            </div>
          </li>
          <li className="nav__item" onmouseout={handleHoverOut}>
            <a href="/" className="nav__item--link">
              pesticides
            </a>
            <div className="nav__popover">
              {pestData.map((pest) => (
                <a href="/pesticides" className="nav__popover--link">
                  {pest}
                </a>
              ))}
            </div>
          </li>
          <li className="nav__item" onmouseout={handleHoverOut}>
            <a href="/" className="nav__item--link">
              fungicides
            </a>
            <div className="nav__popover">
              {FungicidesData.map((fungicide) => (
                <a href="/fungicides" className="nav__popover--link">
                  {fungicide.fungicides}
                </a>
              ))}
            </div>
          </li>
          <li className="nav__item" onmouseout={handleHoverOut}>
            <a href="/" className="nav__item--link">
              initiative
            </a>
            <div className="nav__popover">
              <a href="/" className="nav__popover--link">
                Initiative 1
              </a>
              <a href="/" className="nav__popover--link">
                Initiative 2
              </a>
              <a href="/" className="nav__popover--link">
                Initiative 3
              </a>
              <a href="/" className="nav__popover--link">
                Initiative 4
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <div className="hamburger" onClick={handleNav}>
        <div className="hamb hamburger--1"></div>
        <div className="hamb hamburger--2"></div>
        <div className="hamb hamburger--3"></div>
      </div>
    </div>
  );
};
export default Navigation;
