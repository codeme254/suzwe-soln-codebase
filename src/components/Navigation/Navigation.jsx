import React, { useRef } from "react";

const Navigation = () => {
  const navRef = useRef(null);
  const handleNav = () => {
    console.log("handling the navigation");
    navRef.current.classList.toggle("nav__flipper");
  };
  return (
    <div className="nav">
      <h1 className="nav__logo">clima</h1>
      <nav className="nav__navigation nav__flipper" ref={navRef}>
        <ol className="nav__list">
          <li className="nav__item">
            <a href="/" className="nav__item--link">
              fertilizers
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__item--link">
              pesticides
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__item--link">
              fungicides
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__item--link">
              initiative
            </a>
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
