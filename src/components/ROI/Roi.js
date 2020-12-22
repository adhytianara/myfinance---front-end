import React, { Component,useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ROI() {
    const [startDate,setStartDate] = useState(new Date())
    const [currentDate,setCurrentDate] = useState(new Date())

    return(
        <div>
            <h1> Percentage of Your Investment? </h1>
            <p className="calculate"> How many percentage you got from the Investment?</p>
            <form>
                <h2>Original Investment Value</h2>
                <Row className="justify-content-center">
                    <div className="form-container">
                        <label> Original Price </label>
                        <br></br>
                        <input type="number" name="originalPrice" />
                    </div>
                    <div>                          
                        <label> Date Buying </label>
                        <br></br>
                        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                    </div>
                </Row>
                <h2>Investment Value at This Time</h2>
                <Row className="justify-content-center">
                    <div className="form-container">
                        <label> Current Price </label>
                        <br></br>
                        <input type="number" name="currentPrice" />
                    </div>
                    <div>                          
                        <label> Current Date </label>
                        <br></br>
                        <DatePicker selected={currentDate} onChange={date => setCurrentDate(date)} />
                    </div>
                </Row>
                <Row className="justify-content-center">
                <button
                    className="submit-button"
                    type="button"
                >
                    Check my Investment
                </button>
                </Row>
            </form>
        </div>
    );
}

export default ROI