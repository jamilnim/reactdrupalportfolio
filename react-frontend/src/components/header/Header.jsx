import React from "react";
import "./Header.css";
import logo from "../../assets/background/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNecClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <a href="#aboutme" onClick={()=>handleNecClick("aboutme")}>
              Aboutme
            </a>
          </li>
          <li>
            <a href="#project" onClick={()=>handleNecClick("projects")}>
              Project
            </a>
          </li>
          <li>
            <a href="/blog">Blogs</a>
          </li>

          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/ContactForm">Contact</a>
          </li>
          <li>
            <a href="/MassageList">Admin</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
