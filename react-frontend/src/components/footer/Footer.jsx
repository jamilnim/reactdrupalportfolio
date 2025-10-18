import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* LEFT SIDE */}
      <div className="footer-left">
        <div className='address'>
        <p> Muhammad Jamil </p>
<p>Pihkatie 6 C 28,</p> <p>Helsinki, 00410, Finland</p>
<p>Mobile: (+358) 417236214 </p><p> Email: jamilnimbook2@gmail.com</p>
        </div>
        <div className="social-links">
          <a href="#"><img src="logos/socialmedia/facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="logos/socialmedia/instragram.png" alt="Instagram" /></a>
          <a href="#"><img src="logos/socialmedia/linkedin.png" alt="LinkedIn" /></a>
          <a href="#"><img src="logos/socialmedia/whatsup.png" alt="WhatsApp" /></a>
          <a href="#"><img src="logos/socialmedia/git.png" alt="GitHub" /></a>
        </div>
        <p className="footer-copy">© 2025 Muhammad Jamil</p>
      </div>

      {/* RIGHT MENU */}
      <div className="footer-right">
        <ul className="footer-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#docs">Documents</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
