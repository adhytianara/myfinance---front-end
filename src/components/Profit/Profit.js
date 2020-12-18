import React from "react";
import { Image, Row } from "react-bootstrap";
import profitLogo from "./img/profit.png";
import "./styles.css";
import { Link } from "react-router-dom";

function Profit() {
  return (
    <div>
      <p className="answer">Hei! We Think Your Business is Good</p>
      <Image src={profitLogo} fluid className="profit-logo" />
    </div>
  );
}

export default Profit;
