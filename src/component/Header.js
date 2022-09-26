import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import stylesheet from "./newweb.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/manav-E-Seva">
            MANAV E SEVA
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/manav-E-Seva"></Nav.Link> */}
            <Nav.Link as={Link} to="/manav-E-Seva/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/manav-E-Seva/forms">
              Forms
            </Nav.Link>
            <Nav.Link as={Link} to="/manav-E-Seva/about">
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
