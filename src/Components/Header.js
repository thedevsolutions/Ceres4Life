import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";


export default function Header() {

  useEffect(() => {
    changeNavbarColor()
    window.addEventListener("scroll", changeNavbarColor)
  })

  const [navbar, setNavbar] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  return (

    <nav className={navbar ? "navbar bg-navbar navbar-dark sticky-top navbar-expand-lg px-5" : "navbar navbar-dark sticky-top navbar-expand-lg px-5"}>
  <Link to="/home" class="navbar-brand">
    <img src='/images/Logo.svg' alt='logo' height={"60px"}/>
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link to="/home" class="nav-link">Home</Link>
      </li>
      <li class="nav-item">
        <Link to="#/" class="nav-link">Consultation</Link>
      </li>
      <li class="nav-item">
        <Link to="#/" class="nav-link">News</Link>
      </li> 
      <li class="nav-item">
        <Link to="#/" class="nav-link">Contact Us</Link>
      </li>
      <li class="nav-item dropdown">
        <a href="#/" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ENG
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="#/" class="dropdown-item">FR</Link>
          <Link to="#/" class="dropdown-item">IT</Link>
        </div>
      </li>
    </ul>
  </div>
</nav>

  )
}
