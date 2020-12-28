import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Steps as Activities, Step as Subactivity } from "react-step-builder";
import CostEquity from './CostEquity';
import CostDebt from './CostDebt';
import WeightCalculation from './WeightCalculation';
import WaccResult from './WaccResult';

function Wacc() {
    const waccCurry = equityCost => debtCost => marketCap => totalDebt => 100 * (equityCost * (marketCap/(marketCap+totalDebt))  + debtCost * (totalDebt/(marketCap+totalDebt)));
    const [waccEquityCost, setWaccEquity] = useState(null);
    const [waccDebtCost, setWaccDebt] = useState(null);
    const [waccMarketCap, setWaccMCap] = useState(null);
    const [wacctotalDebt, setWaccTotalDebt] = useState(null);

    return (
        <div>
            <h1> Good or Bad Investment? </h1>
            <p className="calculate">Calculate with Weighted Average Cost of Capital (WACC)</p>
            <br/>
            <div>
                <Activities>
                    <Subactivity component={CostEquity} equitySetter={val => setWaccEquity(val)} />
                    <Subactivity component={CostDebt} debtSetter={val => setWaccDebt(val)} />
                    <Subactivity component={WeightCalculation} resultSetter={marketCap => totalDebt => {setWaccMCap(marketCap); setWaccTotalDebt(totalDebt);}} />
                    <Subactivity component={WaccResult} result={waccCurry(waccEquityCost)(waccDebtCost)(waccMarketCap)(wacctotalDebt)} />
                </Activities>
            </div>
        </div>
    );
}

export default Wacc
