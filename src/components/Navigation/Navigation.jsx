import React from "react";

const Navigation = () => {
  return (
    <div className="nav">
      <h1 className="nav__logo">clima</h1>
      <nav className="nav__navigation">
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
    </div>
  );
};
export default Navigation;
