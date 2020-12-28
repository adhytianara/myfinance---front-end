import React from 'react'
import { Row } from "react-bootstrap";
import ProgressBar from './ProgressBar';

function CostDebt(props) {

    function fetchDebtCost(expense, total, taxRate) {
        fetch('https://6n9rztumeg.execute-api.us-east-1.amazonaws.com/test/debt-input?expense='+expense+'&total='+total +'&tax='+taxRate)
            .then(response => {
                return response.json();
            })
            .then(rslt => {
                props.debtSetter(rslt);
            })
    }

    return (
        <div>
            <ProgressBar position={1} />
            <Row className="justify-content-center">
                <div className="form-container">
                    <label>Debt expenses</label>
                    <br></br>
                    <input type="number" name="expense" min="0" value={props.getState('expense')} onChange={props.handleChange}/>
                </div>
                <div className="form-container">
                    <label>Total debt</label>
                    <br></br>
                    <input type="number" name="total" min="0" value={props.getState('total')} onChange={props.handleChange}/>
                </div>
                <div className="form-container">
                    <label>Tax rate<br /> (in percentage)</label>
                    <br></br>
                    <input type="number" name="taxRate" step="0.01" min="0" max="1" value={props.getState('taxRate')} onChange={props.handleChange}/>
                </div>
            </Row>
            <Row className="justify-content-center">
                <button onClick={() => {fetchDebtCost(props.getState('expense'),props.getState('total'),props.getState('taxRate')); props.next();}}>
                    Next
                </button>
            </Row>
        </div>
    );
}

export default CostDebt;