import React from 'react'
import './sle.css';
import { Row } from "react-bootstrap";

function Equations({equations}) {
    const equationList = equations.map(equation => {
        return (
            <Row className="justify-content-center">
                <label className="sle-variable">( equation.id )</label>
                <div className="form-container">
                    <input className="ml-3 sle-coef" type="number" name="" />
                    <label className="ml-2 sle-variable">x</label>
    
                    <input className="ml-3 sle-coef" type="number" name="" />
                    <label className="ml-2 sle-variable">y</label>
    
                    <input className="ml-3 sle-coef" type="number" name="" />
                    <label className="ml-2 sle-variable">z</label>
    
                    <label className="ml-2 sle-variable">=</label>
                    <input className="ml-2 sle-coef" type="number" name="" />
                </div>
            </Row>
        )
    })
    return(
        <div>
            { equationList }
        </div>
    )

}

export default Equations
