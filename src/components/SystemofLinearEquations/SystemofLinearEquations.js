import React from 'react'
import './sle.css';
import { Row } from "react-bootstrap";

function SystemofLinearEquations() {

    return (
        <div>
            <h1>System of Linear Equations</h1>
            <p className="calculate">Let's solve <br /> System of Linear Equations: Three Variables</p>
            
            <form>
                <h2>Your Equations</h2>
                <Row className="justify-content-center">
                    <label className="sle-variable">( 1 )</label>
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
                <Row className="justify-content-center">
                    <label className="sle-variable">( 2 )</label>
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
                <Row className="justify-content-center">
                    <label className="sle-variable">( 3 )</label>
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

                <Row className="justify-content-center">
                    <button className="submit-button" type="button" >
                        Solve System
                    </button>
                </Row>

                <h1 className="result">Result : </h1>
            </form>
        </div>
    )
}

export default SystemofLinearEquations
