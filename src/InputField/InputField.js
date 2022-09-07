import React from "react";

const inputField = (props) => {
    let validationMessage = 'it long enough';
    if(props.inputLength <=5){
        validationMessage = 'is too short';
    } 

return(
    <div>
        
        <p>{props.children}</p>
        <p>{validationMessage}</p>
        {/* {
            props.inputLength <=5?
            <p>Text too short </p>
          : <p>Text long enough</p>

        } */}
        
    </div>
)
}

export default inputField;