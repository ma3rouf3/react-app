import React from "react";




const userInput = (porps) => {

        return(
            <div >
            <input type="text" onChange={porps.changed} value={porps.currentName}  />
            </div> 
        )
    };

export default userInput;