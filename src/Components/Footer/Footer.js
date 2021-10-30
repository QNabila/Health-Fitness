import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <img className="logo" src={logo} alt="" />
        <div className="footer-title">
          <h3>Health & Fitness</h3>
        </div>
        <div className="links">
          <Link className="footer-link" to="/about">
            About Us
            <br />
          </Link>
          <Link className="footer-link" to="/services">
            Services
            <br />
          </Link>
          <Link className="footer-link" to="/workouts">
            Workouts
            <br />
          </Link>
          <Link className="footer-link" to="/contact">
            Contact
          </Link>
        </div>
        <div className="footer-info">
          <p>Official:web@health&fitness.com</p>
          <p>
            {" "}
            Helpline : +8801427359234 <br /> (Available : 09:00am to 7:00pm)
          </p>
        </div>
      </div>
      <div>
        <p className="copyright-text">
          Copyright ©2021 All rights reserved,site by nabila
        </p>
      </div>
    </div>
  );
};

export default Footer;
