import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, Button, Image, NavDropdown } from "react-bootstrap";
import Logo from "../images/rentomate.png";
import { LinkContainer } from "react-router-bootstrap";
import {logout} from '../actions/userActions'
import  { Redirect } from 'react-router-dom'


const Header = () => {

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
   
  }

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

              {userInfo && (
                <LinkContainer to="/admin/dashboard">
                <Nav.Link >Admin Dashboard</Nav.Link>
                </LinkContainer>
              )}
              
              {userInfo ? (
                
                <NavDropdown title={userInfo.user_profile.user.name} id='username'>
                  <LinkContainer to='/profile'><NavDropdown.Item>Profile</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/"><NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item></LinkContainer>
                  
                
                </NavDropdown>
                
              ): (
                <LinkContainer to="/login">
                <Nav.Link className="fw-bold">Login</Nav.Link>
                </LinkContainer>

                
              )}
              
              {!userInfo && (
                
                <Button
                style={{
                  fontSize: "13px",
                  padding: "10px 30px 10px 30px",
                  margin: "8px 5px 8px 40px",
                }}>
                Sign Up
                </Button>
              )}
              

              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
