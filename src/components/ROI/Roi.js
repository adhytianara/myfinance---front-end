import React, { useState } from 'react';
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
        
        const one_day = 1000 * 60 * 60 * 24 ;
        var days = (currentDate.getTime()-startDate.getTime())/one_day ;
        days = days.toFixed(0); 
    
        fetchRoi(data["originalPrice"],data["currentPrice"],days, returnOfInvestment(data["originalPrice"], data["currentPrice"]));
    }

    function returnOfInvestment(original,current){
        return (current-original)/original * 100
    }
    
    function fetchRoi(original, current, days, roi) {
        fetch('https://1i5zak2pm3.execute-api.us-east-1.amazonaws.com/getroi/getroi?original='+original+'&current='+current +'&days='+days)
            .then(response => {
                console.log(response)
                return response.json();
            })
            .then(result => {
                setRoi(roi)
                    console.log(result)
                    if(result == null){
                        result = "Your Annualized ROI is too High. You get much profit from this"
                    }
                    setAnnualizedRoi(result)
                    
                    if (roi >0 || result > 0){
                        setProfit(<Profit />);
                    } else {
                        setProfit(<Loss />);
                    }
            })
            .catch(e => {
                setProfit("Please Fill in All Forms");
            })
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
                <h2 className="result">Your Annualized ROI : {annualizedRoi} </h2>
            </form>
        </div>
    );

}

export default ROI;