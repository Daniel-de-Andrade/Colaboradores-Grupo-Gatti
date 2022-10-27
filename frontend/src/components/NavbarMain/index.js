import logo from "../../assets/images/logo.png";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarMain = () => {
  return (
    <Navbar bg="primary" variant="dark" style={{ width: "100%" }}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" style={{ width: "50px", height: "50px" }} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;
