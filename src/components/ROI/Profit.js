import React from "react";
import { Image } from "react-bootstrap";
import profitLogo from "./img/profit.jpg";

function Profit() {
  return (
    <div>
      <p>You are Investing in Good Property</p>
      <Image src={profitLogo} fluid className="profit-logo" />
    </div>
  );
}

export default Profit;
