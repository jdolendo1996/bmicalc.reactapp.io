import React from 'react';
import { TextInput, Icon, Switch, Button } from 'react-materialize';

const Calculator = ({toggleChangeConv, onChecked, handleInputChange, onClicked}) => {

        return (
                <form>
                        <h2 className="lobster">Check your BMI</h2>
                        <div className="fl w-100 pa2">
                                <Switch
                                id="toggleConv"
                                offLabel="Standard"
                                onChange={toggleChangeConv}
                                checked={onChecked}
                                onLabel="Metric"
                                />
                        </div>
                        
                        <div className="lobster f3 fl w-100 pa2">
                                <div className="tl pl3 w-50 dib">Height</div>
                                <div className="w-50 dib">Weight</div>
                        </div>
                        
                        {!onChecked ?
                                <React.Fragment>
                                        <div className="fl w-third pa2">
                                        
                                                <TextInput
                                                        icon={<Icon>height</Icon>}
                                                        id="feet"
                                                        label="feet"
                                                        name="feet"
                                                        type="number"
                                                        onChange={handleInputChange}
                                                />
                                        </div>
                                        <div className="fl w-third pa2">
                                                <TextInput
                                                        id="inches"
                                                        label="inches"
                                                        name="inches"
                                                        type="number"
                                                        onChange={handleInputChange}
                                                />
                                        </div>
                                        <div className="fl w-third pa2">
                                                <TextInput
                                                        icon={<Icon>fitness_center</Icon>}
                                                        id="weight"
                                                        label="pounds"
                                                        name="pounds"
                                                        type="number"
                                                        onChange={handleInputChange}
                                                />
                                        </div>
                                </React.Fragment>
                          :
                                <React.Fragment>
                                        <div className="fl w-50 pa2">
                                        
                                                <TextInput
                                                        icon={<Icon>height</Icon>}
                                                        id="centimeters"
                                                        label="centimeters"
                                                        name="centimeters"
                                                        type="number"
                                                        onChange={handleInputChange}
                                                />
                                        </div>
                                        <div className="fl w-50 pa2">
                                                <TextInput
                                                        icon={<Icon>fitness_center</Icon>}
                                                        id="kilograms"
                                                        label="kilograms"
                                                        name="kilograms"
                                                        type="number"
                                                        onChange={handleInputChange}
                                                />
                                        </div>
                                </React.Fragment>
                        }
                       
                        <div className="fl w-100 pa2 pb4">
                                <Button
                                large
                                node="a"
                                waves="light"
                                className="btn"
                                onClick={onClicked}
                                >
                                Compute
                                </Button>
                        </div>
                </form>
        );
}



export default Calculator;