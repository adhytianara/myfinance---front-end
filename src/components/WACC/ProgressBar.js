import React from 'react';
import { Steps } from 'antd';
import './progress.css';
import "antd/dist/antd.css";

function ProgressBar({position}) {
    const { Step } = Steps;
    
    return (
        <div>
            <Steps size="small" current={position} className="stepss">
                <Step title="Cost of equity" />
                <Step title="Cost of debt" />
                <Step title="Weight calculation" />
                <Step title="Result" />
            </Steps>
            <br/>
        </div>
    );
}

export default ProgressBar;