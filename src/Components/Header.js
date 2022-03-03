import React, { useState, useEffect } from "react";

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
  <a class="navbar-brand" href="/home">
    <img src='/images/Logo.svg' alt='logo' height={"60px"}/>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/">Consultation</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/">News</a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" href="#/">Contact Us</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ENG
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#/">FR</a>
          <a class="dropdown-item" href="#/">IT</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

  )
}
