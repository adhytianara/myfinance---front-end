import React from "react";
import { Image } from "react-bootstrap";
import lossLogo from "./img/loss.png";
import "./style.css";

function Loss() {
  return (
    <div>
      <p className="answer">Hmmm, it seems like your business not going well </p>
      <Image src={lossLogo} fluid className="loss-logo" />
    </div>
  );
}

export default Loss;
