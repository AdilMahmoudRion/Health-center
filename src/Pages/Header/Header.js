import React from "react";
import {Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";


const Header = () => {
  
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/home#home">Health Center</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/aboutUs#aboutUs">
                About us
              </Nav.Link>
              <Nav.Link as={HashLink} to="/medicalServices#medicalServices">
                Medical Services
              </Nav.Link>
              <Nav.Link as={HashLink} to="/departments#departments">
                Departments
              </Nav.Link>
              <Nav.Link as={HashLink} to="/shop#shop">
                Shop
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={HashLink} to="/login#login">
                Log in
              </Nav.Link>
              {/* {user?.email ? (
                <Button onClick={logOut} variant="light">
                  Logout
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              <Navbar.Text>
                Signed in as: <a href="#login">{user?.displayName}</a>
              </Navbar.Text> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
