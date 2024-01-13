import React from 'react';

const OutputSection = (props)=>{
    
    const {outputStatus, response, statusClass} = props.outputDetails;

    return (
        <div className="output-container">
            <p className={`output-message ${statusClass}`}>{outputStatus}</p>
            <p className="output-result">{response}</p>
        </div>
    )
};

export default OutputSection;