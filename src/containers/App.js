import React, {Component} from 'react';
import Calculator from '../components/Calculator';
import ResultInfo from '../components/ResultInfo';

class App extends Component {

    constructor(){
        super();
        this.state = {
            isChecked: false,
            isBMI:0,
            isStatus:'',
            isStatClr:'',
            isSizeT:'',
            isSizeH:''
        };
    }
   

    toggleChangeConv = (event) => {
        this.setState({ isChecked: (!this.state.isChecked) ? true : false});
    }
   
    handleInputChange = (event) => {
        const value =  event.target.value;
        const name  =  event.target.name;
        this.setState({
            [name]: value
        });
    }

    onClicked = (event) => {
        
        let result_bmi = 0;

        //CALCULATE BMI
        if(this.state.isChecked){
           result_bmi = (this.state.kilograms / Math.pow((this.state.centimeters/100), 2)).toFixed(1);
        }else{
           result_bmi = ((703 * Number(this.state.pounds)) / Math.pow((Number(this.state.feet) * 12) + Number(this.state.inches), 2)).toFixed(1);
        }

        //GET STATUS
        if(result_bmi  < 18.5){
            this.setState({isStatus : 'Underweight', isStatClr: '#00FFFF', isSizeT: '150px', isSizeH: '150px'}); 
        }else if( ( result_bmi >= 18.5) && (result_bmi <= 24.9) ){
            this.setState({isStatus : 'Normal Weight', isStatClr: '#7CFC00', isSizeT: '200px', isSizeH: '163px'}); 
        }else if( ( result_bmi >= 25) && (result_bmi <= 29.9) ){
            this.setState({isStatus : 'Overweight', isStatClr: '#663399', isSizeT: '500px', isSizeH: '210px'}); 
        }else{
            this.setState({isStatus : 'Obesity', isStatClr: '#B22222', isSizeT: '500px', isSizeH: '210px'}); 
        }

        this.setState({isBMI : result_bmi}); 
    }
   

    render(){
        
        return(
            
            <div className="h-auto tc bg-white dib br3 ma5 bw-2 shadow-5 ">
                <div className="box-grid">
                    <Calculator 
                        toggleChangeConv={this.toggleChangeConv} 
                        onChecked={this.state.isChecked}
                        handleInputChange={this.handleInputChange}
                        onClicked={this.onClicked}
                    >
                    </Calculator>
                    <ResultInfo
                        resultBMI={this.state.isBMI}
                        resultStatus={this.state.isStatus}
                        resultStatClr={this.state.isStatClr}
                        setSizeT={this.state.isSizeT}
                        setSizeH={this.state.isSizeH}
                    ></ResultInfo>
                </div>
            </div>
        )
    }


}

export default App;