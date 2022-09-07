import React from "react";



const userOutput=(prpos) => {

    return(
            <div >
                <p onClick={prpos.click}>UserName : {prpos.userName} </p>
                <p >I'm a  hope I'll be overwritten !! </p>
            </div>
        )
    };


export default userOutput;