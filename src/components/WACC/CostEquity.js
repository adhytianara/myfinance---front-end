import React from 'react'
import { Row } from "react-bootstrap";
import ProgressBar from './ProgressBar';

function CostEquity(props) {
    return (
        <div>
            <ProgressBar position={0} />
            <Row className="justify-content-center">
                <div className="form-container">
                    <label>Risk-free Rate of Return</label>
                    <br></br>
                    <input type="number" name="rf"/>
                </div>
                <div className="form-container">
                    <label>Beta</label>
                    <br></br>
                    <input type="number" name="beta"/>
                </div>
                <div className="form-container">
                    <label>Market Rate of Return</label>
                    <br></br>
                    <input type="number" name="rm"/>
                </div>
            </Row>
            <Row className="justify-content-center">
                <button onClick={props.next}>Next</button>
            </Row>
        </div>
    );
}

export default CostEquity;