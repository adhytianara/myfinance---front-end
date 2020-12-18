import React from "react";
import { Image } from "react-bootstrap";
import profitLogo from "./img/profit.png";
import "./styles.css";

function Profit() {
  return (
    <div>
      <p>Hei! We Think Your Business is Good</p>
      <Image src={profitLogo} fluid className="profit-logo" />
    </div>
  );
}

export default Profit;
