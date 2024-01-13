import React, {useState} from 'react';
import {operations} from './Data.js';
import OperationButton from './OperationButton.js'


const InputOutputSection = ()=> {  
    
    const [calcMessage, setCalcMessage] = useState('');
    const [calcResult, setCalcResult] = useState('');
    const [messageClass, setMessageClass] = useState('');


    function isValid(value) {
        
        let reason = '';
        if (value.length === 0) {
            reason = 'cannot be empty';
            return {
                valid: false,
                reason: reason
            };
        }
        if (isNaN(Number(value))) {
            
            if (value.split('').find((char) => {
                return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
            })) {
                reason = 'cannot contain alphabets other than "e"';
            }
            else {
                reason = 'cannot contain invalid characters';
            }

            return {
                valid: false,
                reason: reason
            }
        }
        else {
            return {
                valid: true,                
            }
        }

    }

    function evaluateExpression(event) {
        event.preventDefault();

        console.log(event.nativeEvent.submitter, 'submitted the form');

        const form = event.target;
        
        const input1 = form.number1.value;
            const valid_input1 = isValid(input1);

        const input2 = form.number2.value;
            const valid_input2 = isValid(input2);

        if (!valid_input1.valid) {
            updateOutputDisplay(false, `Num1 ${valid_input1.reason}`);
            console.log(valid_input1);
            return;
        }
        if (!valid_input2.valid) {
            updateOutputDisplay(false, `Num2 ${valid_input2.reason}`);
            console.log(valid_input2);
            return;
        }
        

        const submitButton = event.nativeEvent.submitter;
        const operation = submitButton.getAttribute('data-operation');

        let result;

        switch (operation) {
            case 'ADD':
                result = Number(input1) + Number(input2);
                break;
        
            case 'SUBTRACT':
                result = Number(input1) - Number(input2);
                break;

            case 'MULTIPLY':
                result = Number(input1) * Number(input2);
                break;
            
            case 'DIVIDE':
                result = (Number(input1) / Number(input2)).toFixed(3);
                break;
            
            default:
                break;
        }

        console.log('RESULT:',result);
        updateOutputDisplay(true, `Result: ${result}`);
    }

    function updateOutputDisplay(validInput, response) {
        if (!validInput) {
            setCalcMessage('FAILURE!');    
            setCalcResult(response);
            setMessageClass('failure');
        }    
        else {
            setCalcMessage('SUCCESS');
            setMessageClass('success');
            setCalcResult(response);
        }    
    }    


    return (
        <div className="main-container">
            <form id="calculator_form" onSubmit={evaluateExpression}>
                <div className="input-field-container">
                    <input type="text" name="number1" id="number1" placeholder='Num1'/><div className="validInputCheck material-symbols-outlined"></div>
                </div>
                <div className="input-field-container">
                    <input type="text" name="number2" id="number2" placeholder='Num2'/><div className="validInputCheck material-symbols-outlined"></div>
                </div>

                <div className="operation-buttons-container">

                    {
                        operations.map((op)=>{
                            return(
                                <OperationButton 
                                key={`${op}-button`}
                                id={`${op}-button`}
                                operationType={op}
                                form='calculator_form'
                                />
                            )
                        })
                    }

                </div>
                
            </form>

            <div className="output-container">
                <p className={`output-message ${messageClass}`}>{calcMessage}</p>
                <p className="output-result">{calcResult}</p>
            </div>
        </div>
    )
    
}

export default InputOutputSection;