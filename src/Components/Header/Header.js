import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { NavLink } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import useFirebase from "../../hook/useFirebase";
import logo from "../../images/logo.png";
import "../Header/Header.css";
const Header = () => {
  const { user, logout } = useAuth();
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
          <Navbar collapseOnSelect expand="lg" className="nav" variant="dark">
          
        <Container>
          <Nav className="me-auto" sticky="top">
            <Navbar.Toggle />
            <Navbar.Collapse className="nav-link">
              <NavLink className="link" to="/home">Home</NavLink>
              <NavLink className="link"to="/services">Our Services</NavLink>
              <NavLink className="link"to="/workouts">Workouts</NavLink>
              <NavLink className="link"to="/contact">Contact Us</NavLink>
              {user.email && (
                <span style={{ color: "white", marginTop: "8px" }}>
                  Hello {user.displayName}{" "}
                </span>
              )}
              {user.email ? (
                <button onClick={logout} className="logout">
                  logout
                </button>
              ) : (
                <NavLink to="/login">Login </NavLink>
              )}
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
{/* 
      <Navbar className="nav" collapseOnSelect expand="lg">
        <NavbarToggle />
        <Navbar.Collapse className="justify-content-end">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/services">Our Services</NavLink>
          <NavLink to="/workouts">Workouts</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          {user.email && (
            <span style={{ color: "white", marginTop: "8px" }}>
              Hello {user.displayName}{" "}
            </span>
          )}
          {user.email ? (
            <button onClick={logout} className="logout">
              logout
            </button>
          ) : (
            <NavLink to="/login">Login </NavLink>
          )}
        </Navbar.Collapse>
      </Navbar> */}
    </div>
  );
};

export default Header;
