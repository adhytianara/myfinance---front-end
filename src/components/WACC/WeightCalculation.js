import React from 'react'
import { Row } from "react-bootstrap";
import ProgressBar from './ProgressBar';

function WeightCalculation(props) {
    return (
        <div>
            <ProgressBar position={2} />
            <Row className="justify-content-center">
                <div className="form-container">
                    <label>Market capitalization</label>
                    <br></br>
                    <input type="number" name="marketCap"/>
                </div>
                <div className="form-container">
                    <label>Total debt</label>
                    <br></br>
                    <input type="number" name="debt"/>
                </div>
            </Row>
            <Row className="justify-content-center">
                <button onClick={props.next}>Next</button>
            </Row>
        </div>
    );
}

export default WeightCalculation;