import React from "react";

const Navigation = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img
            style={{ height: "32px" }}
            src=".\src\images\002-nike-logos-swoosh-white.jpg"
            alt="nike logo"
          />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">location</li>
          <li href="#">about</li>
          <li href="#">contact</li>
        </ul>

        <button nav-btn>login</button>
      </nav>
    </div>
  );
};

export default Navigation;
