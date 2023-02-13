import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Image/phonex1.png";
import "../style/navbar.css";
function MenuNavbar({ menudata }) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="navBorder"
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex">
          <img src={logo} alt="logo" style={{ width: "30px" }} />
          Phoenix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {menudata.map((e, i) => {
              return (
                <Nav.Link key={i} href={e.link}>
                  {e.menuName}
                </Nav.Link>
              );
            })}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <i className="bi bi-cart"></i>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <i className="bi bi-person"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNavbar;
