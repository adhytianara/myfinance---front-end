import React, { Component,useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Profit from "./Profit";
import Loss from "./Loss";

function ROI() {
    const { register, handleSubmit } = useForm();
    const [startDate,setStartDate] = useState(new Date());
    const [currentDate,setCurrentDate] = useState(new Date());  
    const [roi, setRoi] = useState(0);
    const [annualizedRoi, setAnnualizedRoi] = useState(0);
    const [profit, setProfit] = useState(null);

    const onSubmit = async (data) => {
        console.log(data);
        data["originalPrice"] = parseFloat(data["originalPrice"]);
        data["currentPrice"] = parseFloat(data["currentPrice"]);
        // console.log(JSON.stringify({ body: JSON.stringify(data) }));
        console.log(data["originalPrice"]);
        console.log(data["currentPrice"]);
        console.log();
        countROI(data,startDate,currentDate);
    }

    function countROI(data,startDate,currentDate){
        const one_day = 1000 * 60 * 60 * 24 ;
        var days = (currentDate.getTime()-startDate.getTime())/one_day ;
        days = days.toFixed(0); 
        
        var roi = (data["currentPrice"] - data["originalPrice"])/ data["originalPrice"] * 100
        var annualizedRoi = (((data["currentPrice"]/data["originalPrice"])**(1/(days/365)))-1) * 100

        if(Number.isNaN(roi) || Number.isNaN(annualizedRoi)){
            setProfit("Please Fill in All Forms");
        } else {
            setRoi(roi)
            if(!isFinite(annualizedRoi)){
                annualizedRoi = "Your Annualized ROI is too High. You get much profit from this"
            }
            setAnnualizedRoi(annualizedRoi)
            
            if (roi >0 || annualizedRoi > 0){
                setProfit(<Profit />);
            } else {
                setProfit(<Loss />);
            }
        }
    }

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
                        <input type="number" name="originalPrice" ref={register()}/>
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
                        <input type="number" name="currentPrice" ref={register()} />
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
                    onClick={handleSubmit(onSubmit)}
                >
                    Check my Investment
                </button>
                </Row>
                <h2 className="result">{profit}</h2>
                <h2 className="result">Your ROI : {roi} %</h2>
                <h2 className="result">Your Annualized ROI : {annualizedRoi} %</h2>
            </form>
        </div>
    );

}

export default ROI;