import React from "react";
import { Image } from "react-bootstrap";
import lossLogo from "./img/loss.jpg";

function Loss() {
  return (
    <div>
      <p>We Think You Shouldn't Invest in This Property</p>
      <Image src={lossLogo} fluid className="loss-logo" />
    </div>
  );
}

export default Loss;
