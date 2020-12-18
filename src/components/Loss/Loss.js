import React from "react";
import { Image, Row } from "react-bootstrap";
import lossLogo from "./img/loss.png";
import "./style.css";
import { Link } from "react-router-dom";

function Loss() {
  return (
    <div>
      <p className="answer">Hmmm, we think your business is not doing well </p>
      <Image src={lossLogo} fluid className="loss-logo" />
    </div>
  );
}

export default Loss;
