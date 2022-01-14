import React from "react";
import { Navbar, Nav, Container, Row, Button, Image } from "react-bootstrap";
import Logo from "../images/rentomate.png";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image src={Logo} style={{ width: "70%" }} />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="justify-content-center">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/properties">
                <Nav.Link>View Properties</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/howitworks">
                <Nav.Link>How it works</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link className="fw-bold">Login</Nav.Link>
              </LinkContainer>

              <Button
                style={{
                  fontSize: "13px",
                  padding: "10px 30px 10px 30px",
                  margin: "8px 5px 8px 40px",
                }}
              >
                Sign Up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
