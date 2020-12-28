import React from 'react'
import { Row } from "react-bootstrap";
import ProgressBar from './ProgressBar';

function WaccResult(props) {
    return (
        <div>
            <ProgressBar position={3} />
            <Row className="justify-content-center">
                <h1>WACC = {props.result}% </h1>
            </Row>
            <Row className="justify-content-center">
                <h5 style={{textAlign: 'center'}}>The expected return for this investment is {Math.round(props.result*100)/100}%. <br/>
                 This means the company is expected to pay its investor an average of ${Math.round(props.result*100)/10000} in return for every $1 funded.</h5>
            </Row>
        </div>
    );
}

export default WaccResult;