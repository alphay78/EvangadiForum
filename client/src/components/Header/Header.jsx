import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { AppState } from "../../App"; // ❌ Removed for now to prevent error
import "./Header.css";
import headImage from "/evangadi-logo-black.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Temporary fallback logic
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    console.log("Logged out!");
    localStorage.removeItem("token");
    window.location.reload(); // refresh to simulate logout
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="outer_container">
      <div className="inner_container">
        <div className="logo-container">
          <Link to="/">
            <img src={headImage} alt="Evangadi Logo" />
          </Link>
        </div>

        <div>
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>

          <nav className={`nav-container ${isMenuOpen ? "open" : ""}`}>
            <ul className="nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="divider" />
              <li>
                <Link to="/how-it-works">How it Works</Link>
              </li>
              <li className="divider" />
            </ul>

            <div>
              {token ? (
                <button className="button-container" onClick={handleLogout}>
                  LOG OUT
                </button>
              ) : (
                <Link to="/login">
                  <button className="button-container">SIGN IN</button>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
