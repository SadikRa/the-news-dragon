import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img className="" src={logo} alt="" srcset="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, yyyy")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee speed={50} className="text-danger bg-">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Career</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
          <Nav.Link href="#home">Profile</Nav.Link>
          <Button variant="secondary">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </Container>
  );
};

export default Header;
