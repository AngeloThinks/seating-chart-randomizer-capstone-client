import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GiRooster } from "react-icons/gi";
import { Button } from "../Button";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Roost for Teacher's</p>
        <p className="footer-subscription-text">
          <a href="mailto:angelogvazquez@gmail.com?subject='Hello'"></a>
          If you have any question please feel free to contact me.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Send</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/about">How it works</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Me</h2>
            <a href="mailto:angelogvazquez@gmail.com?subject='Hello'">
              Contact
            </a>
            <a href="mailto:angelogvazquez@gmail.com?subject='Hello'">
              Support
            </a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/angelogvazquez"
            >
              LinkedIn
            </a>
            <a target="_blank" href="https://www.facebook.com/djangelov">
              Facebook
            </a>
            <a target="_blank" href="https://www.instagram.com/angelo_v_its_me">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <GiRooster className="navbar-icon" />
              ROOST
            </Link>
          </div>
          <small className="website-rights">Angelo © 2020</small>
          <div className="social-icons">
            <a 
              target="_blank"
              className="social-icon-link"
              href="https://www.linkedin.com/in/angelogvazquez"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              className="social-icon-link"
              href={"https://www.facebook.com/djangelov"}
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              target="_blank"
              className="social-icon-link"
              href={"https://www.instagram.com/angelo_v_its_me"}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
