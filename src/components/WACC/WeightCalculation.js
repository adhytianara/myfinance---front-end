import React from 'react'
import { Row } from "react-bootstrap";
import ProgressBar from './ProgressBar';

function WeightCalculation(props) {
    return (
        <div>
            <ProgressBar position={2} />
            <Row className="justify-content-center">
                <div className="form-container">
                    <label>Market capitalization<br /></label>
                    <br></br>
                    <input type="number" name="marketCap" min="0" value={props.getState('marketCap')} onChange={props.handleChange}/>
                </div>
                <div className="form-container">
                    <label>Total debt<br /></label>
                    <br></br>
                    <input type="number" name="total" value={props.getState('total')} disabled={true}/>
                </div>
            </Row>
            <Row className="justify-content-center">
                <button onClick={() => {props.resultSetter(Number(props.getState('marketCap')))(Number(props.getState('total'))); props.next();}}>
                    Next
                </button>
            </Row>
        </div>
    );
}

export default WeightCalculation;