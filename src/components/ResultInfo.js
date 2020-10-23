import React from 'react';
import Android from './Android';

const ResultInfo = ({resultBMI,resultStatus,resultStatClr,setSizeT,setSizeH}) => {
    return (
        <div className="result-info-box br3 br--right">
           <div className="fl w-100 pb3"><h4 className="lobster">Result</h4></div>
           <div className="fl w-100 pb3">
                 <Android sizeT={setSizeT} sizeH={setSizeH}></Android>
           </div>
            <div className="fl w-100 pb3">
                <div className="dib pr3">
                <h5><b className="lobster">Status</b>: <b style={{color:resultStatClr}}>{(!resultStatus) ? 'TBD': resultStatus}</b></h5>
                </div>
                <div className="dib pl3">
                    <h5><b className="lobster">BMI</b> = {resultBMI}</h5>
                </div>
            </div>
            <div className="fl w-100 pb3">
                <div className="w-80 grow tc bg-white dib br3 bw-2 shadow-5">
                    <h5 className="lobster">BMI Categories</h5>
                    <ul>
                    <li>{`Underweight = < 18.5`}</li>
                    <li>{`Normal weight = 18.5–24.9`}</li>
                    <li>{`Overweight = 25–29.9`}</li>
                    <li>{`Obesity = BMI of 30 or greater`}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ResultInfo;