import React from 'react'
import { Row } from "react-bootstrap";
import ProgressBar from './ProgressBar';

function CostDebt(props) {
    return (
        <div>
            <ProgressBar position={1} />
            <Row className="justify-content-center">
                <div className="form-container">
                    <label>Debt expenses</label>
                    <br></br>
                    <input type="number" name="expense"/>
                </div>
                <div className="form-container">
                    <label>Total debt</label>
                    <br></br>
                    <input type="number" name="total"/>
                </div>
                <div className="form-container">
                    <label>Tax rate</label>
                    <br></br>
                    <input type="number" name="taxRate"/>
                </div>
            </Row>
            <Row className="justify-content-center">
                <button onClick={props.next}>Next</button>
            </Row>
        </div>
    );
}

export default CostDebt;