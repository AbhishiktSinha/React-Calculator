import React, {useState} from 'react';
import InputOutputSection from './InputOutputSection';

const CalculatorBody = ()=> {
    
    return (
        <div className="calculator-body-container">
            <header><h1>React Calculator</h1></header>

            <InputOutputSection />            
            
        </div>
    )
}

export default CalculatorBody;