import React, { useRef } from "react";

const Navigation = () => {
  const navRef = useRef(null);
  const popUpRef = useRef(null);
  const handleNav = () => {
    console.log("handling the navigation");
    navRef.current.classList.toggle("nav__flipper");
  };

  const handleHoverOut = () => {
    setTimeout(() => {
      console.log("handled hover out")
    }, 1000);
  };
  return (
    <div className="nav">
      <div className="nav_brand">
        <img
          width="100"
          src={process.env.PUBLIC_URL + "/logo/Clima.svg"}
          alt="Clima "
          className="nav__image"
        />
      </div>

      <nav className="nav__navigation nav__flipper" ref={navRef}>
        <ol className="nav__list">
          <li className="nav__item" onmouseout={handleHoverOut}>
            <a href="/" className="nav__item--link">
              fertilizers
            </a>
            <div className="nav__popover">
              <a href="/" className="nav__popover--link">
                Fertilizer 1
              </a>
              <a href="/" className="nav__popover--link">
                Fertilizer 2
              </a>
              <a href="/" className="nav__popover--link">
                Fertilizer 3
              </a>
              <a href="/" className="nav__popover--link">
                Fertilizer 4
              </a>
            </div>
          </li>
          <li className="nav__item" onmouseout={handleHoverOut}>
            <a href="/" className="nav__item--link">
              pesticides
            </a>
            <div className="nav__popover">
              <a href="/" className="nav__popover--link">
                Pesticide 1
              </a>
              <a href="/" className="nav__popover--link">
                Pesticide 2
              </a>
              <a href="/" className="nav__popover--link">
                Pesticide 3
              </a>
              <a href="/" className="nav__popover--link">
                Pesticide 4
              </a>
            </div>
          </li>
          <li className="nav__item" onmouseout={handleHoverOut}>
            <a href="/" className="nav__item--link">
              fungicides
            </a>
            <div className="nav__popover">
              <a href="/" className="nav__popover--link">
                Fungicide 1
              </a>
              <a href="/" className="nav__popover--link">
                Fungicide 2
              </a>
              <a href="/" className="nav__popover--link">
                Fungicide 3
              </a>
              <a href="/" className="nav__popover--link">
                Fungicide 4
              </a>
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
