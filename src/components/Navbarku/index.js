import React from "react";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

class Navbarku extends React.Component {
  render() {
    return (
      <div className="z-depth-4">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Finance Calculator</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbarku;
