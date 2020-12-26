import React from 'react'
import { Row } from "react-bootstrap";
import ProgressBar from './ProgressBar';

function CostEquity(props) {
    return (
        <div>
            <ProgressBar position={0} />
            <Row className="justify-content-center">
                <div className="form-container">
                    <label>Risk-free Rate of Return<br /> (in percentage)</label>
                    <br></br>
                    <input type="number" name="rf" step="0.01" min="0" max="1" value={props.getState('rf')} onChange={props.handleChange}/>
                </div>
                <div className="form-container">
                    <label>Beta<br /> (in percentage)</label>
                    <br></br>
                    <input type="number" name="beta" step="0.01" min="0" max="1" value={props.getState('beta')} onChange={props.handleChange}/>
                </div>
                <div className="form-container">
                    <label>Market Rate of Return<br /> (in percentage)</label>
                    <br></br>
                    <input type="number" name="rm" step="0.01" min="0" max="1" value={props.getState('rm')} onChange={props.handleChange}/>
                </div>
            </Row>
            <Row className="justify-content-center">
                <button onClick={props.next}>Next</button>
            </Row>
        </div>
    );
}

export default CostEquity;