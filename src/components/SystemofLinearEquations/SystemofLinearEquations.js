import './sle.css';
import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

function SystemofLinearEquations() {
    const { register, handleSubmit } = useForm();
    const [answer, setAnswer] = useState(null);

    function fetchInternalRateReturn(param) {
        console.log(param)
        fetch("https://n3bk4fza9g.execute-api.us-east-1.amazonaws.com/default/pemfung2020-backend-adhytia?" + param)
            .then(response => {
                console.log(response)
                return response.text();
            })
            .then(result => {
                console.log(result);
                setAnswer(result);
            })
            .catch(e => {
                setAnswer("Please Fill in All Forms");
            })
    }
    
    const onSubmit = async (data) => {
        var param = `x1=${data["x1"]}&y1=${data["y1"]}&z1=${data["z1"]}&r1=${data["r1"]}&x2=${data["x2"]}&y2=${data["y2"]}&z2=${data["z2"]}&r2=${data["r2"]}&x3=${data["x3"]}&y3=${data["y3"]}&z3=${data["z3"]}&r3=${data["r3"]}`;
        console.log("param " + param);
        fetchInternalRateReturn(param);
    };
    return (
        <div>
            <h1>System of Linear Equations</h1>
            <p className="calculate">Let's solve <br /> System of Linear Equations: Three Variables</p>
            
            <form>
                <h2>Your Equations</h2>
                <Row className="justify-content-center">
                    <label className="sle-variable">( 1 )</label>
                    <div className="form-container">
                        <input className="ml-3 sle-coef" type="number" name="x1" ref={register()} />
                        <label className="ml-2 sle-variable">x</label>

                        <input className="ml-3 sle-coef" type="number" name="y1" ref={register()} />
                        <label className="ml-2 sle-variable">y</label>

                        <input className="ml-3 sle-coef" type="number" name="z1" ref={register()} />
                        <label className="ml-2 sle-variable">z</label>

                        <label className="ml-2 sle-variable">=</label>
                        <input className="ml-2 sle-coef" type="number" name="r1" ref={register()} />
                    </div>
                </Row>
                <Row className="justify-content-center">
                    <label className="sle-variable">( 2 )</label>
                    <div className="form-container">
                        <input className="ml-3 sle-coef" type="number" name="x2" ref={register()} />
                        <label className="ml-2 sle-variable">x</label>

                        <input className="ml-3 sle-coef" type="number" name="y2" ref={register()} />
                        <label className="ml-2 sle-variable">y</label>

                        <input className="ml-3 sle-coef" type="number" name="z2" ref={register()} />
                        <label className="ml-2 sle-variable">z</label>

                        <label className="ml-2 sle-variable">=</label>
                        <input className="ml-2 sle-coef" type="number" name="r2" ref={register()} />
                    </div>
                </Row>
                <Row className="justify-content-center">
                    <label className="sle-variable">( 3 )</label>
                    <div className="form-container">
                        <input className="ml-3 sle-coef" type="number" name="x3" ref={register()} />
                        <label className="ml-2 sle-variable">x</label>

                        <input className="ml-3 sle-coef" type="number" name="y3" ref={register()} />
                        <label className="ml-2 sle-variable">y</label>

                        <input className="ml-3 sle-coef" type="number" name="z3" ref={register()} />
                        <label className="ml-2 sle-variable">z</label>

                        <label className="ml-2 sle-variable">=</label>
                        <input className="ml-2 sle-coef" type="number" name="r3" ref={register()} />
                    </div>
                </Row>

                <h1>Result: </h1>
                <h1>{answer}</h1>

                <Row className="justify-content-center">
                    <button className="submit-button" type="button" onClick={handleSubmit(onSubmit)} >
                        Solve System
                    </button>
                </Row>

            </form>
        </div>
    )
}

export default SystemofLinearEquations
