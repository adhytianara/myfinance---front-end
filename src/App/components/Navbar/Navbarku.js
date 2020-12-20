import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Row } from "react-bootstrap";
import mainLogo from "../../img/pie-chart.svg";

function Navbarku(props) {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">
        <Row>
        <img
          alt=""
          src={mainLogo}
          width="50"
          height="50"
          className="d-inline-block align-top main-logo"
        />{" "}
        <h4>Financial Calculator</h4>
        </Row>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Link to="/"><p>Welcome</p></Link>
        </Navbar.Text>
        <Navbar.Text>
          <Link to="/netpresentvalue"><p>NPV</p></Link>
        </Navbar.Text>
        <Navbar.Text>
          <Link to="/functiondua"><p>Adit</p></Link>
        </Navbar.Text>
        <Navbar.Text>
          <Link to="/functiontiga"><p>Aji</p></Link>
        </Navbar.Text>
        <Navbar.Text>
          <Link to="/wacc"><p>WACC</p></Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbarku;
