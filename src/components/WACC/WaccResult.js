import React from 'react'
import { Row } from "react-bootstrap";
import ProgressBar from './ProgressBar';

function WaccResult(props) {
    return (
        <div>
            <ProgressBar position={3} />
            <Row className="justify-content-center">
                <h1>WACC = 0</h1>
            </Row>
            <Row className="justify-content-center">
                <h5>Lorem ipsum dolor sit amet.</h5>
            </Row>
        </div>
    );
}

export default WaccResult;