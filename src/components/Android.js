import React from 'react';

const Android = ({sizeT,sizeH}) => {
    return (
        <div className="robots">
            <div className="android"> 
                <div style={{width:sizeH}} className="head"> 
                    <div className="eyes"> 
                        <div className="left_eye"></div> 
                        <div className="right_eye"></div>
                    </div> 
                </div> 
                <div className="upper_body"> 
                    <div className="left_arm"></div> 
                    <div style={{width:sizeT}} className="torso"></div> 
                    <div className="right_arm"></div> 
                </div> 
                <div className="lower_body"> 
                    <div className="left_leg"></div> 
                    <div className="right_leg"></div> 
                </div> 
            </div>
        </div>
    );
}

export default Android;