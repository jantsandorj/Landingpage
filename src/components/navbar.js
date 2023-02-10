import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Image/phonex1.png";

function MenuNavbar({ menudata }) {
  console.log(menudata);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="d-flex">
          <img src={logo} style={{ width: "30px" }} />
          Phoenix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {menudata.map((e) => {
              return (
                <Nav.Link href={e.link} className="text-light">
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
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNavbar;
