import React from "react";
import { Image, Row } from "react-bootstrap";
import homeLogo from "./img/home.png";
import "./style.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Image src={homeLogo} fluid className="home-logo mb-0" />

      <h3 className="text-center mb-2">Financial</h3>
      <Row className="justify-content-center mb-3">
        <Link to="/netpresentvalue" className="link-container">
          <p className="link-dalam">NPV</p>
        </Link>
        <Link to="/#" className="link-container">
          <p className="link-dalam">Aji</p>
        </Link>
        <Link to="/wacc" className="link-container">
          <p className="link-dalam">WACC</p>
        </Link>
      </Row>

      <h3 className="text-center mb-2">Math</h3>
      <Row className="justify-content-center mb-5">
        <Link to="/system-of-linear-equations" className="link-container">
          <p className="link-dalam">SLE</p>
        </Link>
      </Row>
    </div>
  );
}

export default Home;
