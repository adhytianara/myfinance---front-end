import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Steps as Activities, Step as Subactivity } from "react-step-builder";
import CostEquity from './CostEquity';
import CostDebt from './CostDebt';
import WeightCalculation from './WeightCalculation';
import WaccResult from './WaccResult';

function Wacc() {
    const waccCurry = equityCost => debtCost => marketCap => totalDebt => equityCost * (marketCap/(marketCap+totalDebt))  + debtCost * (totalDebt/(marketCap+totalDebt));
    const [waccEquityDone, setWaccEquity] = useState(waccCurry);
    const [waccDebtDone, setWaccDebt] = useState(waccEquityDone);
    const [waccResult, setWaccResult] = useState(0);

    return (
        <div>
            <h1> Good or Bad Investment? </h1>
            <p className="calculate">Calculate with Weighted Average Cost of Capital (WACC)</p>
            <br/>
            <div>
                <Activities>
                    <Subactivity component={CostEquity} equitySetter={val => setWaccEquity(() => waccCurry(val))} />
                    <Subactivity component={CostDebt} debtSetter={val => setWaccDebt(() => waccEquityDone(val))} />
                    <Subactivity component={WeightCalculation} resultSetter={marketCap => totalDebt => setWaccResult(() => waccDebtDone(marketCap)(totalDebt))} />
                    <Subactivity component={WaccResult} result={waccResult} />
                </Activities>
            </div>
        </div>
    );
}

export default Wacc
