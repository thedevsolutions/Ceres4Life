import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  // const change = (option) => {
  //   localStorage.setItem("lang", option.target.value);
  //   window.location.reload();
  // };

  // const lang = localStorage.getItem("lang") || "en";

  useEffect(() => {
    changeNavbarColor();
    window.addEventListener("scroll", changeNavbarColor);
  });

  const [navbar, setNavbar] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <nav
      className={
        navbar
          ? "navbar bg-navbar navbar-dark sticky-top navbar-expand-lg px-5"
          : "navbar navbar-dark sticky-top navbar-expand-lg px-5"
      }
    >
      <Link to="/" class="navbar-brand">
        <img src="/images/Logo.svg" alt="logo" height={"60px"} />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <Link to="/" class="nav-link">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/consultation" class="nav-link">
              Consultation
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/news" class="nav-link">
              News
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" class="nav-link">
              Contact Us
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/login" class="nav-link">
              Login
            </Link>
          </li>
          <li class="nav-item">
            <select
              class="language"
              id="exampleFormControlSelect1"
              // onChange={change}
              // value={lang}
            >
              <option value="en" class="dropdown-item">
                English
              </option>
              <option value="fr" class="dropdown-item">
                French
              </option>
              <option value="sp" class="dropdown-item">
                Spanish
              </option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}
