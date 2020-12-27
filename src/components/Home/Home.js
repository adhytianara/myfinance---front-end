import React from "react";
import { Image, Row } from "react-bootstrap";
import homeLogo from "./img/home.png";
import "./style.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Image src={homeLogo} fluid className="home-logo" />

      <Row className="justify-content-center">
        <Link to="/netpresentvalue" className="link-container">
          <p className="link-dalam">NPV</p>
        </Link>
        <Link to="/#" className="link-container">
          <p className="link-dalam">Adit</p>
        </Link>
        <Link to="/#" className="link-container">
          <p className="link-dalam">Aji</p>
        </Link>
        <Link to="/wacc" className="link-container">
          <p className="link-dalam">WACC</p>
        </Link>
      </Row>
    </div>
  );
}

export default Home;
