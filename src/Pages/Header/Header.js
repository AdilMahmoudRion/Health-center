import React from "react";
import {Button, Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";


const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="fixed-top">
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
              <Nav.Link as={HashLink} to="/home#aboutUs">
                About us
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#medicalServices">
                Medical Services
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#departments">
                Departments
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#shop">
                Shop
              </Nav.Link>
            </Nav>
            <Nav>
              <Navbar.Text>{user?.displayName}</Navbar.Text>
              {user?.email ? (
                <Button onClick={logOut} variant="dark">
                  Logout
                </Button>
              ) : (
                <Nav.Link as={HashLink} to="/login#login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
