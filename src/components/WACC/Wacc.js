import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Steps as Activities, Step as Subactivity } from "react-step-builder";
import CostEquity from './CostEquity';
import CostDebt from './CostDebt';
import WeightCalculation from './WeightCalculation';
import WaccResult from './WaccResult';

function Wacc() {
    return (
        <div>
            <h1> Good or Bad Investment? </h1>
            <p className="calculate">Calculate with Weighted Average Cost of Capital (WACC)</p>
            <br/>
            <div>
                <Activities>
                    <Subactivity component={CostEquity} />
                    <Subactivity component={CostDebt} />
                    <Subactivity component={WeightCalculation} />
                    <Subactivity component={WaccResult} />
                </Activities>
            </div>
        </div>
    );
}

export default Wacc
