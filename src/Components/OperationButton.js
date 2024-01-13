import React from 'react';

const OperationButton = ({operationType, id, form})=> {

    console.log(operationType);
    
    function getSymbol(operationType) {

        let buttonSymbol;

        switch (operationType) {
            case 'ADD':
                buttonSymbol = '+';
                break;
        
            case 'SUBTRACT':
                buttonSymbol = '-';
                break;

            case 'MULTIPLY':
                buttonSymbol = '*';
                break;
            
            case 'DIVIDE':
                buttonSymbol = '/';
            
            default:
                break;
        }

        console.log(buttonSymbol);
        return buttonSymbol;
    }

    return <button className="operation-button" id={id} form={form} type='submit' data-operation={operationType}>{getSymbol(operationType)}</button>;
}

export default OperationButton;