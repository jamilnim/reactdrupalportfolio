import React from "react";
import "./Header.css";
import logo from "../../assets/background/logo.png";

function Header() {
  return (
    <header className="main-header">
      <div className="logocontainer">
        <img className="mainlogo" src={logo} alt="logo" />
        <p className="mainlogotext">Your coder here</p>
      </div>
      <nav className="nav-bar">
        <ul className="nav-links">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/project">Project</a>
          </li>
          <li>
            <a href="/blog">Blogs</a>
          </li>
          <li>
            <a href="/ContactForm">Contact</a>
          </li>
          <li>
            <a href="/MassageList">Masseges</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
